import { db } from "./main" 
import { 
	getAuth, 
	createUserWithEmailAndPassword as _createUserWithEmailAndPassword, 
	signInWithEmailAndPassword as _signInWithEmailAndPassword, 
	onAuthStateChanged as _onAuthStateChanged,
	signInAnonymously as _signInAnonymously,
	signOut as _signOut
} from "firebase/auth";
 
const createUserWithEmailAndPassword = async(data) => {
	 try{
   const auth = getAuth();
	return await _createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
  	  return { ok: "user created", data: userCredential.user } 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { error: errorMessage, errorCode: errorCode } 
  })
     }catch(error) {
	  return { error: error }
   }  
}

const signInWithEmailAndPassword = async(data) => {
	 try{
   const auth = getAuth();
  return await _signInWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
  	  // Signed in
  	  return { ok: "signed in", data: userCredential.user } 
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { error: errorMessage, errorCode: errorCode } 
  })
   }catch(error) {
	  return { error: error }
   }  
}

const signInAnonymously = async(data) => {
	try{
  const auth = getAuth();
  return await _signInAnonymously(auth)
  .then(() => {
    // Signed in..
    return { ok: "signed in", data: userCredential.user } 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { error: errorMessage, errorCode: errorCode } 
  });
    }catch(error) {
	  return { error: error }
   }  
}

const signOut = async() => {
		try{
  const auth = getAuth();
  return await _signOut(auth).then(() => {
  	// Signed out..
    return { ok: "signed out" }   
  }).catch((error) => {
     return { error: error } 
  });
    }catch(error) {
	  return { error: error }
   }  
}

const onAuthStateChanged = async(func) => {
	try{
   const auth = getAuth();
	return await _onAuthStateChanged(auth, (user) => {
	  if (user) {	  
	    func({ ok: "signed in", data: user, uid: user.uid })
	  }else {
	    // User is signed out
	    func({ ok: 'signed out' })
	  }
	});
	   }catch(error) {
	  return func({ error: error }) 
   } 
}

export const auth = {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInAnonymously,
	onAuthStateChanged,
	signOut
}
  