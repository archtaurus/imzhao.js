// // 点
// class Point {
//     constructor(x = 0, y = 0) {
//         this.x = x
//         this.y = y
//     }

//     static distance(a, b) {
//         const dx = a.x - b.x
//         const dy = a.y - b.y
//         return Math.hypot(dx, dy)
//     }
// }

// // 圆
// class Circle {
//     constructor(r = 1, x = 0, y = 0) {
//         this.radius = r
//         this.center = new Point(x, y)
//     }

//     static perimeter(radius) {
//         return TAU * radius
//     }

//     get perimeter() {
//         return Circle.perimeter(this.radius)
//     }

//     static area(radius) {
//         return PI * radius ** 2
//     }

//     get area() {
//         return Circle.area(this.radius)
//     }
// }

module.exports = {
    ...require('./pi'), // 派相关
    abs: Math.abs,
    hypot: Math.hypot,
    ...require('./gcd'), // 最大公约数
    ...require('./lcm'), // 最小公倍数
    ...require('./random'), // 随机数
    // Point,
    // Circle,
}
