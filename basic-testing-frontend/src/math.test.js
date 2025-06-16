import { it, expect, describe } from 'vitest';
import { add } from './math';

describe('add()', () => {
    it('should summarize all number values in an array', () => {
        //Arrange
        const numbers = [1, 2, 3, 4, 5];

        //Act
        const result = add(numbers);

        //Assert
        expect(result).toBe(15);
    });

    it('should yield NaN if at least one invalid number is provided', () => {
        //Arrange
        const numbers = ["hello", 1, 2, 3, 4, 5];

        //Act
        const result = add(numbers);

        //Assert
        expect(result).toBeNaN();
    });

    it('should yield a correct sum if an array of numeric string values is provided', () => {
        //Arrange
        const numbers = [ '1', '2', '3', '4', '5'];

        //Act
        const result = add(numbers);

        //Assert
        expect(result).toBe(15);
    });

    it('should yield 0 if an empty array is provided', () => {
        //Arrange
        const numbers = [];

        //Act
        const result = add(numbers);

        //Assert
        expect(result).toBe(0);
    });

    it('should throw an error if no value is passed into the function', () => {
        //Act
        const result = () => { add() };

        //Assert
        expect(result).toThrow();
    });

    it('should throw an error if provided with multiple arguments instead of array', () => {
        //Arrange
        const arg1 = 1;
        const arg2 = 10;
        const arg3 = 100;

        //Act
        const result = () => { add(arg1, arg2, arg3) };

        //Assert
        expect(result).toThrow('numbers is not iterable');
    });
})
