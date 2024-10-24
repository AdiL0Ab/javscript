let a=5;
let b = '5';
let c= Number(b);
if(a==b){
    console.log("String and number is same");
}
else if(a==c){
    console.log("string and number is not same");
    
}else{
    console.log("Validation is not same");
    
}
/*
 <
 <=
 >
 >=
 ==
 !=
*/

console.log(null > 0)
console.log(null<0)
console.log(null == 0)
console.log(null <= 0)
console.log(null >= 0)
console.log(undefined <= 0)

//=== strict check checking datatypes too 
{
let a=5;
let b = '5';
let c= Number(b);
if(a===b){
    console.log("String and number is same");
}
else if(a===c){
    console.log("string and number is not same");
    
}else{
    console.log("Validation is not same");
    
 }
}