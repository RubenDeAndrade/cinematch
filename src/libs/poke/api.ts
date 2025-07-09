/**
 * Poke API Implementation
 */
import { fetchPOKE } from ".";
import { Pokemon } from "./dto/pokemon";

/**
 * API Methods
 */
export const pokemonApi = {
    /**
     * Get Pokemon By ID
     * @param id Id of the pokemon
     * @returns The Pokemon
     */
    getPokeById: (id: number) => 
        fetchPOKE<Pokemon>({
            path: `/api/v2/pokemon/${id}`,
        }),
};

const pokeApi = {
    pokemon: pokemonApi,
}

export default pokeApi;