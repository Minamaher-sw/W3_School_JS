// JavaScript Objects
/*
Object Properties
A real life car has properties like weight and color:

car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.

Car objects have the same properties, but the values differ from car to car.

Object Methods
A real life car has methods like start and stop:

car.start(), car.drive(), car.brake(), car.stop().

Car objects have the same methods, but the methods are performed at different times.
*/

//How to Define a JavaScript Object
//Using an Object Literal
console.log("objject") ;
const car1 =
{   name:"fiat", 
    modal:2023 , 
    color:"red" ,
    //ES6 effect
    // displayInfo1 () {
    //     return  `name of car ${this.name} and model of car is ${this.modal} and color of car is ${this.color}`
    // }
} ;
// acessing 
console.log(car1.name)
console.log(car1.modal)
console.log(car1.color)
// console.log(car1.displayInfo1())

// Using the new Keyword
const car2 =new Object() ;
car2.name ="oudi" ;
car2.modal =2030 ;
car2.color ="black" ;
car2.displayInfo2 = function()
{
     return  `name of car ${this.name} and model of car is ${this.modal} and color of car is ${this.color}`
}
console.log(car2)
console.log(car2["name"])
console.log(car2["modal"])
console.log(car2["color"])
console.log(car2.displayInfo2())

//Using an Object Constructor
var  carObj  = function (name , modal ,color)
{
    this.name = name ;
    this.modal =modal ;
    this.color =color ;
    this.displayInfo = function ()
    {
         return  `name of car ${this.name} and model of car is ${this.modal} and color of car is ${this.color}`
    }
}

var  car3 = new carObj("toyota", 2034 , "blue") ;
console.log(car3["name"])
console.log(car3["modal"])
console.log(car3["color"])
console.log(car3.displayInfo())

//Deleting Properties
//The delete keyword deletes a property from an object:
//addding new propeety
car3.invert ="mina maher"

console.log(car3)
//delete specific prop and value
delete(car3.invert)
console.log(car3)

/*
Nested Objects
Property values in an object can be other objects:
*/
var myObj ={
    name: "mina maher" ,
    age :22  ,
    myCars :
    {
        car1 : "ford" ,
        car2 : "BMW"  ,
        car3 : "fiat"
    }
}

//adding and acess new propert for nested object
//accessing
//way 1
console.log(myObj.myCars.car1) ;
//way2
console.log(myObj["myCars"]["car1"])

//adding new prop
myObj.myCars.car4 = "Marc"

//modifying
myObj.myCars.car1="tyota"

console.log(myObj.myCars) ;

/* 
JavaScript Display Objects
How to Display JavaScript Objects?
Displaying a JavaScript object will output [object Object].

Some solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()
*/

console.log("################# display ##############")
//Displaying the Object Properties by name

var string = car1.name + " " +car1.modal + " " +car1.color ;
console.log(string) ;

//Displaying the Object Properties in a Loop
var text= " ";
for( item in car1)
{
    text +=car1[item] + " " ;
}
console.log(text) ;

// Displaying the Object using Object.values()
text = " "
var myArray = Object.values(car1)
for (item of myArray)
{
    text += (item + " " )
}

//Displaying the Object using Object.entries()
text =" "
for( [key , valuue] of Object.entries(car1))
    {
        text += key + " "+ valuue + " " ;
    }
console.log(text) ;

/* Using JSON.stringify()
JavaScript objects can be converted to a string with JSON method JSON.stringify().

JSON.stringify() is included in JavaScript and supported in all major browsers. 
The result will be a string written in JSON notation:

{"name":"John","age":50,"city":"New York"}
*/

var mystring = JSON.stringify(car1) ;
console.log(mystring)

/*
JavaScript Object Constructors
Object Constructor Functions
Sometimes we need to create many objects of the same type.

To create an object type we use an object constructor function.

It is considered good practice to name constructor functions with an upper-case first letter.
 */
//Object Type Person
function person3 (name , age , eyyeColor)
{
    this.persName = name ;
    this.persAge =age ;
    this.persEyecolor = eyyeColor;
    /*
    Constructor Function Methods
    A constructor function can also have methods:
    */
   this.displayInfo = function ()
   {
    return  `name is ${this.persName} and age is ${this.persAge} and color eye is ${this.persEyecolor}`
   }
}

/*
Note:
In the constructor function, this has no value.

The value of this will become the new object when a new object is created. 
*/
//Now we can use new Person() to create many new Person objects
const myFather =new person3("John Doe", 50, "blue")
const myMother =new person3("sally Doe", 30, "green")
const mysister =new person3("anna john", 10, "black")

/*
Adding a Property to an Object
Adding a property to a created object is easy:
Note:
The new property will be added to myFather. Not to any other Person Objects.
*/
myFather.nationality = "English" ;
myMother.id ="12333333"
mysister.level = 4 ;

/*
Adding a Property to a Constructor
*/
//You can NOT add a new property to an object constructor:
// person3.nationality ="English" //not allow

//true 
person3.prototype.tall =123 ;
//update this value
myFather.tall=170 ;
myMother.tall = 160 ;
mysister.tall =60 ;

//call method
console.log (myFather.displayInfo() );
console.log (myMother.displayInfo() );
console.log (mysister.displayInfo() );

/* 
Adding a Method to an Object
Adding a method to a created object is easy:
*/
myFather.displaName = function ()
{
    return `father name ${this.persName}`
}
/* 
Adding a Method to a Constructor
You cannot add a new method to an object constructor function.

This code will produce a TypeError:
*/
person3.prototype.dispAge =function ()
{
    return this.persAge
}

/*
Built-in JavaScript Constructors
JavaScript has built-in constructors for all native objects:

new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object
Note:
The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

Did You Know?
Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function().
*/

