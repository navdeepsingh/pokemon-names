import { pokemons } from "./index";

describe("Pokemon names utility", () => {
  it("should have list of all available names", () => {
    expect(pokemons.all).toEqual([
      "bulbasaur",
      "ivysaur",
      "venusaur",
      "charmander",
      "charmeleon",
      "charizard",
    ]);
  });

  it("should have list of random name", () => {
    const random = pokemons.random();
    expect(random).toEqual(random);
  });
});
