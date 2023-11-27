import Node from './node'

/**
 * Represents a linked list.
 */
export default class List {
    #head
    #tail
    /**
     * Constructs an empty linked list.
     */
    constructor() {
        this.#head = null
        this.#tail = null
        // refactor code
    }

    /**
     * Inserts an element at the beginning of the list.
     * @param {*} element - The element to be inserted.
     */
    insertAtBeginning(element) {
        const node = new Node(element)
        node.next = this.#head
        this.#head = node
        if (node.next === null) {
            this.#tail = node
        }
    }

    /**
     * Inserts an element at the end of the list.
     * @param {*} element - The element to be inserted.
     */
    insertAtEnd(element) {
        const node = new Node(element)

        if (this.#head === null) {
            this.#head = this.#tail = node
            return
        }

        let last = this.#tail
        last.next = node
        node.prev = last
        this.#tail = node
    }

    /**
     * Inserts an element after a specified element.
     * @param {*} prevElement - The element after which the new element should be inserted.
     * @param {*} element - The element to be inserted.
     */
    insertAfter(prevElement, element) {
        if (!prevElement) {
            throw new Error('A previous element must be passed')
        }

        const node = new Node(element)
        if (this.#head === null) {
            return
        }

        let last = this.#tail

        if (last && last.element === prevElement) {
            last.next = node
            node.prev = last
            this.#tail = node
            return
        }

        let current = this.#head

        while (
            current &&
            current.next !== null &&
            current.element !== prevElement
        ) {
            current = current.next
        }

        node.prev = current
        node.next = current.next
        current.next.prev = node
        current.next = node
    }

    /**
     * Inserts an element before a specified element.
     * @param {*} nextElement - The element before which the new element should be inserted.
     * @param {*} element - The element to be inserted.
     */
    insertBefore(nextElement, element) {
        if (!nextElement) {
            throw new Error('A next element must be passed')
        }
        const node = new Node(element)

        if (this.#head === null) {
            return
        }

        // If the found next element is the last element
        let last = this.#tail
        let current = this.#head

        if (last?.prev?.next && last.element === nextElement) {
            node.prev = last.prev
            node.next = last
            last.prev.next = node
            last.prev = node
            return
        }

        // Traverse & find the next element value
        while (
            current &&
            current.next !== null &&
            current.element !== nextElement
        ) {
            current = current.next
        }
        // If the found next element is the first element
        if (current.prev === null) {
            node.next = current
            current.prev = node
            this.#head = node
        } else {
            node.prev = current.prev
            node.next = current
            current.prev.next = node
            current.prev = node
        }
    }

    /**
     * Displays the elements of the list.
     * @returns {Array} - An array containing the elements of the list.
     */
    display() {
        let current = this.#head
        const result = []
        while (current !== null) {
            result.push(current.element)
            current = current.next
        }
        return result
    }

    /**
     * Deletes a specified element from the list.
     * @param {*} element - The element to be deleted.
     */
    delete(element) {
        // if the list is empty do nth
        if (this.#head === null) {
            return
        }

        // if there is only one element in the list
        let current = this.#head
        let last = this.#tail
        if (current === last) {
            this.clear()
            return
        }

        // if the requested element is the last one
        if (last && last.element === element) {
            last.prev.next = null
            this.#tail = last.prev
            last.prev = last.next = last.element = null
            return
        }

        while (current && current.element !== element) {
            current = current.next
        }

        if (current?.next?.prev) {
            current.next.prev = current.prev
        }

        if (current?.prev?.next) {
            current.prev.next = current.next
        }

        current.element = current.prev = current.next = null
    }

    /**
     * Deletes the last element from the list.
     */
    deleteLast() {
        // if the list is empty do nth
        if (this.#head === null) {
            return
        }

        // if the list has only one item
        let current = this.#head
        let last = this.#tail
        if (current === last) {
            this.clear()
        } else {
            this.#tail = last.prev
            last.prev.next = null
            last.element = last.prev = last.next = null
        }
    }

    /**
     * Deletes the first element from the list.
     */
    deleteFirst() {
        // if the list is empty do nth
        if (this.#head === null) {
            return
        }
        let current = this.#head
        if (current.next === null) {
            this.#head = null
        } else {
            this.#head = current.next
            current.element = current.prev = current.next = null
        }
    }

    /**
     * Clears all elements from the list.
     */
    clear() {
        this.#head = null
        this.#tail = null
    }

    /**
     * Gets the first element of the list.
     * @returns {*} - The first element of the list.
     */
    getFirst() {
        // if the list is empty do nth
        if (this.#head === null) {
            return
        }
        return this.#head.element
    }

    /**
     * Gets the last element of the list.
     * @returns {*} - The last element of the list.
     */
    getLast() {
        if (this.#head === null) {
            return
        }

        let last = this.#tail
        return last.element
    }

    /**
     * Gets an element from the list.
     * @param {*} element - The element to retrieve.
     * @returns {*} - The specified element.
     */
    get(element) {
        if (this.#head === null) {
            return
        }

        let last = this.#tail
        let current = this.#head

        if (last.element === element) {
            return last.element
        }

        while (current && current.element !== element) {
            current = current.next
        }
        if (current) {
            return current.element
        }
    }

    /**
     * Updates an element in the list.
     * @param {*} currElement - The element to be updated.
     * @param {*} newElement - The new value for the element.
     */
    update(currElement, newElement) {
        if (this.#head === null) {
            return
        }

        let current = this.#head
        let last = this.#tail

        if (last.element === currElement) {
            last.element = newElement
            return
        }

        while (current && current.element !== currElement) {
            current = current.next
        }

        if (current) {
            current.element = newElement
        }
    }
}
