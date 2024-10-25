// Primitive datatypes
// number, String, undefined, null, boolean, bigint, symbol
// object 
// Array, object, function

const num = 12, num2 = 123.34
const str = "Abhishek"
let n;
const temp = null;
const isbool = true;
const num3 = 12345678998765431233456778n;
const ab = Symbol('123');
const ab2 = Symbol('123');
console.log("Datatype of num and num2 is "+typeof(num)+" "+typeof(num2));
console.log("Datatype of str is "+typeof(str));
console.log("Datatype of n is "+typeof(n));
console.log("Datatype of temp is "+typeof(temp));
console.log("Datatype of isbool is "+typeof(isbool));
console.log("Datatype of num3 is "+typeof(num3));

console.log("Is both symbol is same "+(ab === ab2));


// Non primitive (Refrence) 
// Array, object, function
let myArray = ["Abhi", "Ram Binod", "Beauty"]
console.log("Datype of array is "+typeof(myArray)); // object

let myObj = {
    name : "Abhishek",
    age : 25
}

console.log("Datype of myObj is "+typeof(myObj));

let myFunc = function(){
    console.log("Hello World");
    
}

console.log("Datype of myFunc is "+typeof(myFunc));

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++
Two types of memory 
 1.Stack :- Stack is making copy of his elements(Call by value), Primitive
 2.Heap :- Heap is passing his refrence (call by reference), Non-primitive
*/

let stck1 = "abhishek@gmail.com";
let stck2 = stck1;
stck2 = "adrika@gmai.com";
console.log(stck1);
console.log(stck2); // copy create 

let Abhishek ={
    age : 24
}

let adrika = Abhishek
adrika.age = 25
console.log(Abhishek.age);










