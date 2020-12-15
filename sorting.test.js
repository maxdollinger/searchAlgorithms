const {input, expected} = require('./createSortedAndShuffledArr')();
const { mergeSort } = require('./sortingAlgorithms');

//Simple unit-test useing jest
test('expects an ascending sorted array', () => {
    const output = mergeSort(input);
    expect(output.toString()).toBe(expected.toString());
})
