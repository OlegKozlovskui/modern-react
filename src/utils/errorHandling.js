export const GENERAL_UNAUTHORIZED = 'GENERAL_UNAUTHORIZED';
export const USER_NO_USER_FOUND = 'USER_NO_USER_FOUND';
export const USER_WRONG_PASSWORD = 'USER_WRONG_PASSWORD';

// Change messages
export const errorMessageMap = new Map([
  [GENERAL_UNAUTHORIZED, 'Unauthorized'],
]);

export const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Please try again.';

export const authErrorMap = new Map([
  [USER_NO_USER_FOUND, 'email'],
  [USER_WRONG_PASSWORD, 'password'],
]);

