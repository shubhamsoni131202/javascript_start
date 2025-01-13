const marvelHeros = ["ironman","thor","hulk"]
const DCheros = ["batman","superman","flash"]
// console.log(marvelHeros)



marvelHeros.push(DCheros)
// console.log(marvelHeros);
// ->[ 'ironman', 'thor', 'hulk', [ 'batman', 'superman', 'flash' ] ]

marvelHeros.concat(DCheros);
// console.log(marvelHeros);
// ->[ 'ironman', 'thor', 'hulk', [ 'batman', 'superman', 'flash' ] ]
// console.log(marvelHeros[3][2]);
// ->flash

const allheros = marvelHeros.concat(DCheros)
// console.log(allheros);
// ->[ 'ironman', 'thor', 'hulk', 'batman', 'superman', 'flash' ]


// USING SPREAD ... ...
const newheros = [...marvelHeros,...DCheros]
// console.log(newheros);
// ->[ 'ironman', 'thor', 'hulk', 'batman', 'superman', 'flash' ]


// // flat(used in ***data scrapping usexase***)
const anotherarray = [1,2,3,[6,7],8,5,[7,4,[71]]]
const simplearray = anotherarray.flat(Infinity);
// console.log(simplearray);
// ->[
    // 1, 2, 3, 6,  7,
    // 8, 5, 7, 4, 71
//   ]

// console.log(Array.isArray("shubham"))
// ->false


// console.log(Array.from("shubham"));
// ->[
//   's', 'h', 'u',
//   'b', 'h', 'a',
//   'm'
// ]


let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3));
// ->[ 100, 200, 300 ]