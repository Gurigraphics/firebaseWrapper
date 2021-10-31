import { db } from "./main" 
import { 
  getAuth, 
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword, 
  signInWithEmailAndPassword as _signInWithEmailAndPassword, 
  onAuthStateChanged as _onAuthStateChanged,
  signInAnonymously as _signInAnonymously,
  signOut as _signOut
} from "firebase/auth";
 
const createUserWithEmailAndPassword = async(email, password) => {
   try{
   const auth = getAuth();
  return await _createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      return { ok: "createUserWithEmailAndPassword", data: userCredential.user } 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { error: errorMessage, errorCode: errorCode, fn: "createUserWithEmailAndPassword" } 
  })
     }catch(error) {
    return { error: error, fn: "createUserWithEmailAndPassword" }
   }  
}

const signInWithEmailAndPassword = async(email, password) => {
   try{
   const auth = getAuth();
  return await _signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      return { ok: "signInWithEmailAndPassword", data: userCredential.user } 
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { error: errorMessage, errorCode: errorCode, fn: "signInWithEmailAndPassword" } 
  })
   }catch(error) {
    return { error: error, fn: "signInWithEmailAndPassword" }
   }  
}

const signInAnonymously = async() => {
  try{
  const auth = getAuth();
  return await _signInAnonymously(auth)
  .then(() => {
    // Signed in..
    return { ok: "signInAnonymously", data: userCredential.user } 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { error: errorMessage, errorCode: errorCode, fn: "signInAnonymously" } 
  });
    }catch(error) {
    return { error: error, fn: "signInAnonymously" }
   }  
}

const signOut = async() => {
    try{
  const auth = getAuth();
  return await _signOut(auth).then(() => {
    // Signed out..
    return { ok: "signOut" }   
  }).catch((error) => {
     return { error: error, fn: "signOut" } 
  });
    }catch(error) {
    return { error: error, fn: "signOut" }
   }  
}

const onAuthStateChanged = async(func) => {
  try{
   const auth = getAuth();
  return await _onAuthStateChanged(auth, (user) => {
    if (user) {   
      func({ ok: "signed in", data: user })
    }else {
      // User is signed out
      func({ ok: 'signed out' })
    }
  });
     }catch(error) {
    return func({ error: error, fn: "onAuthStateChanged" }) 
   } 
}

export const auth = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  onAuthStateChanged,
  signOut
}
  