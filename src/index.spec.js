"use strict";

const pokemons = require("./index");

describe("Test pokemon utility", () => {
  it("get all", () => {
    expect(pokemons.all()).toEqual([
      "bulbasaur",
      "ivysaur",
      "venusaur",
      "charmander",
      "charmeleon",
      "charizard",
    ]);
  });
});
