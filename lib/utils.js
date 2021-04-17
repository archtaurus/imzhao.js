//  NOT imported and tested

const bmi = (height, weight) => weight / height ** 2 // 体重指数
const numberToArray = (number) => Array.from(String(number), (n) => Number(n))
const baseConvert = (number, base, padding = 0) => (number >>> 0).toString(base).padStart(padding, 0)

module.exports = {
    bmi,
    numberToArray,
    baseConvert,
}
