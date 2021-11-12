import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import Navigation from '../Shared/Navigation/Navigation';
import { Link, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const location = useLocation()
  const history = useHistory()
  const [page, setPage] = useState('login')
  const { googleLogIn, loginUser, setUser, auth, setLoading, error, setError, registerUser, updateProfile } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const togglePage = () => {
    page === 'login' ? setPage('register') : setPage('login')
    setError('')
  }

  const saveUserInfo = (data) => {
    console.log(data)
    axios.post('https://powerful-mountain-89009.herokuapp.com/saveUser', data)
      .then(res => console.log(res))
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
        console.log(user)
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }

  const onSubmit = data => {
    // for login
    if (page === "login") {
      console.log(data);
      setLoading(true)
      // email login
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
          history.push(location?.state?.from?.pathname || '/')
          setError('')
        })
        .catch((error) => {
          setError(error.message)
        });

      // for register
    } else if (page === 'register') {

      if (data.password === data.confirmPassword) {
        setLoading(true)
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
              history.push(location?.state?.from?.pathname || '/')
              setError('')
            }).catch((error) => {
              setError(error.message)
            });
          })
          .catch((error) => {
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

      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box style={{ boxShadow: '5px 5px 22px -7px gray', borderRadius: '10px' }} sx={{ p: 2, width: { md: '50%', xs: '100%' } }}>
            <Box sx={{ textAlign: 'center' }}>
              {page === 'login' ? <h1>LOG IN</h1> : <h1>CREATE AN ACCOUNT</h1>}
              <p>Lorem ipsum dolor sit amet consectetur  dolor sit amet consectetur adipisicing elit. Quis, sint!</p>
              <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>

              {page !== 'login' && <> <TextField style={inputStyle} id="standard-basic" label="Name" variant="standard"  {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>} </>}

              <TextField style={inputStyle} id="standard-basic" label="Email" variant="standard"  {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}

              <TextField id="standard-basic" variant="standard" label="Password" style={inputStyle}  {...register("password", { required: true })} />
              {errors.password && <span>This field is required</span>}

              {page !== 'login' && <> <TextField style={inputStyle} id="standard-basic" label="Confirm Password" variant="standard"  {...register("confirmPassword", { required: true })} />
                {errors.confirmPassword && <span>This field is required</span>} </>}

              <input type="submit" /> {page === "login" ? <Button onClick={togglePage} >Create Account</Button> : <Button onClick={togglePage} >Already have an account?</Button>}
              <Typography paragraph>{error}</Typography>
            </form>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;

