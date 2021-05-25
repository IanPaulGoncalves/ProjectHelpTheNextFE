import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
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
import { useNavigate } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { useAppSelector } from '../../../../app/hooks';
import { resetLogin } from '../../../../services/authService';
import Modal from '../../../../components/Modal/Modal';

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
    height: 40
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
  const navigate = useNavigate();
  const [anchorNotification, setAnchorNotification] = React.useState<null | HTMLElement>(null);
  const openNotification = Boolean(anchorNotification);
  const [anchorAccount, setAnchorAccount] = React.useState<null | HTMLElement>(null);
  const openAccount = Boolean(anchorAccount);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const account = useAppSelector(state => state.account);
  const authenticated = Boolean(account.user);

  function login() {
    return !authenticated && navigate('/login');
  }

  function logout() {
    resetLogin();
    handleCloseAccount();
  }

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
  };

  const renderHeader: any = (props: Props) => (
    <HideOnScroll {...props}>
      <AppBar color="inherit" style={{ background: '#2c387e' }}>
        <Toolbar className={classes.root}>
          <div style={{
            display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap'
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
              <span>Barra de notificação</span>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center'
            }}
            >
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
            </div>
            {authenticated ? (
              <div style={{ display: 'flex' }}>
                <div>
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CreateIcon style={{ color: 'rgb(44, 56, 126)' }} />}
                    style={{ background: '#fff' }}
                    onClick={handleClickOpen}
                  >
                    <span style={{ color: 'rgba(0, 0, 0, 0.54)' }}>Pedir ajuda</span>
                  </Button>
                </div>
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
                    <MenuItem onClick={logout}>Sair</MenuItem>
                  </Menu>
                </div>
              </div>
            ) : (
              <div>
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
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );

  function containerModal() {
    return (
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <div>
            <span>Pergunta:</span>
          </div>
          <textarea
            className="textareastyled"
            rows={1}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <div>
            <span>Descrição:</span>
          </div>
          <textarea
            className="textareastyled"
            rows={7}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      {renderHeader()}
      {renderHeader() && (
        <Modal
          container={containerModal()}
          title="Pedir ajuda"
          onClick={handleClose}
          open={open}
          onClose={handleClose}
        />
      )}
    </>
  );
}

export default Header;