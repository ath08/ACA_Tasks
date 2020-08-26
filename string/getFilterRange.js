/*
    Write a function filterRange(arr, a, b) that gets an array, looks for elements between a
    and b in it and returns an array of them.
*/

const getFilterRange = (arr, firstNum, secondNum) => {
    let arr_ = [];

    for (num of arr) {
        if (num >= firstNum && num <= secondNum) {
            arr_.push(num);
        }
    }

    return arr_;
};

getFilterRange([-10, -8, 0, 10, 20], -100, 15) // [-10, -8, 0, 10]