import List from '../src/list'

describe('List', () => {
  test('insertAtBeginning', () => {
    const list = new List()
    list.insertAtBeginning(3)
    list.insertAtBeginning(2)
    list.insertAtBeginning(1)
    expect(list.display()).toEqual([1, 2, 3])
  })

  test('insertAtEnd', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    expect(list.display()).toEqual([1, 2, 3])
  })

  test('insertAfter', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(3)
    list.insertAfter(1, 2)
    expect(list.display()).toEqual([1, 2, 3])
  })

  test('insertBefore', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertBefore(2, 3)
    expect(list.display()).toEqual([1, 3, 2])
  })

  test('delete', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    list.delete(2)
    expect(list.display()).toEqual([1, 3])
  })

  test('deleteLast', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    list.deleteLast()
    expect(list.display()).toEqual([1, 2])
  })

  test('deleteFirst', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    list.deleteFirst()
    expect(list.display()).toEqual([2, 3])
  })

  test('deleteFirst when list has only one element', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.deleteFirst()
    expect(list.display()).toEqual([])
  })

  test('deleteLast when list has only one element', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.deleteLast()
    expect(list.display()).toEqual([])
  })

  test('delete on empty list', () => {
    const list = new List()
    list.delete(1)
    expect(list.display()).toEqual([])
  })

  test('deleteLast on empty list', () => {
    const list = new List()
    list.deleteLast()
    expect(list.display()).toEqual([])
  })

  test('deleteFirst on empty list', () => {
    const list = new List()
    list.deleteFirst()
    expect(list.display()).toEqual([])
  })

  test('clear will remove all items in the list', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    list.clear()
    expect(list.display()).toEqual([])
  })

  test('clear on empty list', () => {
    const list = new List()
    list.clear()
    expect(list.display()).toEqual([])
  })

  test('getFirst', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    expect(list.getFirst()).toBe(1)
  })

  test('getFirst on empty list', () => {
    const list = new List()
    expect(list.getFirst()).toBeUndefined()
  })

  test('getLast', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    expect(list.getLast()).toBe(3)
  })

  test('getLast on empty list', () => {
    const list = new List()
    expect(list.getLast()).toBeUndefined()
  })

  test('get', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    expect(list.get(2)).toBe(2)
  })

  test('get on empty list', () => {
    const list = new List()
    expect(list.get(1)).toBeUndefined()
  })

  test('get for non-existent element', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    expect(list.get(4)).toBeUndefined()
  })

  test('update', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)

    list.update(2, 2.5)

    expect(list.display()).toEqual([1, 2.5, 3])
  })

  test('update on empty list', () => {
    const list = new List()
    list.update(2, 2.5)

    expect(list.display()).toEqual([])
  })

  test('update non-existent element', () => {
    const list = new List()
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)

    list.update(5, 4)

    expect(list.display()).toEqual([1, 2, 3])
  })
})
