/**
 * 栈模块
 * @file stack.js
 * @author 赵鑫<7176466@qq.com>
 */

/**
 * 栈类
 */
class Stack {
    constructor(list) {
        this.items = Array.from(list || [])
        this.values = () => this.items
        this.peek = () => (this.items.length === 0 ? undefined : this.items[this.items.length - 1])
        this.push = (item) => this.items.push(item)
        this.extends = (list) => (this.items = [...this.items, ...list])
        this.pop = () => this.items.pop()
        this.size = () => this.items.length
        this.clear = () => (this.items = [])
        this.isEmpty = () => this.items.length < 1
        this.toString = () => this.items.toString()
        this.toArray = () => [...this.items]
    }
}

if (typeof module !== 'undefined' && typeof exports === 'object') module.exports = Stack
else window.Stack = Stack
