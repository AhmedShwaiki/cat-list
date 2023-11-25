import List from '../src/list'

describe('LinkedList', () => {
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
})
