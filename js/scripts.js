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



