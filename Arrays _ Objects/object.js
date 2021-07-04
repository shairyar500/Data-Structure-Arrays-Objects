
let user = {
    name: 'shairyar',
    email: 'abc.com',
    age: 27,
    dob: 1993
};

console.log(user.name);

user.location = "karachi"
console.log(user)

user.location = "new York"
console.log(user);

delete user.location;
console.log(user);

// console.log([key]+": "+user☻[key]);
for (let key in user) {
    if(user === 'age'){
        console.log("true")
    }else{
        console.log("false")
    }
}


let userObject = {
    userName: "Philip",
	fatherName: "Norman",
	className: "four",
};

console.log(userObject);

userObject.userName = "Shairyar"
userObject.fatherName = "Shamshad Ali"
userObject.className = "Tech karo"

console.log(userObject);

// console.log([key]+": "+userObject[key]);

let books = [
    {
        name: "The Lean Startup",
        topics: ["entrepreneurship",'startups'],
    },
    {
        name: "War and Peace",
        topics: ["peace", "politics"],
    }];

console.log(books[0]);
console.log(books[1]);