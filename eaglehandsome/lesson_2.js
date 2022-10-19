// Sum of range 2 argument
function range (start,end){
    let array = [start];
    let a = start;      
    for (let i = 1; i <= (end - start); i++){ a++;
        array.push(a);        
    }console.log(array);
    return array;
}

function sum(a, b) {
    const arr = range(a,b);
    let j = 0;
    if (arr !== NaN){
        for(let i = 0; i < arr.length; i++) {  j = j + arr[i];
       }console.log(j);
    } else {return n;} 
}

//sum();

// range with 3 argument

function range_3arg (start,end,step){
    let array = [start];
    let a = start;      
   if (step = 0){ range(start,end);}
   if(step >= 0){ 
        for (let i = 1; i < (end - start); i+=step){ a = a + step;
        array.push(a);        
        }console.log(array);}
   else { for (let i = 1; i < (start - end); i-=step){ a = a + step; array.push(a);}
       console.log(array);
    } 
    return array;
}

rev_Array(range_3arg(1,12,2));

// reverse array
function rev_Array(Arrayvalue){
   let Rev = [];
   let Array = Arrayvalue;
    for (let i = 1; i < Array.length; i++){ Rev.push[Array.length - i] ;}
    return Rev;
}






