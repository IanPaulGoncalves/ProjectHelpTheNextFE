import { ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    padding: 16,
    width: 250
  }
});

const tags = [
  { id: 1, name: 'Teste' },
  { id: 2, name: 'Tes' },
  { id: 3, name: 'Test' },
  { id: 4, name: 'T' }
];

function NavBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ListSubheader>Barrinha de navegação</ListSubheader>
      {
        tags.map(item => (
          <ListItem dense button key={item.id}>
            <ListItemText primary={`#${item.name}`} />
          </ListItem>
        ))
      }
    </Paper>
  );
}

export default NavBar;