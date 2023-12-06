import { createApp } from 'https://unpkg.com/petite-vue?module'
import List from './dist/list.js'

/**
 * Page offset constant for the number of items per page.
 * @type {number}
 */
const PAGE_OFFSET = 10

/**
 * The API endpoint for fetching cat images.
 * @type {string}
 */
const CATS_API = 'https://api.thecatapi.com/v1/images/search?limit='

createApp({
    /**
     * An array representing the current page items.
     * @type {Array}
     */
    currentPageItems: new Array(PAGE_OFFSET),

    /**
     * An instance of the List class for managing pages.
     * @type {List}
     */
    pagesList: new List(),

    /**
     * The current page number.
     * @type {number}
     */
    pageNumber: 0,

    /**
     * Flag indicating whether images are being loaded.
     * @type {boolean}
     */
    loading: false,

    /**
     * Asynchronously fetches cat images from the API.
     * @param {number} limit - The number of images to fetch.
     * @returns {Promise<{data: Array<Object>|null, error: string|null}>}
     */
    async fetchImages(limit = PAGE_OFFSET) {
        this.loading = true
        try {
            const response = await fetch(`${CATS_API}${limit}`)
            const resp = await response.json()
            const images = resp?.map(({ id, url }) => ({ id, url } || []))
            this.loading = false
            return { data: images, error: null }
        } catch (err) {
            this.loading = false
            console.log('Error fetching images:', err)
            return { data: null, error: err.message || err }
        }
    },

    /**
     * Inserts the next page of images at the specified index.
     * @param {number} index - The index where the page should be inserted.
     * @returns {Array<Object>|null} - The inserted page.
     */
    async insertNextPageAt(index) {
        const { data, error } = await this.fetchImages()
        if (!error) {
            this.pagesList.insertAt(data, index)
        }
        return this.pagesList.getAt(index)
    },

    /**
     * Goes to the next page and updates the current page items.
     */
    async goToNextPage() {
        this.pageNumber++
        let nextPageItems = this.pagesList.getAt(this.pageNumber)
        if (!nextPageItems) {
            nextPageItems = await this.insertNextPageAt(this.pageNumber)
        }
        this.currentPageItems = nextPageItems
    },

    /**
     * Goes to the previous page and updates the current page items.
     */
    goToPrevPage() {
        if (this.pageNumber > 0) {
            this.pageNumber--
        }
        this.currentPageItems = this.pagesList.getAt(this.pageNumber)
    },

    /**
     * Initializes the component by loading the first page of images.
     */
    async mounted() {
        this.currentPageItems = await this.insertNextPageAt(0)
    },
}).mount('#app')
