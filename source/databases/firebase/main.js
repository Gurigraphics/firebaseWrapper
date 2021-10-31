import { initializeApp } from "firebase/app";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { getAuth, connectAuthEmulator } from "firebase/auth";
  
var db, app
const getDb = () => db

export const start = async (firebaseConfig, emulator) => { 
  try{ 
    app = initializeApp(firebaseConfig);
    db = getDatabase(app);

    if(location.hostname === "localhost" && emulator && emulator.database) {
      // Point to the RTDB emulator running on localhost.
      connectDatabaseEmulator(db, "localhost", emulator.database);
    } 

    if(location.hostname === "localhost" && emulator && emulator.auth) {
      // Point to the RTDB emulator running on localhost.
      const auth = getAuth();
      connectAuthEmulator(auth, `http://localhost:${emulator.auth}`);
    } 

    return { ok: "start" } 
    
  }catch(error){
    return { error: error } 
  }
};

export var db = getDb()
 