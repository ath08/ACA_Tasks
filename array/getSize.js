/*
Write a function which returns the object’s size if it isn’t empty. Otherwise, print ‘Empty’
*/

const getSize = (obj) => {
    let count = 0;
  
    for (let key in obj) {
        count += 1;
    }

    if (count === 0) {
        return "Empty";
      }
    
      return count;
  };
  
getSize({ name: "Steve", lastname: "Jobs" }); //2