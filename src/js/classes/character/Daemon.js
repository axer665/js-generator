import Character from "./Character";

export default class Daemon extends Character {
    constructor(name) {
        super(name, "Daemon");
        this.atack = 10;
        this.defence = 40;
    }
}