import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';


interface Props {
  // eslint-disable-next-line react/require-default-props
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  containerSearch: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: 10,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});

function Header() {
  const classes = useStyles();
  const renderHeader: any = (props: Props) => (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="inherit" style={{ background: '#2c387e' }}>
          <Toolbar className={classes.root}>
            <div style={{ color: '#fff', width: '35%' }}>
              <span>Barra de notificação</span>
            </div>
            <Paper component="form" className={classes.containerSearch}>
              <InputBase
                className={classes.input}
                placeholder="Pesquise por algo"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );

  return renderHeader();
}

export default Header;