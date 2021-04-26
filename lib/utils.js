const { v4: uuidv4 } = require('uuid')
const bmi = (height, weight) => weight / height ** 2 // 体重指数
const numberToArray = (number) => Array.from(String(number), (n) => Number(n))
const baseConvert = (number, base, padding = 0) => (number >>> 0).toString(base).padStart(padding, 0)

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

module.exports = {
    bmi,
    numberToArray,
    baseConvert,
    permutator,
    uuidv4,
}
