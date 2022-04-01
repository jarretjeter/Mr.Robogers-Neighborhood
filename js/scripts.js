// Business Logic
function range(num) {
  let array = [];
  if (typeof(num) !== typeof(1)) {
    console.log(num)
    return "Please input a number"
  } else {
      parseInt(num);
      for (let i = 0; i <= num; i++) {
      array.push(i);
    }
  }
  console.log(array)
}

function mkPositive(num) {
  if (num < 0 ) {
    num = num * -1;
  } else {
    num = num;
  }
}

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



