import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Button, Divider, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import Navigation from '../Shared/Navigation/Navigation';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import Loader from "react-js-loader";



const Login = () => {
  const location = useLocation()
  const history = useHistory()
  const [load, setLoad] = useState(false)
  const [page, setPage] = useState('login')
  const { googleLogIn, loginUser, setUser, auth, error, setError, registerUser, updateProfile } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const togglePage = () => {
    page === 'login' ? setPage('register') : setPage('login')
    setError('')
  }

  const saveUserInfo = (data) => {
    axios.post('https://powerful-mountain-89009.herokuapp.com/saveUser', data)
      .then(res => setLoad(false))
  }


  const handleGoogleSignIn = () => {
    const uri = location?.state?.from || '/'
    googleLogIn()
      .then((result) => {
        const user = result.user;
        setUser(user)
        // save user to db
        const userInfo = {
          name: user.displayName,
          email: user.email
        }
        saveUserInfo(userInfo)
        //redirect
        history.push(uri)
        setError('')
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }

  const onSubmit = data => {
    // for login
   
    if (page === "login") {
      // email login
      setLoad(true)
      loginUser(data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user)
          // save user to db
          const userInfo = {
            name: user.displayName,
            email: user.email
          }
          saveUserInfo(userInfo)
          // redirect to location
          history.push(location?.state?.from?.pathname || '/dashboard')
          setError('')
        })
        .catch((error) => {
          setError(error.message)
        });

      // for register
    } else if (page === 'register') {

      if (data.password === data.confirmPassword) {
        setLoad(true)
        // creat account
        registerUser(data.email, data.password, data.name)
          .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            // set user name
            updateProfile(auth.currentUser, {
              displayName: data.name
            }).then(() => {
              //save user to db
              saveUserInfo({ name: data.name, email: data.email })
              // redirect to location
              history.push(location?.state?.from?.pathname || '/dashboard')
              setError('')
            }).catch((error) => {
              setLoad(false)
              setError(error.message)
            });
          })
          .catch((error) => {
            setLoad(false)
            setError(error.message)
          })
      } else {
        setError("Password did not matched")
      }
    }
  }
  const inputStyle = {
    width: '100%',
    padding: '7px 0',
    margin: '5px 0'
  }
  return (
    <div>
      <Navigation></Navigation>
      <Divider />

      <Box>
        <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center' }}>
          <Box
            style={{
              boxShadow: '5px 5px 22px -7px gray',
              borderRadius: '10px'
            }}
            sx={{ p: 2, width: { md: '50%', xs: '100%' } }}>

            <Box sx={{ textAlign: 'center' }}>
              {page === 'login' ?
                <> <Typography
                  variant="h4"
                  sx={{
                    mt: 3,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                  }}>
                  Log<Box sx={{ color: 'tomato', display: 'inline' }}> In</Box>
                </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '40px', height: '2px', bgcolor: 'tomato' }}></Box>
                  </Box>
                  <Typography
                    variant='h6'
                    sx={{
                      px: 5,
                      py: 3,
                      textAlign: 'center',
                      fontSize: '13px',
                      color: 'gray'
                    }}>
                    If you are already registered than <br /> enter your email and password to log in.
                  </Typography></> :

                <> <Typography
                  variant="h4"
                  sx={{
                    mt: 3,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                  }}>
                  Create An<Box sx={{ color: 'tomato', display: 'inline' }}> Account</Box>
                </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'center' }}> <Box sx={{ width: '40px', height: '2px', bgcolor: 'tomato' }}></Box></Box>
                  <Typography variant='h6' sx={{ px: 5, py: 3, textAlign: 'center', fontSize: '13px', color: 'gray' }}>Create an New Account to connect with us</Typography></>}
            </Box>
            <Box sx={{ mx: 'auto', borderRadius: '5px', cursor: 'pointer', p: 0, display: 'flex', boxShadow: '5px 5px 22px -9px gray', alignItems: 'center', justifyContent: 'center', width: { md: '30%', sm: '50%', xs: '50%' } }} onClick={handleGoogleSignIn}><img width="25px" height='25px' src="https://i.ibb.co/1bPdy1h/4f41a8607ccbba1bf6abea90eaffdcea.jpg" alt="" />  <Typography variant="caption"> Google Sign In </Typography></Box>
            {load && <Loader type="spinner-cub" bgColor={"tomato"} size={50} />}
            <form onSubmit={handleSubmit(onSubmit)}>

              {page !== 'login' && <> <TextField style={inputStyle} id="standard-basic" label="Name" variant="standard"  {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>} </>}

              <TextField
                style={inputStyle}
                id="standard-basic"
                label="Email"
                variant="standard"
                {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}

              <TextField
                id="standard-basic"
                variant="standard"
                label="Password"
                style={inputStyle}
                {...register("password", { required: true })} />
              {errors.password && <span>This field is required</span>}

              {page !== 'login' && <> <TextField
                style={inputStyle}
                id="standard-basic"
                label="Confirm Password"
                variant="standard"
                {...register("confirmPassword", { required: true })} />
                {errors.confirmPassword && <span>This field is required</span>} </>}

              <input
                style={{
                  color: 'white',
                  width: '100%',
                  border: 'none',
                  padding: '10px 15px',
                  background: 'tomato',
                  cursor: 'pointer'
                }}
                type="submit" /> {page === "login" ? <Button onClick={togglePage} >Create Account</Button> : <Button onClick={togglePage} >Already have an account?</Button>}
              <Typography paragraph>{error}</Typography>
            </form>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;

