const { QuadTree } = require('../../lib/datastructure')
const p1 = { x: 25, y: 25 }
const p2 = { x: 75, y: 25 }
const p3 = { x: 75, y: 75 }
const p4 = { x: 25, y: 75 }
const p5 = { x: 50, y: 50 }

describe('imzhao.datastructure.QuadTree', () => {
    test('create an empty tree', () => {
        const tree = new QuadTree(10, 20, 100, 200, 4)
        expect(tree.x).toEqual(10)
        expect(tree.y).toEqual(20)
        expect(tree.w).toEqual(100)
        expect(tree.h).toEqual(200)
        expect(tree.capacity).toEqual(4)
        expect(tree.elements).toEqual([])
        expect(tree.subTrees).toEqual([])
    })

    test('create tree with elements', () => {
        const tree = new QuadTree(0, 0, 100, 100, 4, [p1, p2, p3, p4])
        expect(tree.elements.length).toEqual(4)
        expect(tree.subTrees).toEqual([])
    })

    test('contains', () => {
        const tree = new QuadTree(0, 0, 100, 100, 4)
        expect(tree.contains(p1)).toBeTruthy()
        expect(tree.contains(p2)).toBeTruthy()
        expect(tree.contains(p3)).toBeTruthy()
        expect(tree.contains(p4)).toBeTruthy()
        expect(tree.contains({ x: 0, y: 0 })).toBeTruthy()
        expect(tree.contains({ x: 99, y: 99 })).toBeTruthy()
        expect(tree.contains({ x: 99, y: 0 })).toBeTruthy()
        expect(tree.contains({ x: 0, y: 99 })).toBeTruthy()
        expect(tree.contains({ x: -1, y: 0 })).toBeFalsy()
        expect(tree.contains({ x: 100, y: 0 })).toBeFalsy()
        expect(tree.contains({ x: 0, y: 100 })).toBeFalsy()
        expect(tree.contains({ x: 0, y: -1 })).toBeFalsy()
    })

    test('insert points outside the tree', () => {
        const tree = new QuadTree(0, 0, 100, 100, 4)
        expect(tree.insert({ x: -1, y: 0 })).toBeFalsy()
        expect(tree.insert({ x: 100, y: 0 })).toBeFalsy()
        expect(tree.insert({ x: 0, y: 100 })).toBeFalsy()
        expect(tree.insert({ x: 0, y: -1 })).toBeFalsy()
        expect(tree.elements.length).toEqual(0)
        expect(tree.subTrees).toEqual([])
    })

    test('insert points', () => {
        const tree = new QuadTree(0, 0, 100, 100, 4)
        expect(tree.insert(p1)).toBeTruthy()
        expect(tree.elements.length).toEqual(1)
        expect(tree.subTrees).toEqual([])
        expect(tree.insert(p2)).toBeTruthy()
        expect(tree.elements.length).toEqual(2)
        expect(tree.subTrees).toEqual([])
        expect(tree.insert(p3)).toBeTruthy()
        expect(tree.elements.length).toEqual(3)
        expect(tree.subTrees).toEqual([])
        expect(tree.insert(p4)).toBeTruthy()
        expect(tree.elements.length).toEqual(4)
        expect(tree.subTrees).toEqual([])
        expect(tree.insert(p5)).toBeTruthy()
        expect(tree.elements.length).toEqual(0)
        expect(tree.subTrees.length).toEqual(4)
        expect(tree.subTrees[0].elements.length).toEqual(1)
        expect(tree.subTrees[1].elements.length).toEqual(1)
        expect(tree.subTrees[2].elements.length).toEqual(2)
        expect(tree.subTrees[3].elements.length).toEqual(1)
    })

    test('insert many points', () => {
        const tree = new QuadTree(0, 0, 100, 100, 4)
        expect(tree.insertMany([p1, p2, p3, p4, p5])).toBeTruthy()
        expect(tree.elements.length).toEqual(0)
        expect(tree.subTrees.length).toEqual(4)
        expect(tree.subTrees[0].elements.length).toEqual(1)
        expect(tree.subTrees[1].elements.length).toEqual(1)
        expect(tree.subTrees[2].elements.length).toEqual(2)
        expect(tree.subTrees[3].elements.length).toEqual(1)
    })

    test('query', () => {
        const tree = new QuadTree(0, 0, 100, 100, 4, [p1, p2, p3, p4, p5])
        expect(tree.elements.length).toEqual(0)
        expect(tree.query(0, 0, 50, 50)).toEqual([p1])
        expect(tree.query(50, 0, 50, 50)).toEqual([p2])
        expect(tree.query(50, 50, 50, 50)).toEqual([p3, p5])
        expect(tree.query(0, 50, 50, 50)).toEqual([p4])
        expect(tree.query(25, 25, 50, 10)).toEqual([p1, p2])
        expect(tree.query(25, 75, 50, 10)).toEqual([p3, p5, p4])
        expect(tree.query(25, 25, 10, 50)).toEqual([p1, p4])
        expect(tree.query(75, 25, 10, 50)).toEqual([p2, p3, p5])
        expect(tree.query(25, 25, 50, 50)).toEqual([p1, p2, p3, p5, p4])
    })
})
