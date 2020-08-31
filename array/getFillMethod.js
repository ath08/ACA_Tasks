const getFillMethod = (arr, value, start = 0, end = arr.length) => {
    let getFillMethod_ = [];
  
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
  
      if (i >= start && i < end) {
        getFillMethod_.push(value);
      } else {
        getFillMethod_.push(item);
      }
    }
  
    return getFillMethod_;
  };
  
  getFillMethod(["A", "B", "C", "D", "E"], "good", 1, 3);