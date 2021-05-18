import axios from '../utils/axios';

export default function login(email: string, password: string) {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/home/login', { email, password })
      .then(response => {
        if (response.data.user) {
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
