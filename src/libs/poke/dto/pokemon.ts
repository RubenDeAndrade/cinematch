import { ExternalResource } from "./common";

export interface PokemonEvolution {
    id: number;
    
};

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: ExternalResource;
};

export interface Pokemon {
    id: number;
    name: string;
    order: number;
    species: ExternalResource;
    sprites: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
    stats: {
        base_stat: number;
        effort: number;
        stat: ExternalResource;
    }[];
    types: {
        slot: number;
        type: ExternalResource;
    }
};
