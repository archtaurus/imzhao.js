require('../../lib/datastructure/set')

describe('imzhao.datastructure.set', () => {
    const list = [1, 2, 3]
    const set = new Set(list)

    test('create', () => {
        expect(set.size).toEqual(list.length)
    })

    test('add', () => {
        set.add(list[0])
        expect(set.size).toEqual(list.length)
        set.add('hello')
        expect(set.size).toEqual(list.length + 1)
    })

    test('delete', () => {
        set.delete('hello')
        expect(set.size).toEqual(list.length)
    })

    test('has', () => {
        expect(set.has(list[0])).toBeTruthy()
        expect(set.has('hello')).toBeFalsy()
    })

    test('isSuperset', () => {
        expect(set.isSuperset(new Set([]))).toBeTruthy()
        expect(set.isSuperset(new Set([1, 2]))).toBeTruthy()
        expect(set.isSuperset(new Set([1, 2, 3]))).toBeTruthy()
        expect(set.isSuperset(new Set([1, 2, 3, 4]))).toBeFalsy()
    })

    test('isSubset', () => {
        expect(set.isSubset(new Set([]))).toBeFalsy()
        expect(set.isSubset(new Set([1, 2, 3]))).toBeTruthy()
        expect(set.isSubset(new Set([1, 2, 3, 4]))).toBeTruthy()
        expect(set.isSubset(new Set([2, 3, 4]))).toBeFalsy()
    })

    test('isProperSubset', () => {
        expect(set.isProperSubset(new Set([]))).toBeFalsy()
        expect(set.isProperSubset(new Set([1, 2]))).toBeFalsy()
        expect(set.isProperSubset(new Set([1, 2, 3]))).toBeFalsy()
        expect(set.isProperSubset(new Set([1, 2, 3, 4]))).toBeTruthy()
        expect(set.isProperSubset(new Set([2, 3, 4]))).toBeFalsy()
    })

    test('union', () => {
        expect(set.union(new Set([]))).toEqual(set)
        expect(set.union(new Set([1, 2, 3]))).toEqual(set)
        expect(set.union(new Set([4, 5, 6]))).toEqual(new Set([1, 2, 3, 4, 5, 6]))
    })

    test('subtraction', () => {
        expect(set.subtraction(new Set([]))).toEqual(set)
        expect(set.subtraction(new Set([4, 5, 6, 7, 8]))).toEqual(new Set([1, 2, 3]))
        expect(set.subtraction(new Set([1, 2, 3, 4, 5, 6]))).toEqual(new Set())
        expect(set).toEqual(new Set())
    })

    test('difference', () => {
        const a = new Set([1, 2, 3, 4, 5])
        const b = new Set([3, 4, 5, 6, 7])
        expect(a.difference(b)).toEqual(new Set([1, 2, 6, 7]))
    })
})
