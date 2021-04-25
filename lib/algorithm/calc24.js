/**
 * 算24点
 * @file calc24.js
 * @author 赵鑫<7176466@qq.com>
 */
if (!String.prototype.format) {
    String.prototype.format = function () {
        let string = this
        for (let i = 0; i < arguments.length; i++) {
            string = string.replace(new RegExp('\\{' + i + '\\}', 'g'), arguments[i])
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
        '{0} + {1} + {2} + {3}', // 01 N+N+N+N
        '{0} + {1} + {2} - {3}', // 02 N+N+N-N
        '{0} + {1} + {2} * {3}', // 03 N+N+N*N
        '{0} + ({1} + {2}) * {3}', // 04 N+(N+N)*N
        '({0} + {1} + {2}) * {3}', // 05 (N+N+N)*N
        '{0} + {1} + {2} / {3}', // 06 N+N+N/N
        '{0} + ({1} + {2}) / {3}', // 07 N+(N+N)/N
        '({0} + {1} + {2}) / {3}', // 08 (N+N+N)/N
        '{0} + ({1} - {2}) * {3}', // 09 N+(N-N)*N
        '({0} + {1} - {2}) * {3}', // 10 (N+N-N)*N
    ]
    const results = []

    for (const [a, b, c, d] of cards) {
        for (let expression of expressions) {
            expression = expression.format(a, b, c, d)
            const result = eval(expression)
            if (result === 24) console.log({ expression, result })
        }
    }
    return results
}

function permutator(inputArr) {
    var results = []

    function permute(arr, memo) {
        var cur,
            memo = memo || []

        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1)
            if (arr.length === 0) {
                results.push(memo.concat(cur))
            }
            permute(arr.slice(), memo.concat(cur))
            arr.splice(i, 0, cur[0])
        }

        return results
    }

    return permute(inputArr)
}

if (typeof module !== 'undefined' && typeof exports === 'object') module.exports = calc24
else window.calc24 = calc24
