import uniqueRandomArray from "unique-random-array";
import { pokemons } from "./pokemons-names.js";

const results = {
  all: pokemons,
  random: uniqueRandomArray(pokemons),
};

export { results };
