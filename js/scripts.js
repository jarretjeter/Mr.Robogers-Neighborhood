// Business Logic
function range(num) {
  let array = [];
  if (num !== typeof(1)) {
    return "Please input a number"
  } else {
      parseInt(num);
      for (let i = 0; i <= num; i++) {
      array.push(i);
    }
  }
  console.log(array)
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



