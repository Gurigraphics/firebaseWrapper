import { db, start } from "./main" 
import { 
	ref, 
	set as _set, 
	get as _get, 
	child, 
	onValue, 
	update as _update, 
	push, 
	off as _off, 
	remove as _remove,
	onDisconnect as _onDisconnect,
	runTransaction
} from "firebase/database"; 

const getKey = async url => {
	try{
	    var data = await push(child(ref(db), url))
	    return { ok: data.key }
	}catch(error) {
	    return { error: error, fn: "getKey" }
	}  
}

const update = async(url, obj) => {   
 try{

  return await _update(ref(db, url), obj).then(() => {	
	   return { ok: "update" }
  }).catch((error) => {
	   return { error: error, fn: "update" }
  }) 
    }catch(error){
    return { error: error, fn: "update" } 
  }  
} 
 
const set = async(url, obj) => {
   try{
	return await _set(ref(db, url), obj).then(() => {	
	   return { ok: "set" }
	}).catch((error) => {
	   return { error: error, fn: "set" }
	}) 
  }catch(error){
    return { error: error, fn: "set" } 
  } 
}

const get = async(url) => { 
	try{ 
   return await _get( ref(db, url) ).then((snapshot) => {
	  if( snapshot.exists() ) return { ok: snapshot.val() }
	  else return { error: "No exists", fn: "get" }

	}).catch((error) => {
	   return { error: error, fn: "get" }
	})  
  }catch(error){
    return { error: error, fn: "get" } 
  }
}
 
const on = async(url, func) => {
   try{
	   var x = await onValue( ref(db, url), (snapshot) => {
		  const data = snapshot.val();
	  	  if( snapshot.exists() ) return func({ ok: data })
	      else return { error: "No exists", fn: "get" }
		}) 

	}catch(error) {
	    return func({ error: error, fn: "on" }) 
	}   
}

const off = async(url) => {
   try{

    _off( ref(db, url) ) 
	  return { ok: "off"}	  

   }catch(error) {
	  return func({ error: error, fn: "off" }) 
   }   
}
 
const remove = async(url) => {
 try{
	return await _remove( ref(db, url) ).then(() => {	
	   return { ok: "remove" }
	}).catch((error) => {
	   return { error: error, fn: "remove" }
	})  
	   }catch(error) {
	  return func({ error: error, fn: "remove" }) 
   }  
} 

const onDisconnectUpdate = async(url, obj) => {   
 try{

 	  const presenceRef = ref(db, url); 
    _onDisconnect(presenceRef).update(obj);

	  return {ok: "onDisconnectUpdate"}

  }catch(error){
    return { error: error, fn: "onDisconnectUpdate" } 
  }  
} 

const onDisconnectRemove = async(url) => {   
 try{

 	  const presenceRef = ref(db, url); 
 	  _onDisconnect(presenceRef).remove().catch((error) => {
		  if (error) {
		    return { error: error, fn: "onDisconnectRemove" } 
		  }
		});

	  return {ok: "onDisconnectRemove"}

  }catch(error){
    return { error: error, fn: "onDisconnectRemove" } 
  }  
}  

const onDisconnectCancel = async(url) => {   
 try{

 	  const presenceRef = ref(db, url)
 	  _onDisconnect(presenceRef).cancel()

	  return { ok: "onDisconnectCancel" }

  }catch(error){
    return { error: error, fn: "onDisconnectCancel" } 
  }  
}  
 
const connect = async(func) => {   
 try{

 	  const connectedRef = ref(db, ".info/connected");
		onValue(connectedRef, (snap) => {
		  if (snap.val() === true) {
		    return func({ ok: "connected" })
		  } else {
		  	return func({ ok: "disconnected" })		    
		  }
		})

  }catch(error){
    return { error: error, fn: "connect" } 
  }  
}  
 
const inc = async(url, param) => {	
 	try {
	  const postRef = ref(db, url);

	  await runTransaction(postRef, (post) => {
	    if (post && post[param]) {
	        post[param]++   
	    }else if (post) {       
	        post[param] = 1      
	    }
	    return post;
	  })

	  return { ok: "inc"} 
	} catch (error) {	 
	  return { error: error, fn: "inc" } 
	}
} 

const dec = async(url, param) => {	
 	try {
	  const postRef = ref(db, url);

	  await runTransaction(postRef, (post) => {
	    if (post && post[param]) {
	        post[param]--   
	    }else if (post) {       
	        post[param] = 0     
	    }
	    return post;
	  })

	  return { ok: "dec"} 
	} catch (error) {	 
	  return { error: error, fn: "dec" } 
	}
}  
 
export const database = {
	getKey,
	update,
	set,
	get,
	on,
	off,
	remove,
	start,
	onDisconnectUpdate,
	onDisconnectRemove,
	connect,
	inc,
	dec
}
 
