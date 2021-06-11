import axios from '../utils/axios';

export function setToken(token: any) {
  if (token) {
    localStorage.setItem('accessToken', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
  }
}

export function getToken() {
  return localStorage.getItem('accessToken');
}

export function isAuthenticated() {
  return !!getToken();
}

export function resetLogin() {
  localStorage.removeItem('accessToken');
  window.location.reload();
}

export function loginAuth(email: string, password: string) {
  return new Promise((resolve, reject) => {
    axios
      .post('/v1/auth/login', { email, password })
      .then(response => {
        if (response.data.user) {
          setToken(response.data.token);
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
