var unitTest = require('./testUtil');

function sumMultiples(x, y, z) {
    let sum = 0;
    for (let i = 0; i < z; i++)
    {
        if (i % x === 0 || i % y === 0) { sum += i;}
    }
    return sum;
}

function sumEvenFibonacci(x) {
    let sum = 1;
    let c = 0;
    let a = 1;
    let b = 2;
    let s = '1, 2, ';    
    do {
        if (c % 2 !== 0) {sum += c;}
        c = a + b;
        a = b;
        b = c;
        s += c + ', ';
    }
    while (c <= x);
    //console.log(s);
    return sum;    
}

function largestPrimeFactor(x) {
    let z = x;
    for (let i = 2; i <= x / 2; i++)
    {
        if (x % i === 0)
        {
            z = i;
            return largestPrimeFactor(x / i);
        }
    }
    return z;
}

function dayOfTheWeek(d, m, y) {
    let a = m;
    let b = y;

    if (a < 3)
    {
        a += 12;
        b -= 1;
    }
    let k = b % 100;
    let j = Math.floor(b / 100);
    let h = (d + Math.floor(13 * (a + 1) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) - 2 * j) % 7;
    if (h === 0) {
        return 'Saturday';
    } else if (h === 1) {
        return 'Sunday';
    } else if (h === 2) {
        return 'Monday';
    } else if (h === 3) {
        return 'Tuesday';
    } else if (h === 4) {
        return 'Wednesday';
    } else if (h === 5) {
        return 'Thursday';
    } else {
        return 'Sunday';
    }
}

console.log(sumMultiples(3, 5, 1000));
console.log(sumEvenFibonacci(4000000));
console.log(largestPrimeFactor(600851475143));
console.log(largestPrimeFactor(16));
console.log(dayOfTheWeek(13, 10, 2022));

unitTest.test('timUocNguyenToLonNhat', () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
})

unitTest.test('tinhTongSoFibonacciChan', () => {
    expect(sumEvenFibonacci(4000000)).toBe(4613731);
})
