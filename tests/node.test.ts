import Node from '../src/node'

describe('Node class', () => {
    test('should create a new node with the provided element', () => {
        const node = new Node('testElement')
        expect(node.element).toBe('testElement')
    })

    test('should set and get the previous node', () => {
        const node1 = new Node('element1')
        const node2 = new Node('element2')

        node1.prev = node2

        expect(node1.prev).toBe(node2)
    })

    test('should set and get the next node', () => {
        const node1 = new Node('element1')
        const node2 = new Node('element2')

        node1.next = node2

        expect(node1.next).toBe(node2)
    })

    test('should set and get the element data', () => {
        const node = new Node('testElement')

        node.element = 'newElement'

        expect(node.element).toBe('newElement')
    })

    test('should init and set the default element data as null', () => {
        const node = new Node()

        expect(node.element).toBeNull()

        node.element = undefined

        node.element = expect(node.element).toBeNull()
    })
})
