function printEvenNumber(x) {
    for (let i = 0; i <= x; i++)
    {
        if (i % 2 === 0) { console.log(i);}
    }
}

function printMultiTable(x) {
    for (let i = 1; i <= 10; i++)
    {
        let Row = '';
        for (let j = 1; j <= x; j++)
        {
            let k = i * j;
            Row = Row + j.toString().padStart(2) + ' x ' + i.toString().padStart(2) + ' = ' + k.toString().padStart(2) + '|';
        }
        console.log(Row);
    }
}

function kmToMileConverter(x) {
    return x * 0.621371192;
}

printEvenNumber(10);
printMultiTable(9);
console.log(kmToMileConverter(100));