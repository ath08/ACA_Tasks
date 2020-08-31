/*
 Write functions which check if key is in object
*/

const isKeyIncluded = (object, inKey) => {
    for (const key in object) {
      if (key === inKey) return true;
    }
  
    return false;
  };

  isKeyIncluded({ user: "Steve", name: "Jobs" }, "name"); //true