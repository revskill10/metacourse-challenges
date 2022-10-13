function printEvenNumber(x) {
    for (let i = 0; i <= x; i++)
    {
        if (i % 2 === 0) { console.log(i);}
    }
}

function printMultiTable(x) {
    for (let i = 1; i <= 10; i++)
    {
        let row = '';
        for (let j = 1; j <= x; j++)
        {
            let k = i * j;
            row = row + j.toString().padStart(2) + ' x ' + i.toString().padStart(2) + ' = ' + k.toString().padStart(2) + '|';
        }
        console.log(row);
    }
}

function kmToMileConverter(x) {
    return x * 0.621371192;
}

function sumInArray(A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++)
    {
        sum += A[i];
    }
    return sum;
}

function sumInArray2D(A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++)
    {
        for (let j = 0; j < A[i].length; j++)
        {
            sum += A[i][j];
        }
    }
    return sum;
}

printEvenNumber(10);
printMultiTable(9);
console.log(kmToMileConverter(100));
console.log(sumInArray([1, 5, -3, 6, 1]));
console.log(sumInArray2D([[1,2],[3,4],[-5,-6]]));