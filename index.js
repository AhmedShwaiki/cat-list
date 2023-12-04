import { createApp } from 'https://unpkg.com/petite-vue?module'
import List from './src/list.js'

const PAGE_OFFSET = 10
const API = 'https://api.thecatapi.com/v1/images/search?limit='

createApp({
    currentPageItems: new Array(PAGE_OFFSET),
    pagesList: new List(),
    pageNumber: 0,
    loading: false,
    async fetchImages(limit = PAGE_OFFSET) {
        let data = {}
        let error = null
        try {
            this.loading = true
            const response = await fetch(`${API}${limit}`)
            const resp = await response.json()
            data = resp?.map((cat) => ({
                id: cat.id,
                url: cat.url,
            }))
            this.loading = false
        } catch (err) {
            this.loading = false
            error = err
            console.log('Error fetching cat images:', err)
        }
        return { error, data }
    },
    async insertNextPageAt(index) {
        const { data, error } = await this.fetchImages()
        if (!error) {
            this.pagesList.insertAt(data, index)
        }

        return this.pagesList.getAt(index)
    },
    async goToNextPage() {
        this.pageNumber++
        let nextPageItems = this.pagesList.getAt(this.pageNumber)
        if (!nextPageItems) {
            nextPageItems = await this.insertNextPageAt(this.pageNumber)
        }
        this.currentPageItems = nextPageItems
    },
    goToPrevPage() {
        if (this.pageNumber > 0) {
            this.pageNumber--
        }

        this.currentPageItems = this.pagesList.getAt(this.pageNumber)
    },
    async mounted() {
        this.currentPageItems = await this.insertNextPageAt(0)
    },
}).mount('#app')
