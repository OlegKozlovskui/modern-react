import jwtDecode from 'jwt-decode';

/**
 * Sets the new token or replaces the existing one
 * @param {string} token to set
 * @return {void}
 * @example
 * setToken('j1hj4gh21345hfd8ah3')
 */
export const setToken = token => localStorage.setItem('token', token);

/**
 * Gets current token or returns null if token is not in the localstorage
 * @return {string} or {null}
 * @example
 * getToken()
 * // => "j1hj4gh21345hfd8ah3"
 */
export const getToken = () => localStorage.getItem('token');

/**
 * Removes current token
 * @return {void}
 * @example
 * removeToken()
 */
export const removeToken = () => localStorage.removeItem('token');

/**
 * Returns user object decoded from token
 * @return { id, username, type, email } or {}
 * @example
 * getUser()
 * // => { id: 1, username: 'someUser', type: 'ENTERPRISE' , email: 'test@test.com'}
 */
export const extractUserDetailsFromToken = () => {
  try {
    return jwtDecode(getToken());
  } catch (error) {
    return {};
  }
};