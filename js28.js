**********promise*********

let concert = true;
let attendConcert = new Promise(function(resolve,reject)){
    setTimeout(() => {
        if(concert){

            resolve("Bob attended the concert");
        }
        else{
            reject("bob didn't attend the concert")
        }

        
    }, 2000);
}

attendConcert.then((data) => console.log(data));
attendConcert.catch((data) => console.log(data));

***********template literals*********** 
``(back ticks)

adding multiline to a String
//normal string

let nstring = "hai\n this\n is\n krishna\n sampat\n";
console.log(nstring);

//template literal
let tstring = `hai this is krishna sampat`;
console.log(tstring);

********concatination*********

let name = "javascript";
let nstring = "hai" + name;
console.log(nstring); 

let estring = `hi $(name)`; ******38 & 40 gives same output but 40 is easier****
console.log(estring);

in normal ("" or '')we need \ to indicate end of string where backtics `` need not it 
eg:

"hi \"kumar\"" 
but
`hi "kumar" ` 46 replaced by 48

******destructuring properties of object or elements****

1)array destructuring

const lee = [1,2,3,4,5];
console.log(lee.2); or  console.log(lee[2]; //gives 3

const [one,two,three] = lee;
here 
        one; //gives 1
        two; //gives 2

function getScores() {
    return[50,90];

}
let (x,y,z) = getScores();
console.log(x,y);
// so we are assigning a name to each element and using it


2)Object destructuring

const obj = {
    name:"js";
    age:140;
    isGood:true;
}
//normal is
obj.name;
obj.age;
obj.isGood;

//object destructured
const {name,age,isGood} = obj;
name;
age;
isGood;



























































































