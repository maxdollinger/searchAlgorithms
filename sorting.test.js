const {input, expected} = require('./createSortedAndShuffledArr')();
const sortingFunc = { mergeSort } = require('./sortingAlgorithms');

//Simple unit-test useing jest
test('expects an ascending sorted array', () => {
    const output = sortingFunc(input);
    expect(output.toString()).toBe(expected.toString());
})
