"use strict";

/*Write Array method findIndex */

const findIndex = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
};

findIndex([5, 8, -1, 41, 6], 10); // -1
findIndex([10, 20, 50, "hi", -100, "good"], "hi"); //3