/* 
    Write a function which returns the object’s size if it isn’t empty. Otherwise, print
    ‘Empty’
*/

const getObjectSize = (obj) => {
    let count = 0;
  
    for (let key in obj) {
      count += 1;
    }
  
    if (count === 0) {
      throw new Error(`object is empty`)
    }
  
    return count;
};
  
console.log(getObjectSize({ name: "Steve", lastname: "Jobs" })); //2
console.log(getObjectSize({ a: 1, b: 2, c: "hello" })); //3
console.log(getObjectSize({})); // `object is empty`