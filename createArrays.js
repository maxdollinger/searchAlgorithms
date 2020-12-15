
//Fisher-Yates Shuffle
function shuffleArray(arr) {
    const array = [...arr];
    for ( let i = array.length - 1; i > 0; i-- ) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

//Creates two arrays filled with numbers one sorted and one shuffled
function createSortedAndShuffledArr(length = 100) {
    const arr = [];
    //creates a random start point
    const arrStart = Math.floor(Math.random() * (length*2)) * (Math.random() < 0.5 ? -1 : 1);

    for(let i = arrStart; i < (arrStart + length); i++) {
        arr.push(i);
    }

    const shuffledArr = shuffleArray(arr);

    return {
        input: shuffledArr,
        expected: arr
    };
}

module.exports = createSortedAndShuffledArr;
