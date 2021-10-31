/**
 * A namespace.
 * @namespace database
 */

 /**
 * getKey
 * @function
 * @memberof database
 * @name getKey 
 * @param {string} ref - The title of the book.
 * @param {string} author - The author of the book.
 * @returns {Object} - {ok: '-MnAo-WjISLyLV8vNwi8'} | {error: 'Error: child failed(...)', fn: "getKey"}
 * @example
//******************************************************
var ref = "database"
var getRefKey = database.getKey(ref).then(function(data){
   if(data.ok){

   }else{

   }
})
//******************************************************
*/
function getKey(ref){}


/**
 * start
 * @function
 * @memberof database
 * @name start 
 * @returns {Object} - { ok: "start" } | { error: error, fn: "start" }
 * @example
//******************************************************
var start = database.start().then(function(data){
   if(data.ok){

   }else{

   }
})
//******************************************************
*/
function start(){}


/**
 * update
 * @function
 * @memberof database
 * @param {string} ref - database url
 * @param {Object} obj - a object
 * @returns {Object} - {ok: 'update'} | {error: error, fn: "update"}
 * @example
//******************************************************
var ref = "database"
var obj = { data: 5 }
var updateData = database.update(ref, obj).then(function(value){
   if(data.ok){

   }else{

   }
})
//******************************************************
*/
function update(ref, obj){}
 
 




/**
 * A namespace.
 * @namespace auth
 */


/**
 * update
 * @function
 * @memberof auth
 * @returns {Object} - { ok: "signInAnonymously", data: userCredential.user } | { error: error, fn: "signInAnonymously" }
 * @example
//******************************************************
var loginAnonymously = auth.signInAnonymously().then(function(value){
   if(data.ok){

   }else{

   }
})
//******************************************************
*/
function signInAnonymously(){}

 
 