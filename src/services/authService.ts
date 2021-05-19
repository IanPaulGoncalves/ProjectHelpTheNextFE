import axios from '../utils/axios';

export function setUser(user: any) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem('user');
  return user;
}

export function isAuthenticated() {
  return !!getUser();
}

export function resetLogin() {
  localStorage.setItem('user', '');
  window.location.reload();
}

export function login(email: string, password: string) {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/home/login', { email, password })
      .then(response => {
        if (response.data.user) {
          setUser(response.data.user);
          resolve(response.data.user);
        } else {
          resolve(response.data.error);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
