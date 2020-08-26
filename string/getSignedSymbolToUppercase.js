/*
    Write a function which makes the selected symbol uppercased
*/


const getSignedSymbolToUppercase = (str, idx) => {
    let str_ = '';

    for(let i = 0; i < str.length; i++) {
        let symbol = str[i];

        if(i === idx) {
            str_ += symbol.toUpperCase();
        } else {
            str_ += symbol;
        }
    }

    return str_;
}

getSignedSymbolToUppercase('environment', 5); //envirOnmen