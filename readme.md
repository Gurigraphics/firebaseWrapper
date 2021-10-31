# FirebaseWrapper

FirebaseWrapper is a wrapper/helper to Firebase.

In this lib the methods always return {ok: ok} or {error: error, fn: "funcName"} like elixir and go.

Size: 548kb

### Get start

```html
<script type="module" crossorigin src="dist/firebaseWrapper.js"></script>
```

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyCDBeW2oeD-zzzzzzzzzzzzzzzzzzzz",
    authDomain: "zzzzzzzzzz.firebaseapp.com",
    databaseURL: "https://zzzzzzzzz.firebaseio.com",
    projectId: "zzzzzzzz",
    storageBucket: "zzzzzzz.appspot.com",
    messagingSenderId: "881609zzzzzzzz",
    appId: "1:881609zzzzzzz:web:aaf4d12764fczzzzzzzzzzz"
}; 

//start
var start = await database.start( firebaseConfig )
console.log(start)

//update data
var updateData = await database.update({
   ref: "database",
   obj: { data: 6 }
})
console.log(updateData)

//get data
var getData = await database.once("database")
console.log(getData)


//or use THEN
var getDataThen = database.once("database").then(function(value){
   console.log(getDataThen)
})

```

## Methods

### Database

#### start
```javascript
/**
 * start
 * @returns {Object} - { ok: "start" } | { error: error, fn: "start" }
 */
var start = database.start().then(function(data){
   if(data.ok){

   }else{

   }
})
```

#### getKey
```javascript
/**
 * getKey
 * @param {string} ref - database url
 * @returns {Object} - {ok: '-MnAo-WjISLyLV8vNwi8'} | {error: 'Error: child failed(...)', fn: "getKey"}
 */
var ref = "database"
var getRefKey = database.getKey(ref).then(function(data){
   if(data.ok){

   }else{

   }
})
```
#### update
```javascript
/**
 * update
 * @param {string} ref - database url
 * @param {Object} obj - a object
 * @returns {Object} - {ok: 'update'} | {error: error, fn: "update"}
 */
var ref = "database"
var obj = { data: 5 }
var updateData = database.update(ref, obj).then(function(value){
   if(data.ok){

   }else{

   }
})
 ```

#### set
```javascript
/**
 * set
 * @param {string} ref - database url
 * @param {Object} obj - a object
 * @returns {Object} - {ok: 'set'} | {error: error, fn: "set"}
 */
var ref = "database"
var obj = { data: 5 }
var updateData = database.set(ref, obj).then(function(value){
   if(data.ok){

   }else{

   }
})
 ```

#### once
```javascript
/**
 * once
 * @param {string} ref - database url
 * @returns {Object} - {ok: value} | {error: error, fn: "once"}
 */
var ref = "database"
var getData = database.once(ref).then(function(value){
   if(data.ok){

   }else{

   }
})
```

#### on
```javascript
/**
 * on
 * @param {string} ref - database url
 * @param {Function} data - updated always data change
 * @returns {Object} - {ok: value} | {error: error, fn: "on"}
 */
var ref = "database"
var observerData = database.on(ref, changed => {
   if(changed.ok){

   }else{

   }
})
```

#### off
```javascript
/**
 * off
 * @param {string} ref - database url
 * @returns {Object} - {ok: "off"} | {error: error, fn: "off"}
 */
var ref = "database"
var observerData = database.off(ref).then(function(data){
   if(data.ok){

   }else{

   }
})

```

#### remove
```javascript
/**
 * remove
 * @param {string} ref - database url
 * @returns {Object} - {ok: "remove"} | {error: error, fn: "remove"}
 */
var ref = "database"
var removeData = database.remove(ref).then(function(data){
   if(data.ok){

   }else{

   }
})
```

#### onDisconnectUpdate
```javascript
/**
 * onDisconnectUpdate
 * @param {string} ref - database url
 * @param {Object} obj - a object
 * @returns {Object} - {ok: "onDisconnectUpdate"} | { error: error, fn: "onDisconnectUpdate" } 
 */
var ref = "database"
var obj = { data: 5 }
var updateData = database.onDisconnectUpdate(ref, obj).then(function(value){
   if(data.ok){

   }else{

   }
})
 ```

#### onDisconnectRemove
```javascript
/**
 * onDisconnectRemove
 * @param {string} ref - database url
 * @returns {Object} - {ok: "onDisconnectRemove"} | { error: error, fn: "onDisconnectRemove" } 
 */
var ref = "database"
var updateData = database.onDisconnectRemove(ref).then(function(value){
   if(data.ok){

   }else{

   }
})
 ```

#### onDisconnectCancel
```javascript
/**
 * onDisconnectCancel
 * @param {string} ref - database url
 * @returns {Object} - {ok: "onDisconnectCancel"} | { error: error, fn: "onDisconnectCancel" } 
 */
var ref = "database"
var updateData = database.onDisconnectCancel(ref).then(function(value){
   if(data.ok){

   }else{

   }
})
 ```

#### connect
```javascript
/**
 * connect
 * @param {string} ref - database url
 * @param {Function} data - updated always connect change
 * @returns {Object} - {ok: "connect"} | {ok: "disconnected"} | { error: error, fn: "connect" } 
 */
var ref = "database"
var observerData = database.connect(ref, data => {
   if(data.ok == "connected"){

   }else if(data.ok == "disconnected"){

   }else{

   }
})
 ```

#### inc
```javascript
/**
 * inc
 * @param {string} ref - database url
 * @param {string} param - a object param
 * @returns {Object} - {ok: "inc"} | {error: error, fn: "inc"}
 */
var ref = "database"
var param = "score"
var updateData = database.inc(ref, param).then(function(value){
   if(data.ok){

   }else{

   }
})
 ```
  
#### dec
```javascript
/**
 * dec
 * @param {string} ref - database url
 * @param {string} param - a object param
 * @returns {Object} - {ok: "dec"} | {error: error, fn: "dec"}
 */
var ref = "database"
var param = "score"
var updateData = database.dec(ref, param).then(function(value){
   if(data.ok){

   }else{

   }
})
 ```


### Auth
 
#### signInAnonymously
```javascript
/**
 * signInAnonymously
 * @returns {Object} - { ok: "signInAnonymously", data: userCredential.user } | { error: error, fn: "signInAnonymously" }
 */
var loginAnonymously = auth.signInAnonymously().then(function(value){
   if(data.ok){

   }else{

   }
})
```

#### signOut
```javascript
/**
 * start
 * @returns {Object} - { ok: "signOut" } | { error: error, fn: "signOut" }
 */
var logout = auth.signOut().then(function(value){
   if(data.ok){

   }else{

   }
})
```

#### createUserWithEmailAndPassword
```javascript
/**
 * createUserWithEmailAndPassword
 * @param {string} email  
 * @param {string} password 
 * @returns {Object} - { ok: "createUserWithEmailAndPassword" } | { error: error, fn: "createUserWithEmailAndPassword" }
 */
var email = "user@email.com"
var password = "password123456"
var login = auth.createUserWithEmailAndPassword(user, password).then(function(value){
   if(data.ok){

   }else{

   }
})
```

#### signInWithEmailAndPassword
```javascript
/**
 * signInWithEmailAndPassword
 * @param {string} email  
 * @param {string} password 
 * @returns {Object} - { ok: "signInWithEmailAndPassword", data: userCredential.user } | { error: error, fn: "signInWithEmailAndPassword" }
 */
var email = "user@email.com"
var password = "password123456"
var login = auth.signInWithEmailAndPassword(user, password).then(function(value){
   if(data.ok){

   }else{

   }
})
```

#### onAuthStateChanged
```javascript
/**
 * onAuthStateChanged
 * @param {Function} data - execute always auth change
 * @returns {Object} - { ok: "signed in", data: user } | { ok: 'signed out' } | { error: error, fn: "onAuthStateChanged" }
 */
var observerAuthChanged = auth.onAuthStateChanged(changed => {
   if(changed.ok){

   }else{

   }
})
```

### How update

### Install
```
git clone https://github.com/Gurigraphics/firebaseWrapper
cd firebaseWrapper
npm install
```
To Development run
```
npm run dev
```

To Build run
```
npm run build
```

### Generate Docs

To generate docs
```
npm run doc
```


### License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) Gurigraphics, 2021.
