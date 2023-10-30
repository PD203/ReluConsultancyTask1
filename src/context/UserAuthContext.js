import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
 
} from "firebase/auth";
import { auth } from "../firebase";

// context for user authentication
const userAuthContext = createContext();

// provider component for the user authentication context
export function UserAuthContextProvider({ children }) {
  // State for user information
  const [user, setUser] = useState({});

  //log in a user
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //sign up a new user
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

// Custom hook to access the user authentication context
export function useUserAuth() {
  return useContext(userAuthContext);
}