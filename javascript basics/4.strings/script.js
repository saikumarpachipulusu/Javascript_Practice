//-----
//ways of creating string
//-----

//using string literal

// const myName  = "John";

// using the constructor fuction

// const firstName = new String("John");

// const result=myName===firstName;

// console.log(firstName);

//-------
//String Concatination
//-------

// const str1="hello";
// const str2="how are you";
/// const result=str1+" "+str2
//concate method()
// const result=str1.concat(" "+str2);

// console.log(result);

//------
//Java script template literals
//------

//string templates
//back tick syntax
//template strings

//Back tick syntax

// const msg=` Good day brother`;
// const msg2=`"Good evening"`
// console.log(msg2);

//multiline strings

// const msg=
// `
// welcome to our application
// try to make sure ut have
// an
// account
// `;
// console.log(msg);

//interpolation

// const age = 30;

// const welcome = `This is your age ${age}`;

//-------
// string length
//-------

// const lastName='John   ';

// const result=lastName.length;

// console.log(result);

//---------
//trim/toUppercase/toLowerCase/IndexOf

//trim

// const str ="  coding time ";
// console.log(str.length);

// const res=str.trim();

// console.log(res.length);

//toUpperCase/toLowerCase

// const str='coding time';

// console.log(str.toUpperCase());
//console.log(str.toLowerCase());

//indexOf

// const str = "coding time";

// const res= str.indexOf("t");

// console.log(res);

// function containWhiteSpace(str) {
//    return str.indexOf(" ")!==-1;
// }

// const res = containWhiteSpace("john");

// console.log(res);

//--------
//split()
//-------

// const str='you';

// const res=str.split("");

// console.log(res);

//------
//join()
//------

// const str='you';

// const res=str.split("");

// const convertedStr=res.join("");

// console.log(convertedStr);

//-------
//reverse()
//-------

// const food=['pizza','congee','fufu','rice'];

// const reversedArr = food.reverse();

// console.log(reversedArr);

// function reverseString(str){
//     return str.split("").reverse().join("");
// }

// const result = reverseString("nodejs");

// console.log(result);

//------
//Repeat()
//------

// const str='Welcome to gopi nilayam';

// const res=str.repeat(2);

// console.log(res);

//--------
//StartWith()
//-------

// const str = "Welcome";

// const result=str.startsWith("W");

// console.log(result);

//--------
//includes()
//--------

// const str="Are you a developer?";

// const res = str.includes('you');

// console.log(res);

//-----
//SLICE()
//-----

// const str = 'welcome to java script methods';

// const res=str.slice(2,8);

// console.log(res);

// It doesnot include end character

//------
//string comparison
//------

//console.log('a'>'A');

//console.log('Glow'<'Glee');

//compare of different types

// console.log("a">2);

//console.log("5"===5);

//compare boolean values

// console.log(false==0);

//compare null and undefined

// console.log(null==undefined);















