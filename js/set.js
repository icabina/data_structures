"use strict";

console.log("=====================================================");
//SET DATA STRUCTURE
function mySet() {
  let collection = [];
  this.has = function (element) {
    return collection.indexOf(element) !== -1; //boolean, if is not negative 1, then is true
  };

  //this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  //add
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  //this method will remove element
  this.remove = function (elemnent) {
    //in ES6 is delete
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1); //removes from array, starting from index, up 1 element
      return true;
    }
    return false; //if element no in collection
  };

  //this method will return the size
  this.size = function () {
    return collection.length;
  };

  //NOT IN ES6
  //this method will return the union of 2
  //leaves out duplicates
  this.union = function (otherSet) {
    let unionSet = new mySet(); //new Set() is ES6
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e); //add method adds when theres no duplicates
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  //this method will return the intersection of two sets as new set
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      //for each we check if otherSet has it
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //this method will return the difference of two sets as one set
  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e); //adds when theres no duplicate
      }
    });
    return differenceSet;
  };

  //this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every(function (value) {
      //every tests every item to pass function
      return otherSet.has(value);
    });
  };
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log("setA.subset(setB)", setA.subset(setB));
console.log("setA.intersection(setB)", setA.intersection(setB).values());
console.log("setA.difference(setB)", setA.difference(setB).values());
console.log("=====================================================");
