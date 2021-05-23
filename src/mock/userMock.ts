import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
  user: {
    id: 1,
    username: 'ianpaulo_ng',
    email: 'ianpaulo@teste.com.br'
  }
});

mock.onPost('/api/home/login').reply(config => {
  const { email, password } = JSON.parse(config.data);

  if (email !== 'ianpaulo@teste.com.br' || password !== '123456') {
    return [400, { message: 'E-mail ou senha incorretos' }];
  }

  const user = {
    id: 1,
    username: 'ianpaulo_ng',
    email: 'ianpaulo@teste.com.br'
  };

  return [200, { user }];
});
