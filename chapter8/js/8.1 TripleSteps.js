const triple_steps = (n) => {
    if (n == 0 || n == 1) return 1
    if (n < 0) return 0
    let res = new Array(n + 1).fill(-1)
    res[0] = 1
    res[1] = 1
    res[2] = 2
    for (let i = 3; i <= n; i++) {
        res[i] = res[i - 1] + res[i - 2] + res[i - 3]
    }
    return res[res.length - 1]
}


console.log(triple_steps(5))
console.log(triple_steps(1))
console.log(triple_steps(0))