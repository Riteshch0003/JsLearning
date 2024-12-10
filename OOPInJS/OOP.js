const user={
    username:"Ritesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got User Details from database");
        // console.log(`Username:${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn
    return this
}

// empty object create
// constructor func call
// this arguement inject
// refrence
const userOne=new User("Ritesh",12,true)
const userTwo=new User("Softobiz",11,false)

console.log(userOne);

