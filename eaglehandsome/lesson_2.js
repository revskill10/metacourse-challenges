// Sum of range 2 argument
function range (start,end){
    let array = [start];
    let a = start;      
    for (let i = 1; i <= (end - start); i++){ a++;
        array.push(a);        
    }console.log(array);
    return array;
}

function sum_array(n) {

    let j = 0;

        for(let i = 0; i < n.length; i++) {  j = j + n[i];
       }console.log(j);
    return j;
}


sum_array(range(1,15));

// range with 3 argument

function range_3arg (start,end,step){
    let array = [start];
    let a = start;      

   if(step >= 0){ 
        for (let i = 1; i < (end - start); i+=step){ a = a + step; array.push(a); }
        console.log(array);}
   else { for (let i = 1; i < (start - end); i-=step){ a = a + step; array.push(a);}
        console.log(array);
    } 
    return array;
}

//range_3arg(1,12,2);
//range_3arg(12,3,-1);
function reverArray(A){

    let Rev_array = [];
    for (let i = 1 ; i <= A.length; i++){Rev_array.push( A[A.length -i]); }
    console.log(Rev_array);
}


reverArray(range_3arg(1,10,2));

// arrayTOlist

function arrayToList(array){
    let list = null;
    for (let i = array.length - 1; i >=0; i--) {
        list = {value: array[i], rest:list};
    } 
    return  list;
}
function listToArray(list){
    let array = [];
    for (; list !== null; list = list.rest){
        array.push(list.value);
    }
        
    
    return array;
   
}

console.log(arrayToList([10,20,30,40]));
console.log(listToArray(arrayToList([10,20,30,40])));