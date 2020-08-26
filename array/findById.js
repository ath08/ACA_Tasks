/*
    Write a function which finds corresponding object by it’s id and print it. Elsewhere it
    should print error message.
*/

const findById = (arr, Id) => {
    for (let item of arr) {
      if (item["id"] === Id) return item;
    }
  
    return `Not found`;
  };
  
  let arr = [
    { id: 1, title: "react" },
    { id: 2, title: "angular" },
    { id: 3, title: "vue" },
    { id: 4, title: "node" },
  ];

  findById(arr, 2); // { id: 2, title: "angular" },