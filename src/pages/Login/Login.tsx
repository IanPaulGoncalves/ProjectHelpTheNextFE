import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import React, { useState } from 'react';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/assets/loginBackgound/background.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  form: {

  }
});
function Login() {
  const classes = useStyle();
  const [showPassword, setPassword] = useState(false);
  const handleClickShowPassword = () => {
    setPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Paper style={{ width: 380, height: 380 }}>
        <Grid container style={{ padding: '0 35px' }}>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 30
            }}
          >
            <Avatar alt="Login">
              <VpnKeyIcon />
            </Avatar>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )}
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12} lg={12} style={{ paddingTop: 10 }}>
            <Button fullWidth variant="contained" color="primary">
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Login;