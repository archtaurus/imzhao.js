describe('javascript native Array object operations', () => {
    const array = Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

    test('create array', () => {
        expect(array.length).toEqual(10)
    })

    test('push() will add an item to tail and return the new length', () => {
        const length = array.push(10)
        expect(array[10]).toEqual(10)
        expect(array.length).toEqual(length)
        expect(array.length).toEqual(11)
    })

    test('add/update item anywhere', () => {
        array[12] = 12 // array: [...10, <1 empty item>, 12]
        expect(array[11]).toBeUndefined()
        expect(array[12]).toEqual(12)
        expect(array.length).toEqual(13) // empty item counts too
    })

    test('pop() gets and removes the last item', () => {
        const item = array.pop()
        expect(item).toEqual(12)
        expect(array.length).toEqual(12) // empty item at tail will stay
        const tail = array.pop()
        expect(tail).toBeUndefined()
        expect(array.length).toEqual(11)
    })

    test('unshift() inserts item to head', () => {
        array.unshift('hello')
        expect(array.length).toEqual(12)
        expect(array[0]).toEqual('hello')
    })

    test('shift() gets and removes the first item', () => {
        expect([].shift()).toBeUndefined()
        const item = array.shift()
        expect(item).toEqual('hello')
        expect(array.length).toEqual(11)
    })

    test('splice(a,b) takes b items out from index a', () => {
        const list = [0, 1, 2, 3, 4, 5]
        const items = list.splice(2, 2)
        expect(items).toEqual([2, 3])
        expect(list).toEqual([0, 1, 4, 5])
    })

    test('splice(a, 0, b) insert b at index a', () => {
        const list = [0, 2]
        const items = list.splice(1, 0, 1)
        expect(items).toEqual([])
        expect(list).toEqual([0, 1, 2])
    })

    test('fill(a,b,c) fills with a from position b until position c', () => {
        const list = [0, 1, 2, 3, 4]
        const result = list.fill(0, 1, 4)
        expect(list).toEqual([0, 0, 0, 0, 4])
        expect(result).toEqual(list)
    })

    test('fill(a,b) fills with a from position b until end', () => {
        const list = [0, 1, 2, 3, 4]
        const result = list.fill(0, 2)
        expect(list).toEqual([0, 1, 0, 0, 0])
        expect(result).toEqual(list)
    })

    test('fill(a) change all items to a', () => {
        const list = [0, 1, 2, 3, 4]
        const result = list.fill(9)
        expect(list).toEqual([9, 9, 9, 9, 9])
        expect(result).toEqual(list)
    })

    test('find(func) get the first item makes func() is true', () => {
        const list = [0, 1, 2, 3, 4]
        expect(list.find((i) => i > 1)).toEqual(2)
        expect(list.find((i) => i > 5)).toBeUndefined()
    })

    test('findIndex(func) get the first item index makes func() is true', () => {
        const list = [0, 1, 9, 3, 4]
        expect(list.findIndex((i) => i > 1)).toEqual(2)
        expect(list.findIndex((i) => i > 10)).toEqual(-1)
    })

    test('lastIndexOf(a) get the last index for item a', () => {
        const list = [0, 9, 9, 9, 0]
        expect(list.lastIndexOf(9)).toEqual(3)
        expect(list.lastIndexOf(10)).toEqual(-1)
    })

    test('indexOf(a) get the first index for item a', () => {
        const list = [0, 9, 9, 9, 0]
        expect(list.indexOf(9)).toEqual(1)
        expect(list.indexOf(10)).toEqual(-1)
    })

    test('includes(a) check if list includes item a', () => {
        const list = [0, 0, 0, 0, 0]
        expect(list.includes(0)).toBeTruthy()
        expect(list.includes(1)).toBeFalsy()
    })

    test('reverse() reverses a list and return the reversed one', () => {
        const list = [0, 1, 2]
        expect(list.reverse()).toEqual([2, 1, 0])
        expect(list).toEqual([2, 1, 0])
    })

    test('slice(a?, b?) returns a slice copy from the array', () => {
        const list = [0, 1, 2, 3, 4]
        expect(list.slice()).toEqual(list)
        expect(list.slice() === list).toBeFalsy()
        expect(list.slice(2)).toEqual([2, 3, 4])
        expect(list.slice(2, 4)).toEqual([2, 3])
    })

    test('sort() will sort the array in place', () => {
        const list = [1, 2, 3, 4, 5, 6].reverse()
        expect(list.sort()).toEqual([1, 2, 3, 4, 5, 6])
        expect(list).toEqual([1, 2, 3, 4, 5, 6])
    })

    test('join(sep) returns all item as a string seperated by sep', () => {
        const list = [1, 2, 3, 4, 5, 6]
        expect(list.join('😆')).toEqual('1😆2😆3😆4😆5😆6')
        expect(list.join('')).toEqual('123456')
        expect(list.join()).toEqual('1,2,3,4,5,6') // default sperator is comma
    })

    test('map(func) makes a new array use func to every items', () => {
        const list = [1, 2, 3, 4, 5, 6]
        expect(list.map((i) => i ** 2)).toEqual([1, 4, 9, 16, 25, 36])
    })

    test('filter(func) makes a new array use func to check every items', () => {
        const list = [1, 2, 3, 4, 5, 6]
        expect(list.filter((i) => i % 2)).toEqual([1, 3, 5])
    })

    test('every(func) check if every item makes func true', () => {
        const list = [1, 2, 3, 4, 5, 6]
        expect(list.every((i) => i > 3)).toBeFalsy()
        expect(list.every((i) => i > 0)).toBeTruthy()
    })
    test('some(func) check if any item makes func true', () => {
        const list = [1, 2, 3, 4, 5, 6]
        expect(list.some((i) => i > 3)).toBeTruthy()
        expect(list.some((i) => i > 10)).toBeFalsy()
    })
})
