const getJoinMethod = (arr, adhesive) => {
    let arr_ = '';
    const lastItem = arr[arr.length - 1];

    for (let item of arr) {
        if (lastItem !== item) {
            arr_ += `${item}${adhesive}`;
        } else {
            arr_ += `${item}`
        }
    }

    return arr_;
}

getJoinMethod(['welcome', 'to', 'JS', '!'], '*')