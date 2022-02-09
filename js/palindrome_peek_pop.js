"use strict";
console.log("=====================================================");
//functions:
//  pop(remove top of stack),
//  peek(show top of stack),

let letters = [];
let word = "racecar";
let reversed = "";

// push letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]); //each Character
}
console.log("letters", letters);

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  reversed += letters.pop(); //add one letter at a time, pop last in stack
}
console.log("reversed", reversed);

if (reversed === word) {
  console.log("is palindrome");
} else {
  console.log("not palindrome");
}
