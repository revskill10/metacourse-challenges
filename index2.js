function test(num) {
    return num * 2;
}
function isOdd(num) {
    return num % 2 !== 0 // true # false
}
function sum(a, b) { return a + b }
const arr = [3, 4, 5]
const arr2 = arr.filter(isOdd)
console.log(arr2)

// [a, b, c, d].reduce(+)
// reduce
// a + b + c + d

const tinhTongSoLe = arr => arr
    .filter(isOdd)
    .reduce(sum)

function expect (value) {
    return {
        toBe: (toBeValue) => {
            if (toBeValue === value) {
                console.log('Pass！')
            } else {
                throw new Error('Error！')
            }
        }
    }
}

// test
function test (msg, func) {
    try {
        func()
        console.log(`${msg} ket thuc kiem thu`)
    } catch (err) {
        console.error(`${msg} Tra lai ket qua loi`)
    }
}
test('tinhTongSoLe', () => {
    expect(tinhTongSoLe([1, 2, 4, 3])).toBe(4)
    expect(tinhTongSoLe([1, 2, 5])).toBe(6)
    expect(tinhTongSoLe([1, 2, 9, 3])).toBe(13)
})

