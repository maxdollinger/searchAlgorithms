//Pro: If data is nearly sorted only view swaps
//Con: On random data a lot iterations needed
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    };

    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true

        for (let j = 0; j < i; j++) {

            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }
    return arr;
}

//Pro: - (easy to understand)
//Con: slow in every scenario
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    };

    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }

        if (min !== i) swap(arr, i, min);
    }

    return arr;
}

//Pro: if arr is nearly sorted or when sorting on streams
//Con: slow if arr is reversed or data is random
function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        let number = arr[i];

        for ( let j = i - 1; j >= 0 && arr[j] > number; j-- ) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }

    return arr;
}

//The 3 above are working well on small data sets

//Merge Sort: faster on big data sets but greater space complexity
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0,middle)), mergeSort(arr.slice(middle)));
}

function merge(arrOne, arrTwo) {
    let arr = [];
    let one = 0;
    let two = 0;

    while (one < arrOne.length && two < arrTwo.length) {
        if (arrOne[one] < arrTwo[two]) {
            arr.push(arrOne[one]);
            one++;
        } else {
            arr.push(arrTwo[two]);
            two++;
        }
    }

    if (one < arrOne.length) {
        arr = arr.concat(arrOne.slice(one));
    }
    if (two < arrTwo.length) {
        arr = arr.concat(arrTwo.slice(two));
    }

    return arr;
}




