"use strict";

console.log("=====================================================");

function PriorityQueue() {
  let collection = [];
  this.printCollection = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      //check if queue is empty
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        // [0] ITEM
        // [1] PRIORITY
        if (element[1] < collection[i][1]) {
          //check priority in each item of collection
          //checking
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    var value = collection.shift(); //removes first
    return value[0];
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let pq = new PriorityQueue();
pq.enqueue(["Name Lastanme", 2]);
pq.enqueue(["ola madich", 3]);
pq.enqueue(["hello you", 1]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();

console.log("=====================================================");
