/**
 * 栈模块
 * @file stack.js
 * @author 赵鑫<7176466@qq.com>
 */

/**
 * 栈类
 */
class Stack {
    constructor(items) {
        this.items = items || []
        this.values = () => this.items
        this.push = (item) => item && this.items.push(item)
        this.peek = () => (this.items.length === 0 ? undefined : this.items[this.items.length - 1])
        this.pop = () => this.items.pop()
        this.size = () => this.items.length
        this.clear = () => (this.items = [])
        this.isEmpty = () => this.items.length === 0
        this.extends = (items) => items && (this.items = [...this.items, ...items])
    }
}

if (typeof module !== 'undefined' && typeof exports === 'object') module.exports = Stack
else window.Stack = Stack
