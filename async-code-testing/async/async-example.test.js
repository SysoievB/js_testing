import {it, describe, expect} from 'vitest';
import {generateToken, generateTokenPromise} from "./async-example.js";

it('should generate a simple token', () => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (err, token) => {
        expect(token).toBeDefined();
    });
});

it('should generate a simple token', () => {
    const testUserEmail = 'test@test.com';

    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});