// 返回 [min, max) 区间内的随机数
function random(min, max) {
    return Math.random() * (max - min) + min
}

// 返回 [min, max] 区间内的随机整数
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

// 返回打乱的数组
function shuffle(list) {
    let temp
    const shuffled = [...list]
    const tailIndex = shuffled.length - 1
    for (let i = 0; i < shuffled.length - 1; i++) {
        const randomIndex = randomInt(i, tailIndex)
        temp = shuffled[i]
        shuffled[i] = shuffled[randomIndex]
        shuffled[randomIndex] = temp
    }
    return shuffled
}

module.exports = {
    random,
    randomInt,
    randomChoose,
    shuffle,
}
