import Bowerman from "./classes/character/Bowman";
import Swordsman from "./classes/character/Swordsman";
import Magician from "./classes/character/Magician";

import Daemon from "./classes/character/Daemon";
import Undead from "./classes/character/Undead";
import Zombie from "./classes/character/Zombie";
import Team from "./classes/Team";

const bowerman = new Bowerman("Kris");
const magician = new Magician("Merlin");
const swordsman = new Swordsman("Artur");

const daemon = new Daemon("Baelzebuth");
const undead = new Undead("Frankenstein");
const zombie = new Zombie("Stub");

let teamOfLight = new Team();
let teamOfDark  = new Team();

teamOfLight.add(bowerman);
teamOfLight.add(magician);
teamOfLight.add(swordsman);
console.log("Team of light: ");
console.log(teamOfLight);

teamOfDark.addAll([daemon, undead, zombie]);

const iterator = teamOfLight[Symbol.iterator]();
console.log("Iterations of the light team: ");
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log("Characters of the dark team: ");
for (const character of teamOfDark) {
    console.log(character);
}