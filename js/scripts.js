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
  let numArray = Array.from(String(num), Number);
  console.log(num);
  console.log(numArray);
  // for (let i = 0; i < numArray.length; i++) {

  // }
  if(numArray.includes(3)) {
    return "Won't you be my neighbor?";
  } else if (numArray.includes(2)) {
    return "Boop!";
  } else if (numArray.includes(1)) {
    return "Beep!";
  } else {
    return parseInt(numArray.join(""));
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



