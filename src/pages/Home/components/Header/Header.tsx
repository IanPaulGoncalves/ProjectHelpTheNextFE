import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';


interface Props {
  // eslint-disable-next-line react/require-default-props
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined, threshold: 50 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  containerSearch: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    width: '30%'
  },
  input: {
    marginLeft: 10,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  button: {
    margin: 8
  }
});

function Header() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorNotification, setAnchorNotification] = React.useState<null | HTMLElement>(null);
  const openNotification = Boolean(anchorNotification);
  const [anchorAccount, setAnchorAccount] = React.useState<null | HTMLElement>(null);
  const openAccount = Boolean(anchorAccount);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const login = () => (auth === false && setAuth(true));

  const handleMenuNotification = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNotification(event.currentTarget);
  };

  const handleMenuAccount = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorAccount(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setAnchorNotification(null);
  };

  const handleCloseAccount = () => {
    setAnchorAccount(null);
    setAuth(false);
  };

  const renderHeader: any = (props: Props) => (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="inherit" style={{ background: '#2c387e' }}>
          <Toolbar className={classes.root}>
            <div style={{ color: '#fff', width: '30%' }}>
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
            {auth ? (
              <div style={{ display: 'flex', justifyContent: 'flex-end', width: '30%' }}>
                <div>
                  <IconButton
                    aria-label="show 17 new notifications"
                    color="inherit"
                    aria-controls="menu-notifications"
                    aria-haspopup="true"
                    onClick={handleMenuNotification}
                  >
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon style={{ color: '#fff' }} />
                    </Badge>
                  </IconButton>
                  <Menu
                    key={1}
                    id="menu-notifications"
                    anchorEl={anchorNotification}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={openNotification}
                    onClose={handleCloseNotification}
                  >
                    <div>
                      <span style={{ margin: '0px 10px' }}>
                        Aqui estão suas notificações
                      </span>
                    </div>
                  </Menu>
                </div>
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-account"
                    aria-haspopup="true"
                    onClick={handleMenuAccount}
                    color="inherit"
                  >
                    <AccountCircle style={{ color: '#fff' }} />
                  </IconButton>
                  <Menu
                    key={2}
                    id="menu-account"
                    anchorEl={anchorAccount}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={openAccount}
                    onClose={handleCloseAccount}
                  >
                    <MenuItem onClick={handleCloseAccount}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseAccount}>My account</MenuItem>
                  </Menu>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'flex-end', width: '30%' }}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<AccountCircle style={{ color: 'rgb(44, 56, 126)' }} />}
                  onClick={login}
                  style={{ background: '#fff' }}
                >
                  <span style={{ color: 'rgba(0, 0, 0, 0.54)' }}>Entrar</span>
                </Button>
              </div>
            )}
          </Toolbar>

        </AppBar>
      </HideOnScroll>
    </>
  );

  return renderHeader();
}

export default Header;