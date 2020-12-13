
//Fisher-Yates Shuffle
function shuffleArray(arr) {
    const array = [...arr];
    for ( let i = array.length - 1; i > 0; i-- ) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

//testing function
function sortingTest(sortingFunction, maxLength) {
    const arr = [];
    //create a random number between 1 and the maxLength passed to the function
    const arrLength = Math.floor(Math.random() * maxLength + 1);
    //creates a random start point
    const arrStart = Math.floor(Math.random() * (arrLength*2)) * (Math.random() < 0.5 ? -1 : 1);

    for(let i = arrStart; i < (arrStart + arrLength); i++) {
        arr.push(i);
    }

    const shuffledArr = shuffleArray(arr);
    const sortedArr = sortingFunction([...shuffledArr]);

    if(arr.toString() !== sortedArr.toString()){
        console.log('sorted Array:');
        console.log(arr.toString());
        console.log('shuffled Array:');
        console.log(shuffledArr.toString());
        console.log('sorted with function:');
        console.log(sortedArr.toString());
        return false;
    }

    return true;
}

function testing(sortingFunction, maxLength) {
    maxLength = maxLength || 25;
    for(let i = 1; i <= 50; i++) {
        if(!sortingTest(sortingFunction, maxLength)) return false;
    }

    return true;
}

module.exports = testing;