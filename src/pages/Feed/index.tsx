import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useCallback } from 'react';
import PostCard from '../../components/Post/PostCard';
import NavBar from './NavBar';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPost } from '../../reducers/post/actions';


const useStyles = makeStyles({
  root: {
    width: '75%',
    marginLeft: 10,
    '@media(max-width: 700px)': {
      width: '100%',
      marginLeft: 0,
      marginBottom: 10
    }
  }
});

function Feed() {
  const classes = useStyles();
  const postState = useAppSelector(state => state.post);
  const dispatch = useAppDispatch();

  const getPosts = useCallback(async () => {
    await dispatch(getPost());
  }, [dispatch]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <div>
          <Typography style={{ color: '#9e9e9e' }} variant="h6" gutterBottom>
            Perguntas em alta:
          </Typography>
        </div>
        {
          postState.post !== undefined
            ? postState.post.map(item => {
              const myTags: any = item.tags !== undefined ? item.tags.map(tags => tags) : [];

              return (
                <PostCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  time={item.time}
                  question={item.question}
                  description={item.description}
                  like={item.likes}
                  comment={item.comment}
                  tag={myTags}
                />
              );
            })
            : ''
        }
      </div>
    </>
  );
}

export default Feed;