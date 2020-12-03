import { authCookieHandler } from '../tools';

const { getAuthCookie } = authCookieHandler;

const root = '/api/v1';

const urls = {
  register: '/signup',
  login: '/login'
}


const auth = (type, identifiers) => fetch(`${root}${urls[type]}`, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ user: identifiers }),
})
  .then((response) => {
    getAuthCookie('token', response.headers.get('Authorization'));
    return response.json()
  });

const API = {
  auth,
};

export default API;
