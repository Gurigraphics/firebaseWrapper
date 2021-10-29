import { db, start } from "./main" 
import { 
	ref, 
	set as _set, 
	get, child, 
	onValue, 
	update as _update, 
	push, 
	off as _off, 
	remove as _remove 
} from "firebase/database"; 

const getKey = async url => {
	try{
	    var data = await push(child(ref(db), url))
	    return { ok: data.key }
	}catch(error) {
	    return { error: error }
	}  
}

const update = async(data) => {   
 try{
  const updates = {};
  updates[data.ref] = data.obj;

  return await _update(ref(db), updates).then(() => {	
	   return { ok: "Data updated" }
  }).catch((error) => {
	   return { error: error }
  }) 
    }catch(error){
    return { error: error } 
  }  
} 
 
const set = async(data) => {
   try{
	return await _set(ref(db, data.ref), data.obj).then(() => {	
	   return { ok: "Data setted" }
	}).catch((error) => {
	   return { error: error }
	}) 
  }catch(error){
    return { error: error } 
  } 
}

const once = async(url) => { 
	try{ 
   return await get( ref(db, url) ).then((snapshot) => {
	  if( snapshot.exists() ) return { ok: snapshot.val() }
	  else return { ok: "No data" }

	}).catch((error) => {
	   return { error: error }
	})  
  }catch(error){
    return { error: error } 
  }
}
 
const on = async(url, func) => {
   try{
	   var x = await onValue( ref(db, url), (snapshot) => {
		  const data = snapshot.val();
	  	  if( snapshot.exists() ) return func({ ok: data })
	     else return func({ ok: "No data" }) 
		}) 

	}catch(error) {
	    return func({ error: error }) 
	}   
}

const off = async(url) => {
   try{

    _off( ref(db, url) ) 
	  return { ok: "off"}	  

   }catch(error) {
	  return func({ error: error }) 
   }   
}
 
const remove = async(url) => {
 try{
	return await _remove( ref(db, url) ).then(() => {	
	   return { ok: "Data removed" }
	}).catch((error) => {
	   return { error: error }
	})  
	   }catch(error) {
	  return func({ error: error }) 
   }  
}
 
export const database = {
	getKey,
	update,
	set,
	once,
	on,
	off,
	remove,
	start
}
