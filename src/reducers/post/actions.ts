import { getPostsService } from '../../services/postService';

export const GET_POST = '@post/GET_POST';

export function getPost() {
  return async (dispatch: any) => {
    const post = await getPostsService();
    dispatch({
      type: GET_POST,
      payload: {
        post
      }
    });
  };
}

