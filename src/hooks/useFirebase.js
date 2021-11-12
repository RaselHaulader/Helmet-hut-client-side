import { useEffect, useState } from "react";
import { GoogleAuthProvider, updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, getAuth } from "firebase/auth";
import InitializeFirebase from "../firebase/firebaseInit";
import axios from "axios";

InitializeFirebase()

const useFirebase = () => {
  const [admin, setAdmin] = useState(false)
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth()
  const [isLoading, setLoading] = useState(true)
  const [adminLoad, setAdminLoad] = useState(true)
  const [error, setError] = useState('')




  // google sign in
  const googleLogIn = () => {

    return signInWithPopup(auth, googleProvider)
      .finally(() => setLoading(false))

  }
  // log out
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
      setError('')
    }).catch((error) => {
    });
  }

  // create user
  const registerUser = (email, password, name) => {
    console.log(email, password)
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => {
        setLoading(false)
      })

  }

  // sign in with email
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => {
        setLoading(false)
      })
  }
  // auth state observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setLoading(false)
        setError('')
      } else {
        setLoading(false)
        setUser({})
        setError('')
      }
    });
  }, [])
  // check admin

  useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:5000/checkAdminRole/${user.email}`)
        .then(res => {
          console.log(res.data.admin)
          setAdmin(res.data.admin)
          setAdminLoad(false)
        })
    }
  }, [user?.email])


  return {
    googleLogIn,
    user,
    setUser,
    logOut,
    registerUser,
    auth,
    updateProfile,
    loginUser,
    isLoading,
    error,
    setError,
    setLoading,
    admin,
    adminLoad,
  }
};

export default useFirebase;