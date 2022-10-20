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


//sum_array(range(1,15));

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

   let b = 0;
    let A = [1,2,4,5,6];
    let Rev_array = [];
    for (let i = 0 ; i <= A.length; i++){b = A[A.length -i];Rev_array.push(b); }
    console.log(Rev_array);


//reverArray(range(1,10));







