/**
 * A Star algorithm
 *
 * @file astar.js
 * @author 赵鑫<7176466@qq.com>
 */

const { PriorityQueue } = require('../datastructure/queue')

class Node {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.g = 0
        this.h = 0
        this.f = 0
        this.from = null
        this.visited = false
        this.neighbors = []
    }

    dist(node) {
        return Math.abs(this.x - node.x) + Math.abs(this.y - node.y)
    }
}

/**
 * A Star path finder
 *
 * @param {*} start
 * @param {*} end
 * @returns {Boolean}
 */
module.exports = function astar(start, end, heuristic) {
    openset = new PriorityQueue()
    let current = start
    current.g = 0
    current.h = heuristic(start, end)
    current.f = current.g + current.h
    openset.enqueue(current, current.f)
    while (!openset.isEmpty) {
        current = openset.dequeuemin()
        if (current === end) {
            return 'path found'
        }
        for (const neighbor of this.neighbors) {
            neighbor.g = current.g + current.dist(neighbor)
            neighbor.h = neighbor.dist(end)
            neighbor.f = neighbor.g + neighbor.h
        }
    }
    return 'cannot find path'
}
