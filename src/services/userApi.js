import BASE_URL from '../urls.js';

class UserApi {
  static index() {
    return fetch(BASE_URL + 'users')
      .then(response => response.json)
      .then(json => console.log(json));
  }

  static login(email, password) {
    return fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then(res => res.json());
  }

  static authorize() {
    console.log(localStorage.getItem('token'));
    return fetch(BASE_URL + 'login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
        token: localStorage.getItem('token')
      }
    }).then(res => res.json());
  }

  static create() {}
}

export default UserApi;