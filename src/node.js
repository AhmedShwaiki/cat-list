/**
 * Represents a node in a linked list.
 */
export default class Node {
    _prev
    _next
    _element

    /**
     * Create a new Node.
     * @param {*} element - The data to be stored in the node.
     */
    constructor(element = null) {
        /**
         * The data stored in the node.
         * @type {*}
         * @private
         */
        this._element = element

        /**
         * Reference to the previous node in the linked list.
         * @type {Node}
         * @private
         */
        this._prev = null

        /**
         * Reference to the next node in the linked list.
         * @type {Node}
         * @private
         */
        this._next = null
    }

    /**
     * Set the previous node in the linked list.
     * @param {Node} prevNode - The previous node.
     */
    set prev(prevNode) {
        this._prev = prevNode
    }

    /**
     * Get the previous node in the linked list.
     * @returns {Node} The previous node.
     */
    get prev() {
        return this._prev
    }

    /**
     * Set the next node in the linked list.
     * @param {Node} nextNode - The next node.
     */
    set next(nextNode) {
        this._next = nextNode
    }

    /**
     * Get the next node in the linked list.
     * @returns {Node} The next node.
     */
    get next() {
        return this._next
    }

    /**
     * Get the data stored in the node.
     * @returns {*} The data stored in the node.
     */
    get element() {
        return this._element
    }

    /**
     * Set the data stored in the node.
     * @param {*} element - The data to be stored in the node.
     */
    set element(element) {
        this._element = element || null
    }
}
