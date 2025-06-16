import {it, expect, describe} from 'vitest';
import {cleanNumbers, transformToNumber} from "./numbers";

describe('transformToNumber()', () => {
    it('should return number from string', () => {
        //Arrange
        const inputValue = '23';

        //Act
        const result = transformToNumber(inputValue);

        //Assert
        expect(result).toBe(23);
    });

    it('should return number from number', () => {
        //Arrange
        const inputValue = 23;

        //Act
        const result = transformToNumber(inputValue);

        //Assert
        expect(result).toBe(23);
    });

    it('should yield NaN if string is not a number', () => {
        //Arrange
        const inputValue = 'hello';

        //Act
        const result = transformToNumber(inputValue);

        //Assert
        expect(result).toBeNaN();
    });

    it('should return 0 from null', () => {
        //Arrange
        const inputValue = null;

        //Act
        const result = transformToNumber(inputValue);

        //Assert
        expect(result).toBe(0);
    });
})

describe('convertToNumber()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numbers = ['1', '2', '3', '4'];

        const cleanedNumbers = cleanNumbers(numbers);

        expect(cleanedNumbers[0]).toBeTypeOf('number');
    })
});