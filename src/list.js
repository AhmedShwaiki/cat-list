import Node from './node'

/**
 * Represents a linked list.
 */
export default class List {
  #head

  /**
   * Constructs an empty linked list.
   */
  constructor() {
    this.#head = null
  }

  /**
   * Inserts an element at the beginning of the list.
   * @param {*} element - The element to be inserted.
   */
  insertAtBeginning(element) {
    const node = new Node(element)
    node.next = this.#head
    this.#head = node
  }

  /**
   * Inserts an element at the end of the list.
   * @param {*} element - The element to be inserted.
   */
  insertAtEnd(element) {
    const node = new Node(element)

    if (this.#head === null) {
      this.#head = node
      return
    }

    let current = this.#head
    while (current && current.next !== null) {
      current = current.next
    }

    current.next = node
    node.prev = current
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
      this.#head = node
      return
    }

    // traverse & find the prev element value
    let current = this.#head
    while (
      current &&
      current.next !== null &&
      current.element !== prevElement
    ) {
      current = current.next
    }

    if (current && current.element === prevElement) {
      // if the found prev element is the last element
      if (current.next === null) {
        current.next = node
        node.prev = current
      } else {
        node.prev = current
        node.next = current.next
        current.next.prev = node
        current.next = node
      }
    } else {
      // do nothing
    }
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
      this.#head = node
      return
    }
    let current = this.#head
    // Traverse & find the next element value
    while (
      current &&
      current.next !== null &&
      current.element !== nextElement
    ) {
      current = current.next
    }
    if (current && current.element === nextElement) {
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
    } else {
      // do nth
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

    let current = this.#head
    while (current && current.element !== element) {
      current = current.next
    }

    if (current) {
      if (current.next) {
        current.next.prev = current.prev
      }
      if (current.prev) {
        current.prev.next = current.next
      }
      current.element = current.prev = current.next = null
    } else {
      // do nth
    }
  }

  /**
   * Deletes the last element from the list.
   */
  deleteLast() {
    // if the list is empty do nth
    if (this.#head === null) {
      return
    }

    let current = this.#head

    // if the list has only one item
    if (current.next === null) {
      this.#head = null
    } else {
      // traverse to last element
      while (current && current.next !== null) {
        current = current.next
      }

      if (current) {
        current.prev.next = null
        current.element = current.prev = current.next = null
      }
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
    // if the list is empty do nth
    if (this.#head === null) {
      return
    }
    let current = this.#head
    while (current && current.next !== null) {
      current = current.next
    }
    return current.element
  }

  /**
   * Gets an element from the list.
   * @param {*} element - The element to retrieve.
   * @returns {*} - The specified element.
   */
  get(element) {
    // if the list is empty do nth
    if (this.#head === null) {
      return
    }

    let current = this.#head
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
    // if the list is empty do nth
    if (this.#head === null) {
      return
    }

    let current = this.#head
    while (current && current.element !== currElement) {
      current = current.next
    }

    if (current) {
      current.element = newElement
    }
  }
}
