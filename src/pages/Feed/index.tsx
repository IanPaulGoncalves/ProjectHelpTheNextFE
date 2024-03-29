import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useCallback, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import PostCard from '../../components/Post/PostCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPost, getPostDetail } from '../../reducers/post/actions';
import Modal from '../../components/Modal/Modal';

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
  const account = useAppSelector(state => state.account);
  const authenticated = Boolean(account.user);
  const [showState, setState] = useState({
    question: '',
    description: ''
  });
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const getPosts = useCallback(async () => {
    await dispatch(getPost());
  }, [dispatch]);

  useEffect(() => {
    getPosts();
  }, []);

  function setValueState(name: string, value: any) {
    setState(state => ({
      ...state,
      [name]: value
    }));
  }

  async function handleClickOpen(id: number, question: string, description: string) {
    try {
      await dispatch(getPostDetail(id));
      setValueState('question', question);
      setValueState('description', description);
      setOpen(true);
    } catch (error) {
      setOpen(false);
    }
  }

  const renderFeed = () => (
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
                type="feed"
                image={item.image}
                name={item.name}
                time={item.time}
                question={item.question}
                description={item.description}
                like={item.likes}
                comment={item.comment}
                tag={myTags}
                onClick={event => handleClickOpen(item.id, item.question, item.description)}
              />
            );
          })
          : ''
      }
    </div>
  );

  const containerModal = () => (
    <Grid container spacing={2}>
      {postState.postFilter !== undefined && postState.postFilter.map(item => {
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
            onClick={event => handleClickOpen(item.id, item.question, item.description)}
          />
        );
      })}
      {authenticated && (
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            id="id-description-modal-feed"
            label="Responder"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
        </Grid>
      )}
      <Grid item xs={12} md={12} lg={12}>
        <div>
          <span>Repostas:</span>
        </div>
      </Grid>
    </Grid>
  );


  return (
    <>
      {renderFeed()}
      {renderFeed() && (
        <Modal
          id="id-modal-feed"
          container={containerModal()}
          title="Pergunta"
          onClick={handleClose}
          open={open}
          onClose={handleClose}
        />
      )}
    </>
  );
}

export default Feed;