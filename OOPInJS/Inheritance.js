class User{
    constructor(username){
this.username=username
    }


    logME(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}

const student=new Teacher("student","student@teacher.com","123")
student.addCourse()

const  seniorstudent=new User("seniorstudent")