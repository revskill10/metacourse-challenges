// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
//   }


//   for(let i=0;i<=10;i++){
//     for(let j=0;j<=10;j++)
//     {
//         i*j;
//     }
//   }
 function tong3so() {
    var c;
    for (let a = 0; a <= 10; a++) {
        for (let b = 0; b <= 10; b++) {
            if (a + b <= 10 && 0 <= a + b) {
                c = 10 - a - b;
                console.log(a, b, c);
            }
        }
    }
}

module.exports={tong3so}