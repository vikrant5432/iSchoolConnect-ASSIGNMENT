//concat of 2 array to create the 3rd
var A = [2, 3, 4, 5];
var B = [6, 7, 8, 9, 10];
var C = A.concat(B);
console.log("concat of A and B:-");
console.log(C);

//use of join() in array A
console.log("Type of array A before using join() function :-", typeof A);
var B = A.join();
console.log("type of array A after using join() function :-", typeof B);

//use of pop() to remove last value
console.log("array A before using pop()", A);
A.pop();
console.log("array A after using pop()", A);

//use of push() to add value to the array
console.log("array A before using push()", A);
A.push("adding");
console.log("array A after using push()", A);

//use unshift() to add value at first
console.log("array A before using unshift()", A);
A.unshift("start");
console.log("array A after using unshift()", A);

//using shift() to remove value from first
console.log("array A before using shift()", A);
A.shift();
console.log("array A after using shift()", A);

//using slice()
console.log(
  "array A after using slice with start=1 and end=3:- ",
  A.slice(1, 3)
);

//using splice();
A.splice(1, 0, "Insert");
console.log("array A after using splice for inserting:-", A);
A.splice(2, 1, "Replace");
console.log("array A after using splice for replace ", A);

//using reverse();
A.reverse();
console.log("Array A after reverse ", A);

//using sort();
A.sort();
console.log("Array A after sorting:- ", A);

//Using sort() and adding function in sort() for array;
A = [5, 4, 3, 2, 1];
A.sort((a, b) => a - b);

console.log("Array A after sorting by using function:- ", A);

