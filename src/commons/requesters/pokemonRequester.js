import { axios } from "../plugins";

class PokemonRequester {
  async findAll() {
    const query = "pokemon?limit=151&offset=0'";
    const { data: pokemons } = await axios.get(query);
    return pokemons;
  }
  async findByIdOrName(query) {
    const { data: pokemon } = await axios.get(`/pokemon/${query}`);
    return pokemon;
  }
}

export default new PokemonRequester();
