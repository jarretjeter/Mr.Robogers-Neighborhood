// Business Logic

function range(num) {
  let array = [];
  if (typeof(num) !== typeof(1)) {
    return "Please input a number";
  } else {
      parseInt(num);
      for (let i = 0; i <= num; i++) {
      array.push(i);
    }
  }
  return array;
}

function beepBoop(num) {
  let numArray = range(num);
  let reply = [];

  for (let i = 0; i < numArray.length; i++) {
    if(numArray[i].toString().includes(3)) {
      reply.push(" Won't you be my neighbor?");
    } else if (numArray[i].toString().includes(2)) {
      reply.push(" Boop!");
    } else if (numArray[i].toString().includes(1)) {
      reply.push(" Beep!");
    } else {
      reply.push(" " + numArray[i]);
    }
  }
  reply.join(" ");
  return reply;
}



// UI Logic
$(document).ready(function() {
  $("form#form").submit(function(){
    event.preventDefault();

    let userInput = parseInt($("input#user-input").val());
    let text = document.createElement("p");
    text.append(beepBoop(userInput));
    let output = document.getElementById("output");
    output.appendChild(text);
  });
});



