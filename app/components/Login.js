import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';
import callApi from '../utils/callApi';
import setAuthHeader from '../utils/setAuthHeader';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        width: '40vw',
    },
    textfield: {
        margin: 10,
        width: '100%'
    }
}));

 function Login(props) {
    const {errs, loginUser, history} = props
    const classes = useStyles();
    const [state, setState] = React.useState({
        login:"",
        password: "",
        errs: {
            login: "",
            password: ""
        }
      });
    const handleClick = async (e) =>{
        e.preventDefault();
        loginUser({...state}, (type)=>{
          if(type==1){
            history.push('/guest')
          }else{
            history.push('/host')
          }
        });
        
      }
      const handleOnChange = e =>{
          setState({
              ...state,
              [e.target.name]: e.target.value
          })
      }
    useEffect(()=>{
        setState({
            ...state,
            errs: {
            }
        })
       if(Object.keys(errs).length){
        setState({
            ...state,
            errs: {
                ...errs
            }
        })
       }
    },[errs])
    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper className={classes.root}>
                <form
                    
                    style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                    onSubmit={handleClick}>
                    <Typography variant='h3'>Đăng nhập</Typography>
                    <TextField
                        className={classes.textfield}
                        error = {state.errs.login ? true : false}
                        helperText={state.errs.login ? state.errs.login : ''}
                        value={state.login}
                        name='login'
                        label="Tên đăng nhập"
                        variant="outlined"
                        onChange={handleOnChange}
                    />
                    <TextField
                        error = {state.errs.password ? true : false}
                        helperText={state.errs.password ? state.errs.password : ''}
                        className={classes.textfield}
                        value={state.password}
                        name='password'
                        label="Mật khẩu"
                        variant="outlined"
                        onChange={handleOnChange}
                    />
                    
                    <Button variant="outlined" type='submit'>Đăng nhập</Button>
                    <Typography style={{marginTop: 8}}>(Nếu chưa có tài khoản nhấn <Link to='/register' style={{color: 'blue'}}>Đăng kí</Link> ) </Typography>
                </form>
            </Paper>
        </div>
    
    );
}

export default Login