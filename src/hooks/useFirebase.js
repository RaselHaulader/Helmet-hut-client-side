import { useEffect, useState } from "react";
import { GoogleAuthProvider, updateProfile,signInWithEmailAndPassword , createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, getAuth } from "firebase/auth";
import InitializeFirebase from "../firebase/firebaseInit";

InitializeFirebase()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState('')


  //loading

  // google sign in
  const googleLogIn = (location,history) => {
    const uri = location?.state?.from || '/'
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        history.push(uri)
        setError('')
        console.log(user)
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
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
   return  createUserWithEmailAndPassword(auth, email, password)
   .finally(()=>{
     setLoading(false)
   })
      
  }


  // sign in with email
  const loginUser=(email,password)=> {
   return signInWithEmailAndPassword(auth, email, password)
   .finally(()=>{
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
    setLoading
  }
};

export default useFirebase;