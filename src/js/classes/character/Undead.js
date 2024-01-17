import Character from "./Character";

export default class Undead extends Character {
    constructor(name) {
        super(name, "Undead");
        this.atack = 25;
        this.defence = 25;
    }
}