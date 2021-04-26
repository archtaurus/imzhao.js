/**
 * 算24点
 * @file calc24.js
 * @author 赵鑫<7176466@qq.com>
 */

if (!String.prototype.format) {
    String.prototype.format = function () {
        let string = this
        if (arguments.length === 1 && arguments[0] instanceof Object) {
            for (let k in arguments[0]) {
                string = string.replace(new RegExp('\\{' + k + '\\}', 'g'), arguments[0][k])
            }
        } else {
            for (let i = 0; i < arguments.length; i++) {
                string = string.replace(new RegExp('\\{' + i + '\\}', 'g'), arguments[i])
            }
        }
        return string
    }
}

/**
 * 穷举法求24点算式
 *
 * @see https://www.cnblogs.com/grenet/archive/2013/03/17/2964455.html
 * @param {Number} card1 第1张牌点数
 * @param {Number} card2 第2张牌点数
 * @param {Number} card3 第3张牌点数
 * @param {Number} card4 第4张牌点数
 * @returns {Set} 算式集合
 */
function calc24(card1, card2, card3, card4) {
    ;[card1, card2, card3, card4] = [card1, card2, card3, card4].map((n) => Number(n))
    const cards = new Set([
        [card1, card2, card3, card4],
        [card1, card2, card4, card3],
        [card1, card3, card2, card4],
        [card1, card3, card4, card2],
        [card1, card4, card2, card3],
        [card1, card4, card3, card2],
        [card2, card1, card3, card4],
        [card2, card1, card4, card3],
        [card2, card3, card1, card4],
        [card2, card3, card4, card1],
        [card2, card4, card1, card3],
        [card2, card4, card3, card1],
        [card3, card1, card2, card4],
        [card3, card1, card4, card2],
        [card3, card2, card1, card4],
        [card3, card2, card4, card1],
        [card3, card4, card1, card2],
        [card3, card4, card2, card1],
        [card4, card1, card2, card3],
        [card4, card1, card3, card2],
        [card4, card2, card1, card3],
        [card4, card2, card3, card1],
        [card4, card3, card1, card2],
        [card4, card3, card2, card1],
    ])

    const expressions = [
        '{a} + {b} + {c} + {d}', // 01 N+N+N+N
        '{a} + {b} + {c} - {d}', // 02 N+N+N-N
        '{a} + {b} + {c} * {d}', // 03 N+N+N*N
        '{a} + ({b} + {c}) * {d}', // 04 N+(N+N)*N
        '({a} + {b} + {c}) * {d}', // 05 (N+N+N)*N
        '{a} + {b} + {c} / {d}', // 06 N+N+N/N
        '{a} + ({b} + {c}) / {d}', // 07 N+(N+N)/N
        '({a} + {b} + {c}) / {d}', // 08 (N+N+N)/N
        '{a} + ({b} - {c}) * {d}', // 09 N+(N-N)*N
        '({a} + {b} - {c}) * {d}', // 10 (N+N-N)*N
        '({a} + {b}) * ({c} + {d})', // 11 (N+N)*(N+N)
        '{a} - {b} + {c} * {d}', // 12 N-N+N*N
        '({a} + {b}) * {c} - {d}', // 13 (N+N)*N-N
        '({a} + {b}) * ({c} - {d})', // 14 (N+N)*(N-N)
        '{a} + {b} * {c} * {d}', // 15 N+N*N*N
        '({a} + {b}) * {c} * {d}', // 16 (N+N)*N*N
        '({a} + {b} * {c}) * {d}', // 17 (N+N*N)*N
        '{a} + {b} * {c} / {d}', // 18 N+N*N/N
        '({a} + {b}) * {c} / {d}', // 19 (N+N)*N/N
        '({a} + {b} * {c}) / {d}', // 20 (N+N*N)/N
        '({a} + {b} / {c}) * {d}', // 21 (N+N/N)*N
        '({a} - {b} - {c}) * {d}', // 22 (N-N-N)*N
        '({a} - {b}) * {c} - {d}', // 23 (N-N)*N-N
        '({a} - {b}) * ({c} - {d})', // 24 (N-N)*(N-N)
        '({a} - {b}) * {c} * {d}', // 25 (N-N)*N*N
        '({a} - {b} * {c}) * {d}', // 26 (N-N*N)*N
        '({a} - {b}) * {c} / {d}', // 27 (N-N)*N/N
        '({a} - {b} / {c}) * {d}', // 28 (N-N/N)*N
        '{a} * {b} + {c} * {d}', // 29 N*N+N*N
        '{a} * {b} + {c} / {d}', // 30 N*N+N/N
        '{a} * {b} - {c} - {d}', // 31 N*N-N-N
        '{a} * {b} - {c} * {d}', // 32 N*N-N*N
        '({a} * {b} - {c}) * {d}', // 33 (N*N-N)*N
        '{a} * {b} - {c} / {d}', // 34 N*N-N/N
        '({a} * {b} - {c}) / {d}', // 35 (N*N-N)/N
        '{a} * {b} * {c} - {d}', // 36 N*N*N-N
        '{a} * {b} * {c} * {d}', // 37 N*N*N*N
        '{a} * {b} * {c} / {d}', // 38 N*N*N/N
        '{a} * {b} / ({c} + {d})', // 39 N*N/(N+N)
        '{a} * {b} / {c} - {d}', // 40 N*N/N-N
        '{a} * {b} / ({c} - {d})', // 41 N*N/(N-N)
        '{a} * ({b} / {c} - {d})', // 42 N*(N/N-N)
        '{a} * {b} / {c} / {d}', // 43 N*N/N/N
        '({a} / {b} - {c}) * {d}', // 44 (N/N-N)*N
        '{a} + {b} - {c} - {d}', // 45 N+N-N-N
        '{a} + {b} - {c} * {d}', // 46 N+N-N*N
        '{a} + {b} - {c} / {d}', // 47 N+N-N/N
        '{a} + ({b} - {c}) / {d}', // 48 N+(N-N)/N
        '({a} + {b} - {c}) / {d}', // 49 (N+N-N)/N
        '{a} + {b} / ({c} + {d})', // 50 N+N/(N+N)
        '({a} + {b}) / ({c} + {d})', // 51 (N+N)/(N+N)
        '{a} - {b} + {c} / {d}', // 52 N-N+N/N
        '({a} - {b}) / {c} - {d}', // 53 (N+N)/N-N
        '{a} + {b} / ({c} - {d})', // 54 N+N/(N-N)
        '({a} + {b}) / ({c} - {d})', // 55 (N+N)/(N-N)
        '{a} + {b} / {c} / {d}', // 56 N+N/N/N
        '({a} + {b}) / {c} / {d}', // 57 (N+N)/N/N
        '({a} + {b} / {c}) / {d}', // 58 (N+N/N)/N
        '{a} / {b} + {c} / {d}', // 59 N/N+N/N
    ]

    const results = new Set()
    for (const [a, b, c, d] of cards) {
        for (let expression of expressions) {
            expression = expression.format({ a, b, c, d })
            if (Math.abs(eval(expression) - 24) < 0.001) results.add(`${expression} = 24`)
        }
    }
    return Array.from(results)
}

if (typeof module !== 'undefined' && typeof exports === 'object') module.exports = calc24
else window.calc24 = calc24
