import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
  
var db, app
const getDb = () => db

export const start = async (firebaseConfig) => { 
  try{ 
    app = initializeApp(firebaseConfig);
    db = getDatabase(app);
    return { ok: "firebase started" } 
  }catch(error){
    return { error: error } 
  }
};

export var db = getDb()
 