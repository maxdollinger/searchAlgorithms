const {input, expected} = require('./createSortedAndShuffledArr')();
const { mergeSort } = require('./sortingAlgorithms');

test('Array sorting functions', () => {
    const output = mergeSort(input);
    expect(output.toString()).toBe(expected.toString());
})