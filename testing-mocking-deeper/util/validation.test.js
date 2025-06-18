import {expect, it} from 'vitest';
import { validateNotEmpty } from './validation';

it('should throw an error if an empty string is provided as a value', () => {
   const testInput = '';

   const validationFn = () => validateNotEmpty(testInput);

   expect(validationFn).toThrow();
});

it('should throw an error if a blank string is provided as a value', () => {
    const testInput = '         ';

    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
});