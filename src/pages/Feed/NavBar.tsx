import { ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    padding: 16,
    width: '25%',
    maxHeight: 350,
    '@media(max-width: 700px)': {
      width: '100%',
      marginBottom: 10
    }
  }
});

const tags = [
  { id: 1, name: 'React', link: 'react' },
  { id: 2, name: 'TypeScript', link: 'typescript' },
  { id: 3, name: 'Angular', link: 'angular' },
  { id: 4, name: 'JavaScript', link: 'javascript' },
  { id: 5, name: 'Python', link: 'python' },
  { id: 6, name: 'Java', link: 'java' },
  { id: 7, name: 'C#', link: 'csharp' }
];

function NavBar() {
  const classes = useStyles();
  const navigate = useNavigate();

  function handleClickItem(link: any) {
    if (link) {
      navigate(`/search/${link}`);
    }
  }

  return (
    <Paper className={classes.root}>
      <ListSubheader>Tags</ListSubheader>
      {
        tags.map(item => (
          <ListItem dense button key={item.id}>
            <ListItemText key={item.id} primary={`#${item.name}`} onClick={event => handleClickItem(item.link)} />
          </ListItem>
        ))
      }
    </Paper>
  );
}

export default NavBar;