/**
 * 双向链表
 * 作者：赵鑫 <7176466@qq.com>
 */
const LinkedList = function (list) {
    /**
     * 链表节点
     * @param {*} data
     */
    const Node = function (data) {
        this.data = data
        this.prev = null
        this.next = null
    }
    this.head = null
    this.tail = null
    this.size = 0
    this.isEmpty = () => this.size === 0

    /**
     * 在链表尾追加节点
     * @param {*} data
     * @returns {Node}
     */
    this.append = (data) => {
        const node = new Node(data)
        if (this.size === 0) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
        return node
    }
    // 以初始化数组中的数据追加节点
    if (list) Array.from(list).forEach((item) => this.append(item))

    /**
     * 获取指定位置上的节点, 位置越界时返回 null
     * @param {Number} index
     * @returns {Node}
     */
    this.getNode = (index) => {
        if (isNaN(index) || index < 0 || this.size <= index) return null
        let node = this.head
        for (let i = 0; i < index; i++) node = node.next
        return node
    }

    /**
     * 获取指定位置上节点的数据, 位置越界时返回 null
     * @param {Number} index
     * @returns {Node}
     */
    this.get = (index) => {
        const node = this.getNode(index)
        return node?.data || null
    }

    /**
     * 在链表指定位置添加节点，成功返回该节点，失败返回 null
     * @param {*} index
     * @param {*} data
     * @returns {Node}
     */
    this.insert = (index, data) => {
        // 插入位置越界
        if (index < 0 || this.size < index) return null
        // 当链表为空或在链表最后位置插入时，以调用append处理
        if (this.isEmpty() || index === this.size) return this.append(data)
        // 此时链表不为空，index指向某原有节点位置
        const node = new Node(data)
        if (index === 0) {
            node.next = this.head
            this.head.prev = node
            this.head = node
        } else {
            const current = this.getNode(index)
            node.prev = current.prev
            node.next = current
            current.prev.next = node
            current.prev = node
        }
        this.size++
        return node
    }

    /**
     * 获取指定节点的位置，未找到时返回 -1
     * @param {*} data
     * @returns {Number}
     */
    this.indexOf = (data) => {
        for (let node = this.head, i = 0; node && i < this.size; i++) {
            if (node.data == data) return i
            node = node.next
        }
        return -1
    }

    /**
     * 修改指定位置节点，成功返回 true，否则返回 false
     * @param {*} index
     * @param {*} data
     * @returns {Boolean}
     */
    this.update = (index, data) => {
        const node = this.getNode(index)
        if (!node) return false
        node.data = data
        return true
    }

    /**
     * 删除指定位置上的节点，成功返回 true，失败返回 false
     * @param {Number} index
     * @returns {Boolean}
     */
    this.removeAt = (index) => {
        if (index < 0 || this.size <= index) return false
        if (index === 0) {
            if (this.size === 1) {
                this.head = null
                this.tail = null
            } else {
                this.head.next.prev = null
                this.head = this.head.next
            }
        } else if (index === this.size - 1) {
            this.tail.prev.next = null
            this.tail = this.tail.prev
        } else {
            const node = this.getNode(index) // 该node指向待删除节点的前继节点
            node.prev.next = node.next
            node.next.prev = node.prev
        }
        this.size--
        return true
    }

    /**
     * 删除指定节点，成功返回 true，失败返回 false
     * @param {*} data
     * @returns {Boolean}
     */
    this.remove = (data) => this.removeAt(this.indexOf(data))

    this.toArray = (reverse = false) => {
        const list = []
        if (reverse) {
            let node = this.tail
            while (node) {
                list.push(node.data)
                node = node.prev
            }
        } else {
            let node = this.head
            while (node) {
                list.push(node.data)
                node = node.next
            }
        }
        return list
    }

    this.toString = (reverse = false) => this.toArray(reverse).toString()
}

module.exports = LinkedList
