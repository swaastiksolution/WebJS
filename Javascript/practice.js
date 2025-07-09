//   function setName (name) {
//             this.name = name
//             console.log("Called");

//         }

//     function createUser (name, email, pass) {

//         setName.call(this, name)
//         this.email = email
//         this.pass = pass
//     }

//     const student = new createUser("Kritika", "kritika@gmial.com", "1234")
//     const student1 = new createUser("Poonam", "poonam@gmial.com", "123456")
//     const student2 = new createUser("muskan", "muskan@gmial.com", "12345")
//     console.log(student, student1, student2);


// const user = {
//     name : 'Muskan',
//     email: 'muskan@gmail.com',

//     message: function() {
//         console.log(`${this.name} , welcome to the chat`);   
//     }
// }
// user.message();

const user = {
  username: 'muskan',
  price: 1000,

  message: function () {
    console.log(`${this.username} , welcome to this site`);
    console.log(`${this}`);
  }
}
user.message()
user.username = 'Ram'
user.message()


class intern {
  constructor(name, email, pass) {
    this.name = name
    this.email = email
    this.pass = pass
  }

  encryptPass() {
    console.log(`${this.pass} 123`);
  }

  changeUserName() {
    console.log(`${this.name.toUpperCase()}`);
  }
}

const name = new intern("Muskan", "muskan@gmail.com", "abc")
console.log(name.encryptPass());
console.log(name.changeUserName());


// Not recommended to use this way
// class intern {
//   constructor(name, email, pass) {
//     this.name = name
//     this.email = email
//     this.pass = pass
//   }
// }
// intern.prototype.encryptPass = function () {
//   console.log(`${this.pass} abc`);
// }

// intern.prototype.changeUserName = function () {
//   console.log(`${this.name.toUpperCase()}`); 
// }

// const a = new intern("Muskan", "muskan@gmail.com", "123")
// console.log(a.encryptPass());
// console.log(a.changeUserName());

