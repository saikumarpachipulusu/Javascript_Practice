//Select elements
const pName = document.querySelector(".pName");
const pPrice = document.querySelector(".pPrice");
const pDesc = document.querySelector(".pDesc");
const pQty = document.querySelector(".pQty");
const category = document.querySelector(".category");
const msg = document.querySelector(".msg");
const form=document.querySelector("form");

//------
//Event types
//------

//1.onChange
//2.onSubmit
//3.onReset
//4.oFocus
//5.onBlur

//onchange
// pName.onchange=function(e){
//     console.log("onChange has occured");
// }

//onsubmit()
form.onsubmit = function(e){
    //prevent the default behaviour of the form
    e.preventDefault();
    console.log("Form submitted");

    //get the value from the input fields
    const name=pName.value;
    const price=pPrice.value;
    const desc=pDesc.value;
    const qty=pQty.value;
    const cat=category.value;

    //reset after submit

    pName.value = "";
    pPrice.value = "";
    pDesc.value = "";
    pQty.value = "";
    category.value = "";
  
    console.log({name,price,desc,qty,cat});
};

//onreset()
// form.onreset = function (e) {
//   //prevent the default behaviour of the form
//   e.preventDefault();
//   console.log("Form reset");

//   //get the value from the input fields
//   pName.value = "";
//   pPrice.value = "";
//   pDesc.value = "";
//   pQty.value = "";
//   category.value = "";
  
// };

//onfocus

pName.onfocus = function(){
    console.log("Form Focused");
    msg.innerHTML = "You are Typing... 💚";
};

pName.onblur = function () {
  console.log("Form blurred");
  msg.innerHTML = "You are Stopped Typing... 💔";
};









