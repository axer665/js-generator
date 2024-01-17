import Character from "./character/Character";

export default class Team {
    constructor() {
        this.characters = new Set();
    }

    add(character) {
        this.checkCharacter(character);
        return this.characters.add(character);
    }

    addAll(arr) {
        for (const character of arr) {
            this.checkCharacter(character);
        }
        this.characters = new Set([...this.characters, ...arr]);
        return this.characters;
    }

    toArray() {
        return [...this.characters];
    }

    // Generator
    *[Symbol.iterator]() {
        const data = this.toArray();

        for (let i = 0; i < data.length; i++) {
            yield data[i];
        }
    }

    // Checker
    checkCharacter(character) {
        if (this.characters.has(character)) {
            throw new Error("This character is already on the team");
        }
        if ((character instanceof Character) === false) {
            throw new Error("\"Character\" is not an instance of the class Character");
        }
    }
}