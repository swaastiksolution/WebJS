  function setName (name) {
            this.name = name
            console.log("Called");
            
        }

        function createUser (name, email, pass) {

            setName.call(this, name)
            this.email = email
            this.pass = pass
        }

        const student = new createUser("Kritika", "kritika@gmial.com", "1234")
        const student1 = new createUser("Poonam", "poonam@gmial.com", "123456")
        const student2 = new createUser("muskan", "muskan@gmial.com", "12345")
        console.log(student, student1, student2);
        