import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import InitializeFirebase from "../firebase/firebaseInit";

InitializeFirebase()


const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth()
    const googleLogIn=()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          console.log(user)
        }).catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    }
    
    return {
        googleLogIn
    }
};

export default useFirebase;