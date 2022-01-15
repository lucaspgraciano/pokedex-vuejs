import { axios } from "../plugins";

class PokemonRequester {
  async findAll() {
    const query = "pokemon?limit=151&offset=0'";
    const { data: pokemons } = await axios.get(query);
    return pokemons.results;
  }
  async findByIdOrName(nameOrId) {
    const { data: pokemon } = await axios.get(`/pokemon/${nameOrId}`);
    return pokemon;
  }
}

export default new PokemonRequester();
