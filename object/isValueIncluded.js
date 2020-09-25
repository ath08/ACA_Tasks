"use strict";

/*Write functions which check if value is in object*/

const isValueIncluded = (obj, value) => {
  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    }
  }

  return false;
};

isValueIncluded({ user: "Steve", name: "Jobs", age: 25 }, 25);
