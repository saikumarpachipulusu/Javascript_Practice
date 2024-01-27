//select h1
const h1 = document.querySelector("h1");

//------
//Keyboard events
//------

//keydown  when the key is pressed down

document.body.addEventListener("keydown",function(e){
    console.log("You are pressing the key ",e);
    h1.innerHTML = `You are pressing the key ${e.key} 👨‍👨‍👧`;
})

//keyup when the key is relased
document.body.addEventListener("keyup", function (e) {
  console.log("You released the key ", e);
  h1.innerHTML = `You released the key ${e.key} 👨`;
});

