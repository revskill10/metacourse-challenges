// CountBy

function countBy (items, groupName){
    for (let element of items){
        if (groupName(element)){

        }
    } 
}

// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
  }

  console.log(reduce(arrays, (a, b) => [...a, ...b],[]));

 //Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. 
 //Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. 
 //Finally, it calls the update function to create a new value and starts from the beginning. When defining the function, you can use a regular loop to do the actual looping.

 function loop(value, test, update, body) {
    if (test(value)){
        body(value);    
    return loop (update(value), test, update, body);
    }
} 
loop (6, n => n < 10, n => n +1, console.log);

//Every

function every( array, test){  
    for (let element of array){
        if (!test(element)){ 
            return false;
        } 
    } return true;
}
console.log(every([10,12,18,9], n => n <10));

