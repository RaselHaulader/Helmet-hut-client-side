import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import Navigation from '../Shared/Navigation/Navigation';
import { Link, useLocation, useHistory } from 'react-router-dom';


const Login = () => {
  const location = useLocation()
  const history = useHistory()
  const [page, setPage] = useState('login')
  const {googleLogIn, loginUser, setUser, auth, setLoading, error, setError, registerUser, updateProfile } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const togglePage = () => {
    page === 'login' ? setPage('register') : setPage('login')
    setError('')
  }

  const onSubmit = data => {
    // for login
    if (page === "login") {
      console.log(data);
      setLoading(true)
      loginUser(data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user)
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
        console.log(data)
        registerUser(data.email, data.password, data.name)
          .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            updateProfile(auth.currentUser, {
              displayName: data.name
            }).then(() => {
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
              <button onClick={()=>googleLogIn(location,history)}>Google Sign In</button>
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





/*
https://i.ibb.co/G9sfjvM/hl8-removebg-preview.png
https://i.ibb.co/k2pyf5J/hl9-removebg-preview-1.png
https://i.ibb.co/kJmcKRt/hl10-removebg-preview.png
https://i.ibb.co/w6MgGpB/hl11-removebg-preview.png
https://i.ibb.co/92pznyY/hl12-removebg-preview.png
https://i.ibb.co/HhcFLTn/05-Main-Shop-Grid-View-removebg-preview.png
https://i.ibb.co/y4BkLXx/hl2-removebg-preview-1.png
https://i.ibb.co/ZVC7H67/hl3-removebg-preview.png
https://i.ibb.co/NmZYc5h/hl4-removebg-preview.png
https://i.ibb.co/WVZyr78/hl5-removebg-preview.png
https://i.ibb.co/r6Fd35K/hl6-removebg-preview.png
https://i.ibb.co/vc4884f/hl7-removebg-preview.png

*/

/* const products = [
    {
        name: 'Crimson Thunder',
        price: 140,
        img: 'https://i.ibb.co/HhcFLTn/05-Main-Shop-Grid-View-removebg-preview.png',
        title: 'By valentine',
        details: 'Boasting a compact, aerodynamic DOT shell design with sharp and aggressive styling for impeccable impact protection',
        rating: '4'
    },
    {
        name: 'The Golden Eagol',
        price: 175,
        img: 'https://i.ibb.co/vc4884f/hl7-removebg-preview.png',
        title: 'Water resistance',
        details: ' protection to excel whether short-distance street performance or long-distance touring comfort.',
        rating: '4'
    },
    {
        name: 'Aquamenti',
        price: 185,
        img: 'https://i.ibb.co/r6Fd35K/hl6-removebg-preview.png',
        title: 'Ultra durability',
        details: 'Multiple conscientiously designed ventilation panels effective in streamlining the cooling process to assist',
        rating: '4'
    },
    {
        name: 'Purple Madness',
        price: 190,
        img: 'https://i.ibb.co/WVZyr78/hl5-removebg-preview.png',
        title: 'Scratch proof',
        details: 'Trendsetting springs for precise functionality ensuring a superior wind and water sealant layer. Unique 3D molded shield designed',
        rating: '4'
    },
    {
        name: 'Dark galaxy',
        price: 199,
        img: 'https://i.ibb.co/G9sfjvM/hl8-removebg-preview.png',
        title: 'By calvinson',
        details: 'Unique 3D molded shield designed to ensure a distortion-free view throughout the entire field of vision.',
        rating: '4'
    },
    {
        name: 'Yello magic',
        price: 175,
        img: 'https://i.ibb.co/k2pyf5J/hl9-removebg-preview-1.png',
        title: 'Super strong',
        details: 'Removable Breath Guard rerouting the rider’s breath to reduce shield fogging. Inserted Chin Curtain designed ',
        rating: '4'
    },
    {
        name: 'Sunrise Power',
        price: 188,
        img: 'https://i.ibb.co/kJmcKRt/hl10-removebg-preview.png',
        title: 'Ultra strong',
        details: ' Inserted Chin Curtain designed to reduce wind turbulence and noise. Quick-Release Chin Strap for effortless usage.',
        rating: '5'
    },
    {
        name: 'Red Eye',
        price: 210,
        img: 'https://i.ibb.co/w6MgGpB/hl11-removebg-preview.png',
        title: 'Aerodynamic',
        details: 'Fully removable, washable, and replaceable microfiber inner material that absorbs sweat without compromising comfort',
        rating: '4'
    },
    {
        name: 'White storm',
        price: 185,
        img: 'https://i.ibb.co/92pznyY/hl12-removebg-preview.png',
        title: 'By spigel',
        details: 'High Resistance ABS Shell With Adjustable Strap. Sleek and Lightweight Design Reduces Wind Noise.',
        rating: '5'
    },
    {
        name: 'The Patriot',
        price: 175,
        img: 'https://i.ibb.co/y4BkLXx/hl2-removebg-preview-1.png',
        title: 'By calvinson',
        details: 'DOT Safety Standards.Helmet Liner / Cheek Pads are Lightweight, Soft and Easily Removable and Washable.',
        rating: '4'
    },
    {
        name: 'Crashing wave',
        price: 179,
        img: 'https://i.ibb.co/ZVC7H67/hl3-removebg-preview.png',
        title: 'Water resistant',
        details: 'Modular Flip-Up Function Anti-Scratch, Anti-Fog and Wide View Clear Visor.',
        rating: '5'
    },
    {
        name: 'Silver Tower',
        price: 170,
        img: 'https://i.ibb.co/NmZYc5h/hl4-removebg-preview.png',
        title: 'Pro rider',
        details: 'The helmet contains several LED lights that will flash at differing speeds depending on the rider’s preference. ',
        rating: '4'
    },
] */



/*

[
  {
    "name": "Crimson Thunder",
    "price": 140,
    "img": "https://i.ibb.co/HhcFLTn/05-Main-Shop-Grid-View-removebg-preview.png",
    "title": "By valentine",
    "details": "Boasting a compact, aerodynamic DOT shell design with sharp and aggressive styling for impeccable impact protection",
    "rating": 4
  },
  {
    "name": "Golden Eagol",
    "price": 175,
    "img": "https://i.ibb.co/vc4884f/hl7-removebg-preview.png",
    "title": "Water resistance",
    "details": " protection to excel whether short-distance street performance or long-distance touring comfort.",
    "rating": 4
  },
  {
    "name": "Aquamenti",
    "price": 185,
    "img": "https://i.ibb.co/r6Fd35K/hl6-removebg-preview.png",
    "title": "Ultra durability",
    "details": "Multiple conscientiously designed ventilation panels effective in streamlining the cooling process to assist",
    "rating": 4
  },
  {
    "name": "Purple Madness",
    "price": 190,
    "img": "https://i.ibb.co/WVZyr78/hl5-removebg-preview.png",
    "title": "Scratch proof",
    "details": "Trendsetting springs for precise functionality ensuring a superior wind and water sealant layer. Unique 3D molded shield designed",
    "rating": 4
  },
  {
    "name": "Dark galaxy",
    "price": 199,
    "img": "https://i.ibb.co/G9sfjvM/hl8-removebg-preview.png",
    "title": "By calvinson",
    "details": "Unique 3D molded shield designed to ensure a distortion-free view throughout the entire field of vision.",
    "rating": 4
  },
  {
    "name": "Yellow magic",
    "price": 175,
    "img": "https://i.ibb.co/k2pyf5J/hl9-removebg-preview-1.png",
    "title": "Super strong",
    "details": "Removable Breath Guard rerouting the rider’s breath to reduce shield fogging. Inserted Chin Curtain designed ",
    "rating": 4
  },
  {
    "name": "Sunrise Power",
    "price": 188,
    "img": "https://i.ibb.co/kJmcKRt/hl10-removebg-preview.png",
    "title": "Ultra strong",
    "details": " Inserted Chin Curtain designed to reduce wind turbulence and noise. Quick-Release Chin Strap for effortless usage.",
    "rating": 5
  },
  {
    "name": "Red Eye",
    "price": 210,
    "img": "https://i.ibb.co/w6MgGpB/hl11-removebg-preview.png",
    "title": "Aerodynamic",
    "details": "Fully removable, washable, and replaceable microfiber inner material that absorbs sweat without compromising comfort",
    "rating": 4
  },
  {
    "name": "White storm",
    "price": 185,
    "img": "https://i.ibb.co/92pznyY/hl12-removebg-preview.png",
    "title": "By spigel",
    "details": "High Resistance ABS Shell With Adjustable Strap. Sleek and Lightweight Design Reduces Wind Noise.",
    "rating": 5
  },
  {
    "name": "The Patriot",
    "price": 175,
    "img": "https://i.ibb.co/y4BkLXx/hl2-removebg-preview-1.png",
    "title": "By calvinson",
    "details": "DOT Safety Standards.Helmet Liner / Cheek Pads are Lightweight, Soft and Easily Removable and Washable.",
    "rating": 4
  },
  {
    "name": "Crashing wave",
    "price": 179,
    "img": "https://i.ibb.co/ZVC7H67/hl3-removebg-preview.png",
    "title": "Water resistant",
    "details": "Modular Flip-Up Function Anti-Scratch, Anti-Fog and Wide View Clear Visor.",
    "rating": 5
  },
  {
    "name": "Silver Tower",
    "price": 170,
    "img": "https://i.ibb.co/NmZYc5h/hl4-removebg-preview.png",
    "title": "Pro rider",
    "details": "The helmet contains several LED lights that will flash at differing speeds depending on the rider’s preference. ",
    "rating": 4
  }
]

*/