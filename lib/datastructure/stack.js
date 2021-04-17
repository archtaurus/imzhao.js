const Stack = function (list) {
    let items = [...(list || [])]
    this.items = () => items
    this.peek = () => items[items.length - 1]
    this.push = (item) => items.push(item)
    this.pop = () => items.pop()
    this.size = () => items.length
    this.clear = () => (items = [])
    this.isEmpty = () => items.length < 1
}

module.exports = Stack
