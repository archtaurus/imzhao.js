// 体重指数
module.exports.bmi = (height, weight) => weight / height ** 2

function numberToArray(number) {
    return Array.from(String(number), (n) => Number(n))
}

function baseConvert(number, base, padding = 0) {
    return (number >>> 0).toString(base).padStart(padding, 0)
}
