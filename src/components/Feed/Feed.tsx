import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 16,
    marginLeft: 10
  }
});

function Feed() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <span>Feed</span>
    </Paper>
  );
}

export default Feed;