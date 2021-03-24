import { compareNumbers } from './utils.js';

const test = QUnit.test;

test('should take in a number and return `you got it` if user guesses number correctly', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 3;

    const actual = 5;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(compareNumbers, expected, actual);
});
