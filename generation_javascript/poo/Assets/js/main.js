class Person {
    #id = 0;
    static #contador = 0;
    #firstName = 'Alberto';
    #age = 0;
    #email = '';

    constructor(firstName, age, email, id) {
        this.#firstName = firstName;
        this.#age = age;
        this.#email = email;
        this.#id = ++Person.#contador;
    }

    get getFirstName() {
        return this.#firstName;
    }

    set setFirstName(firstName) {
        this.#firstName = firstName;
    }

    get getEmail() {
        return this.#email;
    }

    set setEmail(email) {
        this.#email = email;
    }

    get getAge() {
        return this.#age;
    }

    set setAge(age) {
        this.#age = age;
    }

    saludar() {
        let message = `Hello my name is ${this.#firstName}`;
        return message;
    }

    mostrarContador() {
        return Person.#contador;
    }
}


const personaUno = new Person('Ulises', 23, 'ulises@gmaail.com');
const personaDos = new Person('Elises', 23, 'elises@gmaail.com');
/* personaUno.setFirstName = 'Roman';
personaUno.setEmail = 'roman@gmail.com';
personaUno.setAge = 24;

console.log(personaUno)
console.log(personaUno.getFirstName);
console.log(personaUno.getEmail);
console.log(personaUno.getAge);

console.log(personaUno.saludar()); */
console.log(personaUno)
console.log(personaUno.mostrarContador());

console.log(personaDos)
console.log(personaDos.mostrarContador());