/**
 * A*
 * @file astar.js
 * @author 赵鑫<7176466@qq.com>
 */

class Node {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.visited = false
        this.neighbors = []
    }
}

class Maze {
    constructor(w, h) {
        this.nodes = []
    }
}

/**
 * A* path finder function
 * @param {*} start
 * @param {*} end
 * @returns {Array} path between start and end
 */
function astar(start, end) {
    const path = [start]
    return path
}
