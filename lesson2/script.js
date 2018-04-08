var obj = {
    "first_name": "Albert",
    "last_name": "Ter-Ananyan",
    "age": "16",
    "tumo_student": true,
    sayHello() {
        console.log(this.first_name);
    }

}
console.log(obj);
obj.sayHello();