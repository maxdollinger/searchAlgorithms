const {input, expected} = require('./createArrays')();
//testing mergeSort
const sortingFunc = { mergeSort } = require('./sortingAlgorithms');

//Simple unit-test useing jest
test('Should sort an array in ascending order', () => {
    const output = sortingFunc(input);
    expect(output.toString()).toBe(expected.toString());
})
