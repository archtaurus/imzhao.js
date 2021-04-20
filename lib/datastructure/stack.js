const Stack = function (list) {
    this.items = [...(list || [])]
    this.values = () => this.items
    this.peek = () => (this.isEmpty() ? undefined : this.items[this.items.length - 1])
    this.push = (item) => this.items.push(item)
    this.pop = () => this.items.pop()
    this.size = () => this.items.length
    this.clear = () => (this.items = [])
    this.isEmpty = () => this.items.length < 1
    this.toString = () => this.values().toString()
    this.toArray = () => [...this.items]
}

module.exports = Stack
