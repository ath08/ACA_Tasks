const getIncludesMethod = (arr, elem) => {
    for (let item of arr) {
        if (item === elem) return true;
    }

    return false;
}

getIncludesMethod([1, 2, 3, 5, 7, 10, 65, 47], 0); 