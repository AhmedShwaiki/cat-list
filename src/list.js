import Node from './node'

export default class List {
  #head

  constructor() {
    this.#head = null
  }

  insertAtBeginning(element) {
    const node = new Node(element)
    node.next = this.#head
    this.#head = node
  }

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

  display() {
    let current = this.#head
    const result = []
    while (current !== null) {
      result.push(current.element)
      current = current.next
    }
    return result
  }

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

  clear() {
    this.#head = null
  }

  getFirst() {
    // if the list is empty do nth
    if (this.#head === null) {
      return
    }
    return this.#head.element
  }

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
