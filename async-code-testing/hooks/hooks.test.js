import { it, expect, beforeEach, beforeAll, afterAll, afterEach } from 'vitest';
import { User } from './hooks';

beforeEach(() => {
  console.log("------------beforeEach------------")
});
beforeAll(() => {
  console.log("------------beforeAll------------")
});
afterAll(() => {
  console.log("------------afterAll------------")
});
afterEach(() => {
  console.log("------------afterEach------------")
});

//it.concurrent is useful for performance but is unsafe if your tests rely on shared state or side effects
it.concurrent('should update the email', () => {
  const user = new User('test@test.com');
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);
  expect(user.email).toBe(newTestEmail);
});

it.concurrent('should have an email property', () => {
  const user = new User('test@test.com');
  expect(user).toHaveProperty('email');
});

it.concurrent('should store the provided email value', () => {
  const user = new User('test@test.com');
  expect(user.email).toBe('test@test.com');
});

it.concurrent('should clear the email', () => {
  const user = new User('test@test.com');
  user.clearEmail();
  expect(user.email).toBe('');
});

it.concurrent('should still have an email property after clearing the email', () => {
  const user = new User('test@test.com');
  user.clearEmail();
  expect(user).toHaveProperty('email');
});
