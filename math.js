function sum(a, b) {
    return a + b;
}

function sumCb(a, b, fn) {
    fn(a + b)
}

module.exports = {
    sum,
    sumCb
}