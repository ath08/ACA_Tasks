/*
    Write a function which removes all the words from array starting by a given letter
*/

const removeByLetter = (arr, letter) => {
    let arr_ = [];
    
    for (let item of arr) {
        let firstLetter = item[0];

        if (firstLetter.toUpperCase() !== letter.toUpperCase()) {
            arr_.push(item)
        }
    }

    return arr_;
}

removeByLetter(['Godfather', 'Game of Thrones','Social Network'], 'g'); // Social Network
removeByLetter(['Manchester City', 'Milan', 'Marseille'],'m'); //[]