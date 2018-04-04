import BASE_URL from '../urls.js';

class UserApi {
  static login(email, password) {
    return fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then(res => console.log(res.json()));
  }

  static authorize() {
    return fetch(BASE_URL + 'login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
        token: localStorage.getItem('token')
      }
    }).then(res => res.json());
  }

  static create(user) {
    return fetch(BASE_URL + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res => res.json());
  }
}

export default UserApi;
