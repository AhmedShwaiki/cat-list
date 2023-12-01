import List from '../src/list'

describe('List', () => {
    test('insertAtBeginning', () => {
        const list = new List()
        list.insertAtBeginning(3)
        list.insertAtBeginning(2)
        list.insertAtBeginning(1)
        expect(list.display()).toEqual([1, 2, 3])
        expect(list.size).toEqual(3)
    })

    test('insertAtEnd', () => {
        const list = new List()
        list.insertAtEnd(1)
        list.insertAtEnd(2)
        list.insertAtEnd(3)
        expect(list.display()).toEqual([1, 2, 3])
        expect(list.size).toEqual(3)
    })

    describe('insertAfter method', () => {
        test('insertAfter', () => {
            const list = new List()

            list.insertAtEnd(1)
            list.insertAtEnd(3)
            list.insertAfter(1, 2)
            expect(list.display()).toEqual([1, 2, 3])

            list.clear()
            list.insertAtEnd(1)
            list.insertAtEnd(2)
            list.insertAfter(2, 3)
            expect(list.display()).toEqual([1, 2, 3])

            list.clear()
            list.insertAtEnd(1)
            list.insertAtEnd(2)
            list.insertAtEnd(4)
            list.insertAfter(2, 3)
            expect(list.display()).toEqual([1, 2, 3, 4])
        })

        test('insertAfter on empty list', () => {
            const list = new List()
            list.insertAfter(1, 2)
            expect(list.display()).toEqual([])
            expect(list.size).toEqual(0)
        })

        test('insertAfter to throw error', () => {
            const list = new List()
            list.insertAtEnd(1)
            list.insertAtEnd(3)
            expect(() => list.insertAfter()).toThrow(
                'A previous element must be provided',
            )
        })
    })

    describe('insertBefore method', () => {
        test('insertBefore', () => {
            const list = new List()
            list.insertAtEnd(1)
            list.insertAtEnd(2)
            list.insertBefore(2, 3)
            expect(list.display()).toEqual([1, 3, 2])

            list.clear()
            list.insertAtEnd(2)
            list.insertBefore(2, 1)
            expect(list.display()).toEqual([1, 2])

            list.clear()
            list.insertAtEnd(1)
            list.insertAtEnd(2)
            list.insertAtEnd(4)
            list.insertBefore(2, 3)
            expect(list.display()).toEqual([1, 3, 2, 4])
        })

        test('insertAfter on empty list', () => {
            const list = new List()
            list.insertBefore(1, 2)
            expect(list.display()).toEqual([])
        })

        test('insertBefore to throw error', () => {
            const list = new List()
            list.insertAtEnd(1)
            list.insertAtEnd(2)
            expect(() => list.insertBefore()).toThrow(
                'A next element must be provided',
            )
        })
    })
    test('delete', () => {
        const list = new List()
        list.insertAtEnd(1)
        list.insertAtEnd(2)
        list.insertAtEnd(3)
        list.delete(2)
        expect(list.display()).toEqual([1, 3])

        list.clear()
        list.insertAtEnd(1)
        list.insertAtEnd(2)
        list.insertAtEnd(3)
        list.delete(3)

        expect(list.display()).toEqual([1, 2])
    })

    test('delete empty list', () => {
        const list = new List()
        list.delete(2)
        expect(list.display()).toEqual([])
    })

    test('delete when list has only one element', () => {
        const list = new List()
        list.insertAtEnd(2)
        list.delete(2)
        expect(list.display()).toEqual([])
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

    test('update', () => {
        const list = new List()
        list.insertAtEnd(1)
        list.insertAtEnd(2)
        list.insertAtEnd(3)

        list.update(1, 1.5)
        list.update(2, 2.5)
        list.update(3, 3.5)

        expect(list.display()).toEqual([1.5, 2.5, 3.5])
    })

    test('update to throw error', () => {
        const list = new List()
        list.update(2, 2.5)

        expect(list.update).toThrow()
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

    describe('getFirst method', () => {
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
    })

    describe('getLast method', () => {
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
    })
    describe('get method', () => {
        test('get', () => {
            const list = new List()
            list.insertAtEnd(1)
            list.insertAtEnd(2)
            list.insertAtEnd(3)
            expect(list.get(1)).toBe(1)
            expect(list.get(2)).toBe(2)
            expect(list.get(3)).toBe(3)
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
    })

    describe('insertAt Method', () => {
        test('should insert at the beginning for an empty list', () => {
            const list = new List()
            list.insertAt('A', 0)
            expect(list.display()).toEqual(['A'])
        })

        test('should insert at the beginning for a non-empty list', () => {
            const list = new List()
            list.insertAt('B', 0)
            list.insertAt('A', 0)
            expect(list.display()).toEqual(['A', 'B'])
        })

        test('should insert at the middle of the list', () => {
            const list = new List()
            list.insertAtEnd('A')
            list.insertAtEnd('B')
            list.insertAtEnd('D')
            list.insertAt('C', 2)

            expect(list.display()).toEqual(['A', 'B', 'C', 'D'])
            expect(list.size).toEqual(4)
        })

        test('should insert at the end and update tail', () => {
            const list = new List()
            list.insertAt('A', 0)
            list.insertAt('B', 1)
            expect(list.display()).toEqual(['A', 'B'])
            expect(list.getLast()).toBe('B')
        })

        test('should throw an error for a negative index', () => {
            const list = new List()
            expect(() => list.insertAt('A', -1)).toThrow(
                'Index must be a non-negative integer',
            )
        })

        test('should throw an error for an out-of-bounds index', () => {
            const list = new List()
            expect(() => list.insertAt('A', 2)).toThrow('Index out of bounds')
        })
    })

    describe('deleteAt Method', () => {
        test('should delete at the beginning', () => {
            const list = new List()
            list.insertAt('B', 0)
            list.insertAt('A', 0)
            list.deleteAt(0)
            expect(list.display()).toEqual(['B'])
        })

        test('should delete in the middle', () => {
            const list = new List()
            list.insertAtEnd('A')
            list.insertAtEnd('B')
            list.insertAtEnd('C')
            list.deleteAt(2)
            expect(list.display()).toEqual(['A', 'B'])
            expect(list.size).toEqual(2)
        })

        test('should delete at the beginning and update tail', () => {
            const list = new List()
            list.insertAt('A', 0)
            list.insertAt('B', 1)
            list.deleteAt(1)
            list.deleteAt(0)
            expect(list.display()).toEqual([])
            expect(list.size).toEqual(0)
        })

        test('should delete at the end and update tail', () => {
            const list = new List()
            list.insertAt('A', 0)
            list.insertAt('B', 1)
            list.deleteAt(1)
            expect(list.display()).toEqual(['A'])
            expect(list.getLast()).toBe('A')
        })

        test('should throw an error for a negative index', () => {
            const list = new List()
            expect(() => list.deleteAt(-1)).toThrow(
                'Index must be a non-negative integer',
            )
        })

        test('should throw an error for an out-of-bounds index', () => {
            const list = new List()
            expect(() => list.deleteAt(1)).toThrow('Index out of bounds')
        })
    })

    describe('getAt Method', () => {
        test('should get element at the beginning for a non-empty list', () => {
            const list = new List()
            list.insertAt('B', 0)
            list.insertAt('A', 0)
            const result = list.getAt(0)
            expect(result).toBe('A')
        })

        test('should get element in the middle of the list', () => {
            const list = new List()
            list.insertAt('C', 0)
            list.insertAt('B', 0)
            list.insertAt('A', 0)
            const result = list.getAt(1)
            expect(result).toBe('B')
        })

        test('should get element at the end of the list', () => {
            const list = new List()
            list.insertAt('A', 0)
            list.insertAt('B', 1)
            const result = list.getAt(1)
            expect(result).toBe('B')
        })

        test('should throw an error for a negative index', () => {
            const list = new List()
            expect(() => list.getAt(-1)).toThrow(
                'Index must be a non-negative integer',
            )
        })
    })
})
