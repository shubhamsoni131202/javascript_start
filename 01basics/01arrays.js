let myArray = [0,1,2,3,4,5]
// console.log(myArray);


let mr1 = new Array(0,1,2,3,4)
// console.log("A = " + mr1);

//in .slice method avoids elements of arrays from lower to upper-1 limit **but doesnt make any changes to original array.
let mr2 = myArray.slice(1,3)
// console.log(mr2);

//in .splice method avoids elements of arrays from lower to upper limit **also it makes permanent changes in original array it permanently excludes elements according to limit from original array.
let mr3 = myArray.splice(1,3)
// console.log("original array = " + myArray);
// console.log("B = " + mr3);

let myArray2 = new Array(6,7,8,9,10)
console.log(" original 2 = " + myArray2);
// let mr4 = myArray2.push(2)
// myArray2.push(5)
// myArray2.pop()
// console.log(myArray2.includes(9));

//in index method if the element isnt present in array it show -1 index for every unpresent element 
// console.log(myArray2.indexOf(2));

//unshift method adds input element in 0th index of array and sfift all index value of elements of array by +1 **not efficient for large number of elements
myArray2.unshift(0)
console.log(myArray2);

//shift method siimply remover the first element and changes the indexing of all elements by -1 in array 
myArray2.shift()
myArray2.shift()
console.log(myArray2);

//.join method convers type of string from anytype to string type **very useful method
const myArray3 = myArray2.join()
console.log("ar3 = " + myArray3);
console.log(typeof myArray3);



