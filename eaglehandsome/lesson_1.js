// Print all even numbers from 0 to n

function print_even_number (n){
    let j = ' ';
    for (let i = 0 ; i < n ; i++){
        if(i % 2 === 0) 
        j = j + ' ' + i;
    } console.log(j);
}
//print_even_number (100);

//Print a table containing multiplication tables

function multiplication_table(n){
    let k = 0;
    
   
    const array = [];
    for (let j = 1; j < n; j ++){
        for (let i = 1; i < 10 ; i++){
            k = j * i ;       
            array.push(k);
         } 
         
        }console.log(array);
        
       
        
        
}

multiplication_table(4);

//  sum of all the multiples of 3 or 5 below 1000.
function  multiphe3or5 (n){
    let j = 0;
    for (let i = 0; i < n; i++){
        if (i % 3 === 0 || i % 5 === 0){ j = j + i;}
    }
    console.log(j);
}

//multiphe3or5 (1000);
// kilometers to miles converter

function convert_km_mile (n){
    return n * 0.6214 ;
    
}
//console.log (convert_km_mile(1000));
// Sum of Even Fibonacci numbers less than values 4 mil
let n1 = 0;
let n2 = 1;
let n3 = 0;
let sum_even_fibo = 0;
for  (let i = 1; i < 4000000 ; i++) {    
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    if ( n3 % 2 === 0 && n3 < 4000000){ sum_even_fibo = sum_even_fibo + n3;}
   }
   
//console.log(sum_even_fibo);

// Largest prime factor

