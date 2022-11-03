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
    let k = '';
    let j = '';
    let m = '';
    for (let j = 1; j < n; j ++){
        for (let i = 1; i < n ; i++){
            k = j + 'x' + i + '=' + j * i ;       
            m = m + ' ' + k + '\t';
         } console.log(m);
         m = '';
        }
     
}

multiplication_table(8);

//  sum of all the multiples of 3 or 5 below 1000.
function  multiphe3or5 (n){
    let j = 0;
    for (let i = 0; i < n; i++){
        if (i % 3 === 0 || i % 5 === 0){ j = j + i;}
    }
    console.log(j);
}

multiphe3or5 (1000);
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
   
console.log(sum_even_fibo);

// Largest prime factor
function largestPrimeFactor(x) {
    let z = x;
    for (let i = 2; i <= x / 2; i++){
        if (x % i === 0){
            z = i;
            return largestPrimeFactor(x / i);
        }
    }
    return z;
}
console.log(largestPrimeFactor(6787));



function timeTable(n){
    let array =[];
    let row_array = [];
   
    let k = 0;
    for ( let i = 1; i <= n ; i++){
        for (let j = 1; j <= n; j++){
            k = i*j;
            row_array.push(k);
           
        }  array.push(row_array);
        row_array = [];
        
    } return array;
}


function print(array){
      
    for (let element of array){
        console.log(element.map(function (array, index){
            return " " + array.toString().padStart(3);
        }).join(" ").concat("\n"));
    }
   
    
}

print(timeTable(4));

// sort an array from  lowest to highest
let newArray =[];
function removeElementofArray(array, index) {
    return array.slice(0, index)    
      .concat(array.slice(index + 1));
}

function sortArray(array){
    let minValue = array[0];
    let minValue_index = 0;
    for (let i = 0; i < array.length ; i++){
       if (array[i] < minValue){
        minValue = array[i] ;
        minValue_index = i;
       }
    }      
    let updateArray = removeElementofArray(array, minValue_index);
    newArray.push(minValue);
    if (!updateArray.length ){
        return newArray;
    } 
    sortArray (updateArray) ; 
    return newArray;
}

//console.log(sortArray([10,5,8,2,4,6]));

// remove negative number from array and sort from lowest to highest
let currentArray =[];

function removeNegativeNumber(array){
    for (let i = 0; i < array.length ; i++){
        if (array[i] < 0){
           currentArray = removeElementofArray(array, i);
           if (!currentArray.length ){
               return currentArray;
            }
            removeNegativeNumber(currentArray);
        } 
        
     }  return currentArray;        
}
console.log(removeNegativeNumber(sortArray([5,-4,-3,8,1,2])));



 
