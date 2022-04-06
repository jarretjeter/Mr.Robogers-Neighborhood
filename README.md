# _Mr. Roboger's Neighborhood_

#### By _**Jarret Jeter**_

#### _Webpage takes an input and outputs a response from Mr. Roboger, depending on the number entered._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _JQuery_

## Description

_This page uses to Javascript functions, range(num) and beebBoop(num). 'Range' will output all numbers starting from zero up to the number that the user gave it in an array. The function 'beepBoop' will call 'range' to use its created array and, depending on the value of each number in the array, will change that number to the string "Beep", "Boop", "Won't you be my neighbor?", or leave the number as is_

## Setup/Installation Requirements

* _In git, clone this repository (https://github.com/jarretjeter/Mr.Robogers-Neighborhood.git) onto your computer._
* _Open 'index.html' to see the webpage._
* _Enter a number into the form to see the values outputted_
* _You can open the html, css, and scripts files in a text editor to see how they work together_

## Test Cases
Describe: range(num)

Test: "Only takes a number"
Code: range("5");
Expected Output: "Please input a number"

Test: "Will return a range of numbers from 0 up to the user's inputted number in an array"
Code: range(5);
Expected Output: [0, 1, 2, 3, 4, 5]


Describe: beepBoop(num)

Test: "It should return the string 'Beep!' if number is a 1"
Code: beepBoop(1);
Expected Output: "Beep!"

Test: "It should return the string 'Boop!' if number is a 2"
Code: beepBoop(2);
Expected Output: "Boop!"

Test: "It should return the string 'Won't you be my neighbor?' if number is a 3"
Code: beepBoop(3);
Expected Output: "Won't you be my neighbor?"

Test: "It should work with multiple digits"
Code: beepBoop(03);
Expected Output: "Won't you be my neighbor?"

Test: "If number has a combination of values of 1, 2, and/or 3, function should take 3 as highest precedence. If no 3, then 2, if no 2, then 1."
Code: beepBoop(11223);
Expected Output: "Won't you be my neighbor?"



## Known Bugs

* _Does not work with negative numbers_

## License

_If you have any issues with the code or ideas on how to better it, please contact me at jarretjeter@yahoo.com_

[MIT](https://github.com/jarretjeter/Mr.Robogers-Neighborhood/blob/main/LICENSE.txt)

Copyright (c) _04/05/2022_ _Jarret Jeter_

