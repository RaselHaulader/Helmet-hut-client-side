import { GoogleAuthProvider,signOut, onAuthStateChanged, signInWithPopup, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeFirebase from "../firebase/firebaseInit";

InitializeFirebase()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth()


  const googleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        console.log(user)
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  const logOut = ()=>{
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
    });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        setUser(user)

      } else {

        setUser({})
      }
    });

  }, [])


  return {
    googleLogIn,
    user,
    setUser,
    logOut
  }
};

export default useFirebase;