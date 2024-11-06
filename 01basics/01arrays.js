let myArray = [0,1,2,3,4,5]
// console.log(myArray);


let mr1 = new Array(0,1,2,3,4)
console.log("A = " + mr1);

//in .slice method avoids elements of arrays from lower to upper-1 limit **but doesnt make any changes to original array.
let mr2 = myArray.slice(1,3)
console.log(mr2);

//in .splice method avoids elements of arrays from lower to upper limit **also it makes permanent changes in original array it permanently excludes elements according to limit from original array.
let mr3 = myArray.splice(1,3)
console.log("original array = " + myArray);
console.log("B = " + mr3);

 