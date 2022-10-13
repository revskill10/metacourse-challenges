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

function test (msg, func) {
    try {
        func()
        console.log(`${msg} ket thuc kiem thu`)
    } catch (err) {
        console.error(`${msg} Tra lai ket qua loi`)
    }
}

module.exports = {expect, test};