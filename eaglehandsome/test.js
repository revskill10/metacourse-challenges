function test2(a) {
    const b = a % 2;
    if (b === 0) {
        console.log('So chan')
    } else {
        console.log('So le')
    }
}
const arr = [1,2,3]
let j = 0;
for(let i = 0; i < arr.length; i++) {  j = j + arr[i];
    console.log('Xu ly ', arr[i], j); 
    test2(arr[i])}