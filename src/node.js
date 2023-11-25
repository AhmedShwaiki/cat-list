/**
 * Represents a node in a linked list.
 */
export default class Node {
  #prev
  #next
  #element

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
    this.#element = element

    /**
     * Reference to the previous node in the linked list.
     * @type {Node}
     * @private
     */
    this.#prev = null

    /**
     * Reference to the next node in the linked list.
     * @type {Node}
     * @private
     */
    this.#next = null
  }

  /**
   * Set the previous node in the linked list.
   * @param {Node} prevNode - The previous node.
   */
  set prev(prevNode) {
    this.#prev = prevNode
  }

  /**
   * Get the previous node in the linked list.
   * @returns {Node} The previous node.
   */
  get prev() {
    return this.#prev
  }

  /**
   * Set the next node in the linked list.
   * @param {Node} nextNode - The next node.
   */
  set next(nextNode) {
    this.#next = nextNode
  }

  /**
   * Get the next node in the linked list.
   * @returns {Node} The next node.
   */
  get next() {
    return this.#next
  }

  /**
   * Get the data stored in the node.
   * @returns {*} The data stored in the node.
   */
  get element() {
    return this.#element
  }

  /**
   * Set the data stored in the node.
   * @param {*} element - The data to be stored in the node.
   */
  set element(element) {
    this.#element = element || null
  }
}
