"use strict";

console.log("=====================================================");
//QUEUE :: first in and first out

function Queue() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    return collection.push(element);
  };
  this.dequeue = function () {
    return collection.shift(); //SHIFT removes first and returns it, POP removes last and returns it
  };
  this.front = function () {
    return collection[0]; //same as shift without removing item
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0; //checks if this statement is true
  };
}

let q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue(); //removes 'a'
console.log(q.front());
q.print();
console.log("=====================================================");
//PRIORITY QUEUE

console.log("=====================================================");
