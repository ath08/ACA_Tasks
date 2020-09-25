"use strict";

/*Declare an array, fill it with 30 random numbers [50, 300]. Get the sum of elements with an even index */

const arr = new Array(30);

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 251 + 50);
}

const getSumOfEvenIdx = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
};

getSumOfEvenIdx(arr);
