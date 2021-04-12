function map(f, list) {
    if (list.length === 0) {
        return list
    } else {
        const [x, ...xs] = list
        return [f(x), ...map(f, xs)]
    }
}

console.log(map(x => x * 10, [1, 2, 3]))