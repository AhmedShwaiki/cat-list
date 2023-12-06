import Node from './node'

/**
 * Represents a linked list.
 */
export default class List<T> {
    private _head: Node<T> | null
    private _tail: Node<T> | null
    private _size: number
    /**
     * Constructs an empty linked list.
     */
    constructor() {
        this._head = null
        this._tail = null
        this._size = 0
    }

    _decrementSize() {
        if (this._size > 0) {
            this._size -= 1
        }
    }

    _incrementSize() {
        this._size += 1
    }

    /**
     * Inserts an element at the beginning of the list.
     * @param {*} element - The element to be inserted.
     */
    insertAtBeginning(element: T) {
        const node = new Node(element)
        node.next = this._head
        this._head = node
        if (node.next === null) {
            this._tail = node
        }
        this._incrementSize()
    }

    /**
     * Inserts an element at the end of the list.
     * @param {*} element - The element to be inserted.
     */
    insertAtEnd(element: T) {
        const node = new Node(element)

        if (this._head === null) {
            this._incrementSize()
            this._head = this._tail = node
            return
        }

        const last = this._tail
        if (last) {
            last.next = node
        }
        node.prev = last
        this._tail = node
        this._incrementSize()
    }

    /**
     * Inserts an element after a specified element.
     * @param {*} prevElement - The element after which the new element should be inserted.
     * @param {*} element - The element to be inserted.
     */
    insertAfter(prevElement: T, element: T) {
        const node = new Node(element)
        if (this._head === null) {
            return
        }

        const last = this._tail

        if (last && last.element === prevElement) {
            last.next = node
            node.prev = last
            this._tail = node

            this._incrementSize()
            return
        }

        let current = this._head

        while (
            current &&
            current.next !== null &&
            current.element !== prevElement
        ) {
            current = current.next
        }

        node.prev = current
        node.next = current.next
        if (current.next) {
            current.next.prev = node
        }
        current.next = node

        this._incrementSize()
    }

    /**
     * Inserts an element before a specified element.
     * @param {*} nextElement - The element before which the new element should be inserted.
     * @param {*} element - The element to be inserted.
     */
    insertBefore(nextElement: T, element: T) {
        const node = new Node(element)

        if (this._head === null) {
            return
        }

        // If the found next element is the last element
        const last = this._tail
        let current = this._head

        if (last?.prev?.next && last.element === nextElement) {
            node.prev = last.prev
            node.next = last
            last.prev.next = node
            last.prev = node
            this._incrementSize()
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
            this._head = node
        } else {
            node.prev = current.prev
            node.next = current
            current.prev.next = node
            current.prev = node
        }

        this._incrementSize()
    }

    /**
     * Inserts an element at a specified index in the list.
     * @param {*} element - The element to be inserted.
     * @param {number} index - The index at which the element should be inserted.
     */
    insertAt(element: T, index: number) {
        if (index < 0) {
            throw new Error('Index must be a non-negative integer')
        }

        const node = new Node(element)

        if (index === 0) {
            // Insert at the beginning
            node.next = this._head
            this._head = node

            if (!this._tail) {
                // If the list was empty, update the tail
                this._tail = node
            }
        } else {
            let current = this._head
            let count = 0

            while (current && count < index - 1) {
                current = current.next
                count++
            }

            if (!current) {
                throw new Error('Index out of bounds')
            }

            node.next = current.next
            current.next = node

            if (!node.next) {
                // If inserted at the end, update the tail
                this._tail = node
            }
        }
        this._incrementSize()
    }

    /**
     * Deletes an element at a specified index in the list.
     * @param {number} index - The index at which the element should be deleted.
     */
    deleteAt(index: number) {
        if (index < 0) {
            throw new Error('Index must be a non-negative integer')
        }

        if (index === 0) {
            // Delete at the beginning
            if (this._head) {
                this._head = this._head.next

                if (!this._head) {
                    // If the list becomes empty, update the tail
                    this._tail = null
                }
            }
        } else {
            let current = this._head
            let count = 0

            while (current && count < index - 1) {
                current = current.next
                count++
            }

            if (!current || !current.next) {
                throw new Error('Index out of bounds')
            }

            current.next = current.next.next

            if (!current.next) {
                // If deleted at the end, update the tail
                this._tail = current
            }
        }
        this._decrementSize()
    }

    /**
     * Displays the elements of the list.
     * @returns {Array} - An array containing the elements of the list.
     */
    display(): Array<T | null> {
        let current = this._head
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
    delete(element: T) {
        let current = this._head

        // if the list is empty do nth
        if (current === null) {
            return
        }

        // if there is only one element in the list
        const last = this._tail
        if (current === last) {
            this.clear()
            return
        }

        // if the requested element is the last one
        if (last && last.element === element) {
            if (last.prev) {
                last.prev.next = null
            }
            this._tail = last.prev
            last.prev = last.next = last.element = null
            this._decrementSize()
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
        if (current?.element) {
            current.element = current.prev = current.next = null
        }
        this._decrementSize()
    }

    /**
     * Deletes the last element from the list.
     */
    deleteLast() {
        const current = this._head
        const last = this._tail

        // if the list is empty do nth
        if (current === null || last === null) {
            return
        }

        // if the list has only one item
        if (current === last) {
            this.clear()
        } else {
            this._tail = last.prev
            if (last.prev) {
                last.prev.next = null
            }
            last.element = last.prev = last.next = null
        }
        this._decrementSize()
    }

    /**
     * Deletes the first element from the list.
     */
    deleteFirst() {
        // if the list is empty do nth
        if (this._head === null) {
            return
        }
        const current = this._head
        if (current.next === null) {
            this._head = null
        } else {
            this._head = current.next
            current.element = current.prev = current.next = null
        }
        this._decrementSize()
    }

    /**
     * Clears all elements from the list.
     */
    clear() {
        this._head = null
        this._tail = null
        this._size = 0
    }

    /**
     * Gets the first element of the list.
     * @returns {*} - The first element of the list.
     */
    getFirst() {
        // if the list is empty do nth
        if (this._head === null) {
            return
        }
        return this._head.element
    }

    /**
     * Gets the last element of the list.
     * @returns {*} - The last element of the list.
     */
    getLast() {
        const last = this._tail
        if (this._head === null || last === null) {
            return
        }

        return last.element
    }

    /**
     * Gets an element from the list.
     * @param {*} element - The element to retrieve.
     * @returns {*} - The specified element.
     */
    get(element: T) {
        const last = this._tail
        let current = this._head

        if (current === null || last === null) {
            return
        }

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
     * Gets an element at a specified index in the list.
     * @param {number} index - The index at which the element should be retrieved.
     * @returns {*} - The specified element.
     */
    getAt(index: number) {
        if (index < 0) {
            throw new Error('Index must be a non-negative integer')
        }

        if (index === 0) {
            if (this._head) {
                return this._head.element
            }
        } else {
            let current = this._head
            let count = 0

            while (current && count < index) {
                current = current.next
                count++
            }

            if (!current) {
                return null
            }

            return current.element
        }
    }

    /**
     * Updates an element in the list.
     * @param {*} currElement - The element to be updated.
     * @param {*} newElement - The new value for the element.
     */
    update(currElement: T, newElement: T) {
        if (!newElement) {
            throw new Error('A new element value must be provided')
        }

        let current = this._head
        const last = this._tail

        if (current === null || last === null) {
            return
        }

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

    /**
     * Gets total size of the list.
     * @returns {Number} - The number of nodes in the list.
     */
    get size() {
        return this._size
    }
}
