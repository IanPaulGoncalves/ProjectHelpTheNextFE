import { loginAuth } from '../../services/authService';

export const LOGIN_SUCESS = '@account/LOGIN_SUCESS';

export function login(email: string, password: string) {
  return async (dispatch: any) => {
    const user = await loginAuth(email, password);
    dispatch({
      type: LOGIN_SUCESS,
      payload: {
        user
      }
    });
  };
}
