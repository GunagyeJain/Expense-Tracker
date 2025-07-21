// hooks/useAuth.js
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

const useAuth = () => {
  const [user, setUser] = useState(undefined); // undefined while loading

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser); // null if logged out
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuth;
