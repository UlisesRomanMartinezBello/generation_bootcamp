class Pokemon {
    #name = '';
    #age = 0;
    #evolution = '';

    constructor(name, age, evolution) {
        this.#name = name;
        this.#age = age;
        this.#evolution = evolution;
    }

    get getNamePokemon() {
        
    }

    attack() {
        return console.log(`${this.#name} is attacking`);
    }

    evolve() {
        let message = '';

        if (this.#evolution === '') {
            message = 'I cant evolve';
            console.log(message);
        } else {
            message = `${this.#name} has evolved ${this.#evolution}`;
            this.#name = this.#evolution;
            console.log(message);
        }
    }
}

/* const charmander = new Pokemon('Charmander', 2, 'Charmaleon', 'electric');
console.log(charmander);

const bulbasaur = new Pokemon('bulbasaur', 1, 'Ivisaur', 'fire');
bulbasaur.attack();
bulbasaur.evolve(); */


class typeFire extends Pokemon {
    #type = '';
    constructor(name, age, evolution) {
        super(name, age, evolution);
        this.#type = 'Fire';
    }

    attack() {
        return console.log(`${super.name} is attacking`);
    }
}

const charmander = new typeFire('Charmander', 2, 'Charmaleon');
charmander.attack();
console.log(charmander);