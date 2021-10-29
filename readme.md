# FirebaseWrapper

FirebaseWrapper is a wrapper/helper to Firebase.

In this lib the methods always return {ok: ok} or {error: error} like elixir and go.

Size: 531kb

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

```javascript
/*
Return: { ok: "firebase started" } 
Return: {error: error}
*/
var observerDataOff = database.start().then(function(data){
   console.log("started")
   console.log(data)
})
```

```javascript
/*
Return: {ok: '-MnAo-WjISLyLV8vNwi8'}
Return: {error: 'Error: child failed(...)'}
*/
var getRefKey = database.getKey("database").then(function(value){
   console.log(value)
})
```

```javascript
/*
Return: {ok: 'Data updated'}
Return: {error: error}
*/
var updateData = database.update({
   ref: "database",
   obj: { data: 5 }
}).then(function(value){
   console.log(value)
})
 ```

```javascript
/*
Return: {ok: 'Data setted'}
Return: {error: error}
*/
var setData = database.set({
   ref: "database",
   obj: { data: 6 }
}).then(function(value){
   console.log(value)
})
```

```javascript
/*
Return: {ok: value}
Return: {ok: "No data"}
Return: {error: error}
*/
var getData = database.once("database").then(function(value){
   console.log(value)
})
```

```javascript
/*
Return: {ok: value}
Return: {ok: "No data"}
Return: {error: error}
*/
var observerData = database.on('database', changed => {

   console.log("atualizou")
   console.log(changed)
})
```

```javascript
/*
Return: {ok: "Data removed"}
Return: {error: error}
*/
var removeData = database.remove('database/data').then(function(data){

   console.log("removeu")
   console.log(data)
})
```

```javascript
/*
Return: {ok: "off"}
Return: {error: error}
*/
var observerDataOff = database.off('database').then(function(data){
   console.log("desligou")
   console.log(data)
})
```


### Auth
 
```javascript
/*
Return: { ok: "signed in", data: userCredential.user } 
Return: { error: errorMessage, errorCode: errorCode }   
*/
var loginAnonymously = auth.signInAnonymously().then(function(value){
   console.log(value)
})
```

```javascript
/*
Return: { ok: "signed out" } 
Return: { error: error }  
*/
var logout = auth.signOut().then(function(value){
   console.log(value)
})
```

```javascript
/*
Return: { ok: "user created", data: userCredential.user } 
Return: { error: errorMessage, errorCode: errorCode } 
*/
var login = auth.createUserWithEmailAndPassword({
   email: "user2@email.com",
   password: "senha123"
}).then(function(value){
   console.log(value)
  // firebase.signOut() 
})
```

```javascript
/*
Return: { ok: "signed in", data: userCredential.user } 
Return: { error: errorMessage, errorCode: errorCode } 
*/
var login = auth.signInWithEmailAndPassword({
   email: "user2@email.com",
   password: "senha123"
}).then(function(value){
   console.log(value)
  // firebase.signOut() 
})
```

```javascript
/*
Return: { ok: "signed in", data: user, uid: user.uid }
Return: { ok: 'signed out' }
*/
var observerAuthChanged = auth.onAuthStateChanged(changed => {
   console.log("onAuthStateChanged")
   console.log(changed)
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


### License

 [MIT](http://opensource.org/licenses/MIT)

Copyright (c) Gurigraphics, 2021.
