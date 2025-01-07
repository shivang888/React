// Array and Object Intro
// Available methods

// spreading ...
const array = [12, 54, 66, 7, 1]; // non primitive (reference) //a6kvn
// const array2 = [...array];// 4hgdc
// const array2 = array;

// console.log(array2);
// console.log(array == array2);

let obj = { name: "batman" };

let obj2 = obj;

obj2.name = "superman";
obj2.age = 45

console.log(obj);

console.log(obj2); // superman, 45
console.log(obj == obj2); // false

// array methods

//map
//filter
//reduce

//map first step map create new array 
// in 2nd step updated the element in new array push 
// return new array


// array.map(())




function sum (a,cb){// parameter 
  const result = cb(a);
console.log(result);
}

sum(4,sub)

function sub(value){// parameter

  return value-2
}


const storeData = array.map((element)=>{
  return element+"map";
})
console.log(storeData);

const value = array.filter((element)=>{
  return element %2!=0
})

console.log(value);



const reduceData = array.reduce((element,acc)=>{// accumulator 
acc += element

return acc

},10)

console.log(reduceData);

let objectData = {
  name:"prabh",
  age:25,
  address:{
    city:"delhi",
    state:"delhi"
  }
}

const objSStore = Object.values(objectData)
const keyData = Object.keys(objectData)
console.log(keyData)
keyData.forEach((element)=>{
  console.log(element)
})

console.log(objSStore);






// map and key
// filter and reduce


const array3 = [1,2,3]

const array4 = [4,5,6]

//merging

const longArray = [...array3, ...array4]

console.log(longArray)

// destructuring
let array7 = ["batman","gotam","money",56]

const[names,city,power,empty] = array7

console.log(names)

console.log(city)

console.log(power)

console.log(empty)

let object6 = {
  heroName:"superman",
  age:30,
  city:"new york",
  power:"flight",
}

const {heroName}= object6

console.log(heroName)



