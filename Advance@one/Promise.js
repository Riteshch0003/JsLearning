const promiseOne=new Promise(function(resolve,reject){
    // do async tasks
    // db calls,crypto,networkcall
    setTimeout(function(){
console.log('Async task is completed');
resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task Two");
        resolve()
    },1000)
    
}).then(function(){
    console.log("Async two resolved");
    
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({$username:"Coffee",email:"coffee@gmail.com"})
    },1000)
})
    promiseThree.then(function(user){

   console.log(user);   
})
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({$username:"ritesh",password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
        
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
console.log(username);

}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("The promise is either rsolved or rejected"))

const  promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({$username:"Javascript",password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
        
    },1000)
})
async function consumePromiseFive(){
   try {
    const response=await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
    
}
consumePromiseFive()