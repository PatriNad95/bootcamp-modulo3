import "./style.css";

export interface MusicalGroup {
  name: string;
  foundationYear: number;
  active: boolean;
  musicalGenre: string;
}

const popRock: MusicalGroup = {
  name: "The Beatles",
  foundationYear: 1960,
  active: true,
  musicalGenre: "🎵 Pop Rock",
};

const rock: MusicalGroup[] = [
  {
    name: "Queen",
    foundationYear: 1970,
    active: false,
    musicalGenre: "🎸 Rock",
  },
  {
    name: "The Rolling Stones",
    foundationYear: 1962,
    active: true,
    musicalGenre: "🎸 Rock",
  },
];

const hardRock: MusicalGroup = {
  name: "AC DC",
  foundationYear: 1973,
  active: true,
  musicalGenre: "🤘 Hard Rock",
};

const classic: MusicalGroup = {
  name: "Ludwig van Beethoven",
  foundationYear: 1770,
  active: false,
  musicalGenre: "🎼 Clásica",
};

const titleStyle: string = "font-weight: bold;color:green; font-size:18px";

console.log(`%c${popRock.name}`, titleStyle);
console.log(`Foundation Year: ${popRock.foundationYear}`);
console.log(`Active: ${popRock.active}`);
console.log(`Musical Genre: ${popRock.musicalGenre}`);

console.log(`%c${rock[0].name}`, titleStyle);
console.log(`Foundation Year: ${rock[0].foundationYear}`);
console.log(`Active: ${rock[0].active}`);
console.log(`Musical Genre: ${rock[0].musicalGenre}`);

console.log(`%c${rock[1].name}`, titleStyle);
console.log(`Foundation Year: ${rock[1].foundationYear}`);
console.log(`Active: ${rock[1].active}`);
console.log(`Musical Genre: ${rock[1].musicalGenre}`);

console.log(`%c${hardRock.name}`, titleStyle);
console.log(`Foundation Year: ${hardRock.foundationYear}`);
console.log(`Active: ${hardRock.active}`);
console.log(`Musical Genre: ${hardRock.musicalGenre}`);

console.log(`%c${classic.name}`, titleStyle);
console.log(`Foundation Year: ${classic.foundationYear}`);
console.log(`Active: ${classic.active}`);
console.log(`Musical Genre: ${classic.musicalGenre}`);
