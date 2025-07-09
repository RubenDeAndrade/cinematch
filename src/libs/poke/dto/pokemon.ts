import { ExternalResource, Indexable } from "./common";

export interface PokemonEvolution {
    id: number;
};

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: ExternalResource;
};

export interface PokemonType {
    slot: number;
    type: ExternalResource;
}

export interface PokemonSprites extends Indexable {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
};

export interface Pokemon {
    id: number;
    name: string;
    order: number;
    species: ExternalResource;
    sprites: PokemonSprites;
    stats: {
        base_stat: number;
        effort: number;
        stat: ExternalResource;
    }[];
    types: PokemonType[];
    past_types: {
        generation: ExternalResource;
        types: PokemonType[];
    }[];
};