import { ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    padding: 16,
    width: '25%',
    maxHeight: 255,
    '@media(max-width: 600px)': {
      width: '100%',
      marginBottom: 10
    }
  }
});

const tags = [
  { id: 1, name: 'React', link: 'https://sfiabvua' },
  { id: 2, name: 'TypeScript', link: 'https://bdrszvsz' },
  { id: 3, name: 'Angular', link: 'https://brdbdbbr' },
  { id: 4, name: 'JavaScript', link: 'https://davsdvsv' }
];

function NavBar() {
  const classes = useStyles();

  function handleClickItem(tag: any) {
    if (tag) {
      return;
    }
  }

  return (
    <Paper className={classes.root}>
      <ListSubheader>Tags</ListSubheader>
      {
        tags.map(item => (
          <ListItem dense button key={item.id}>
            <ListItemText key={item.id} primary={`#${item.name}`} onClick={() => handleClickItem(item)} />
          </ListItem>
        ))
      }
    </Paper>
  );
}

export default NavBar;