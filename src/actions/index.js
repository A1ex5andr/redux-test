import {CHANGE_AUTH} from './types.js'

export function authenticate(isLoggedIn) {
  console.log(isLoggedIn);
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}