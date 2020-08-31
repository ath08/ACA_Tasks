const getSliceMethod = (arr, from, to) => {
    let getSliceMethod_ = [];
  
    for (let item of arr) {
      let count = getSliceMethod_.length;
  
      if (from <= arr.indexOf(item) && arr.indexOf(item) < to) {
        getSliceMethod_[Number(count)] = item;
        count++;
      }
    }
  
    return getSliceMethod_;
  };
  
  getSliceMethod(["Banana", "Orange", "Lemon", "Apple", "Mango"], 1, 3); //["Orange", "Lemon"]