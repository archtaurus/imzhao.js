/**
 * 算24点
 * @file calc24.js
 * @author 赵鑫<7176466@qq.com>
 */

if (!String.prototype.format) {
    String.prototype.format = function () {
        let string = this
        if (arguments.length > 1) {
            for (let i = 0; i < arguments.length; i++) {
                string = string.replace(new RegExp('\\{' + i + '\\}', 'g'), arguments[i])
            }
        } else {
            for (let k in arguments[0]) {
                string = string.replace(new RegExp('\\{' + k + '\\}', 'g'), arguments[0][k])
            }
        }
        return string
    }
}

/**
 * 穷举法求24点算式
 *
 * @param {Number} card1 第1张牌点数
 * @param {Number} card2 第2张牌点数
 * @param {Number} card3 第3张牌点数
 * @param {Number} card4 第4张牌点数
 * @returns {Array} 算式数组
 */
function calc24(card1, card2, card3, card4) {
    ;[card1, card2, card3, card4] = [card1, card2, card3, card4].map((n) => Number(n))
    const headCardsIncluded = [card1, card2, card3, card4].some((card) => card > 10)
    const cards = [
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
    ]

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
    ]

    const results = []
    for (const [a, b, c, d] of cards) {
        for (let expression of expressions) {
            expression = expression.format({ a, b, c, d })
            if (eval(expression) === 24) results.push(`${expression} = 24`)
        }
    }
    return results
}

function permutator(list) {
    var results = []
    function permute(list, memo) {
        memo = memo || []
        for (let i = 0; i < list.length; i++) {
            let cur = list.splice(i, 1)
            if (list.length === 0) results.push(memo.concat(cur))
            permute(list.slice(), memo.concat(cur))
            list.splice(i, 0, cur[0])
        }
        return results
    }
    return permute(list)
}

if (typeof module !== 'undefined' && typeof exports === 'object') module.exports = calc24
else {
    window.calc24 = calc24
    window.permutator = permutator
}
