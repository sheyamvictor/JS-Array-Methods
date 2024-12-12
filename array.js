const fruits = ['apple', 'banana', 'mango', 'watermelon']
// forEach-method

fruits.forEach((fruit)=>{
    console.log(fruit)
})

// Map-method

fruits.map((fruit)=>{

    console.log("fruit:",fruit.toUpperCase());
    
})

// Array.at()

const characters = ['a','b','c']

console.log(characters.at(-2));

  // copywithin()

  console.log(fruits.copyWithin(2,0,-3).toString())

  //array.entries() array.values()

  const fruitsEntries = fruits.entries()

//  console.log( fruitsEntries.next().value , fruitsEntries.next().value)
//  console.log( fruitsEntries.next().done)

  const fruitsValues = fruits.values()

console.log( fruitsValues.next().value, fruitsValues.next().value,fruitsValues.next().value,fruitsValues.next().value)
console.log(fruitsValues.next().done)

  for(let fruits of fruitsEntries){
    console.log(fruits);
    
  }

  console.log(fruitsEntries)

  // Array.every()- return conditions

  const marks = [64,52,55,78,89]

  const result = marks.every((mark)=>{
    return mark > 50
  })

  console.log(result);
  
  //Array.fill()

  const array1 = [1,2,3,4,5]
  
  console.log(array1.fill(6,4,5))

  //Array.filter()

  const names = ['sheyam','deva','jesu','vj']

  const filterNames = names.filter((name)=> name.length > 3)

  console.log(filterNames);

  const users = [
    {
      id:1,
name:'vijay',
active:true
    },

    {
      id:2,

      name:"Aji",

      active:false
    },

  ]
  

  const activeUsers = users.filter((user)=>user.active)

  console.log(activeUsers[0]);
  
  //Array flat()

  const matrix = [

    [1,[2,3] , 5522],

    [4,5,[222,55,66],[6]],

    [7,8,9],
  ]

  const flatArray = matrix.flat(2)

  console.log(flatArray)


  // Array Includes()

  const num = [100,200,300,400,500]

  const resultIncludes = num.includes(100)

  console.log(resultIncludes);

  // Array indexOf() & Last indexOf

  // Array is Array()

  const pets = ['cat', 'dog', 'parrot', 'cow','cat']

  const animals = "ANIMALS"

  console.log(pets.indexOf('cat'))

  console.log(pets.lastIndexOf('cat'))

console.log(Array.isArray(pets))

console.log(Array.isArray(animals))

// Array .join()

const sentences = ["this", "is","a", "cat"]

const joinResult = sentences.join(" ")

console.log(joinResult);

// Array.key()


const petKeys = pets.keys()

for(let pet of petKeys) {
  console.log(pets[pet]);
  
}

//Array reduce()

const Amount = [452,112,585,669]

const totalAmount = Amount.reduce((acc,curt) => {

  console.log("reduce", acc + curt)

   return acc + curt
}, 0)

console.log(totalAmount);

const totalAmount2 = Amount.reduceRight((acc,curt) => {
  
  console.log("reduce Right", acc + curt)
  return acc + curt
}, 0)


console.log(totalAmount2);


//Array sort()

const numeric = [2,3,45,2,65,5]

//const numericResult = numeric.sort((a,b)=> a -b)

const numericResult2 = numeric.toSorted((a,b) => a-b)

//console.log(numericResult);

console.log(numericResult2);

  // Array toLocalString()

  const myDate = new Date('12 Dec 2024 8:20:10 UTC')

  const myLocalDate = myDate.toLocaleString('hi-IN',{timeZone: 'Asia/Dubai'})

  console.log(myLocalDate);
  
const amount1 =document.getElementById('current')

  const amount = 160000

  const resultCurrency = amount.toLocaleString( 'in' ,{
    style: 'currency',
    currency:'AUD',
    currencySign:"standard"
  })

console.log(resultCurrency)

amount1.innerText = resultCurrency 

//Array toString

const data = ['J','O','S','E','P','H', '007', 'true']

const resultData = data.toString().at(2)

console.log(resultData);

//Array with()

const alpha =['a','b','c','d','e']

console.log(alpha.with(1,"121"));


  

  