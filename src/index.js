import uniqueRandomArray from "unique-random-array";
import { pokemons as allNames } from "./pokemons-names.js";

const pokemons = {
  all: allNames,
  random: uniqueRandomArray(allNames),
};

export { pokemons };
