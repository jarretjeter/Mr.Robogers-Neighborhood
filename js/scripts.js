$(document).ready(function() {
  $("form#form").submit(function(){
    event.preventDefault();

    console.log("hi");
    let output = document.getElementById("output");
    let response = "hello";
    output.insertAdjacentText('beforeend', response);
    
  });

});



