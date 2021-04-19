// 返回[a, b]区间内的随机整数
function randomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 返回数组中的随机项
function randomChoose(list) {
    if (!list) return null
    const index = randomInt(0, list.length - 1)
    return list[index]
}

module.exports = {
    randomInt,
    randomChoose,
}
