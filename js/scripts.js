// Business Logic
function range(num) {
  let array = [];
  // console.log(num);
  if (typeof(num) !== typeof(1)) {
    console.log(num);
    return "Please input a number";
  } else {
      parseInt(num);
      for (let i = 0; i <= num; i++) {
      array.push(i);
    }
  }
  console.log(array);
}

function beepBoop(num) {
  // num = String(num);
  // let numArray = num.split("");
  let numArray = Array.from(String(num), Number); //create variable with num converted into an array with number values
  let reply = [];
  // for (let i = 0; i < numArray.length; i++) {

  // }
  if(numArray.includes(3)) {
    reply.push("Won't you be my neighbor?"); //push value to empty array
    return reply.join(""); //convert array to string
  } else if (numArray.includes(2)) {
    reply.push("Boop!");
    return reply.join("");
  } else if (numArray.includes(1)) {
    reply.push("Beep!");
    return reply.join("");
  } else {
    return parseInt(numArray.join("")); //if above conditions false, return numArray converted back into a string
    // return numArray.toString("").split("");
  }
}

// function mkPositive(num) {
//   if (num < 0 ) {
//     num = num * -1;
//   } else {
//     num = num;
//   }
//   console.log(num)
// }

// UI Logic
$(document).ready(function() {
  $("form#form").submit(function(){
    event.preventDefault();

    let userInput = $("input#user-input").val();
    let text = document.createElement("p");
    let response;
    text.append(userInput);
    let output = document.getElementById("output");
    output.appendChild(text);


    // let output = document.getElementById("output");
    // let response = <p>Hello</p>
    // // output.removeAttribute("id");
    // output.insertAdjacentText('beforeend', response);
    // // $().remove();
  });

});



