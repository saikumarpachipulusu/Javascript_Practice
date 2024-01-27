//1.using the new keyword

// const books=new Array("Css","html","node js");

// const books = new Array();

// books[0]="Css";
// books[1]="Html";

//2. Using Array literal

// const books=["js","react","Express"];

// const books=[];

// books[0]="js";
// books[1]="react";
// books[2]="Express";

//Arrays can take any data type value

// const arr=["food",true,20,null,undefined];

//-----
//ACCESSING ARRAYS
//-----

// const books=["mongodb","Node js","React Js"];

 //get first book

// const b1=books[0];

 //get second book

// const b2=books[1];

 //get third book

// const b3=books[2];

//get fourth book

// const b4=books[3];

// console.log(b1);

//------
//Iterating over an array
//------

// const books = ["mongodb", "Node js", "React Js"];

//check how many
// for(let i=0;i<2;i++)
// {
//     console.log(books[i]);
// }

//------
//Array Methods
//------

// const books = ["mongodb", "Node js", "React Js","Html"];

//push()
// books.push("Css");

//pop()
// books.pop();

//unshift()
// books.unshift("novel");

//shift()
// books.shift();

//indexOf

// const result = books.indexOf("Html");
// console.log(result);

//lastIndexOf()

// console.log(books.lastIndexOf("Node js"));

//include()

// console.log(books.includes("Html"));

//reverse()

// console.log(books.reverse());

//reduce method
//filter method
//find method

//-------Reduce-------

//reduce return a single
//does not mutate

// const productQty=[20,30,100];

//arr.reduce(function(acc,currval,currIdx,arr)){
    
//},initialval)

//Find the total qty in the array

// const ans=productQty.reduce(function(acc,currval){
//     return acc + currval;
// },0);

// console.log(ans);

//--------
//Array Find Method
//-------

// const agesArr=[4,6,10,20,30,50,24];

//arr.find(function(data){

//)}

 //find age less than 30;

// const result=agesArr.find(function(age){
//     return age <30;
// });

// console.log(result);

// const scoresArr = [40, 60, 50, 20, 30, 50, 24, 90, 100];

//find all scores above 50

// const ans=scoresArr.filter(function(score){
//     return score>50;
// });

// console.log(ans);














