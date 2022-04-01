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
Code: beepBoop(30);
Expected Output: "Won't you be my neighbor?"