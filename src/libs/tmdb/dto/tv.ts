/**
 * TV Show DTOs for TMDB API
 */

import { TMDBGenre, TMDBPaginatedResponse, TMDBProductionCompany, TMDBProductionCountry, TMDBSpokenLanguage } from './common';

/**
 * Basic TV show information returned in list endpoints
 */
export interface TMDBTvShowBasic {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}

/**
 * Season information for TV shows
 */
export interface TMDBSeason {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

/**
 * Episode information
 */
export interface TMDBEpisode {
  air_date: string | null;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number | null;
  season_number: number;
  show_id: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
  crew: TMDBCrewMember[];
  guest_stars: TMDBCastMember[];
}

/**
 * Detailed TV show information
 */
export interface TMDBTvShowDetail extends Omit<TMDBTvShowBasic, 'genre_ids'> {
  adult: boolean;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
  }[];
  episode_run_time: number[];
  genres: TMDBGenre[];
  homepage: string | null;
  in_production: boolean;
  languages: string[];
  last_air_date: string | null;
  last_episode_to_air: TMDBEpisode | null;
  next_episode_to_air: TMDBEpisode | null;
  networks: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: TMDBProductionCompany[];
  production_countries: TMDBProductionCountry[];
  seasons: TMDBSeason[];
  spoken_languages: TMDBSpokenLanguage[];
  status: string;
  tagline: string | null;
  type: string;
}

/**
 * Response for popular, top-rated, airing today TV shows
 */
export type TMDBTvShowListResponse = TMDBPaginatedResponse<TMDBTvShowBasic>;

/**
 * TV show credits response
 */
export interface TMDBTvShowCredits {
  id: number;
  cast: TMDBCastMember[];
  crew: TMDBCrewMember[];
}

/**
 * Cast member information
 */
export interface TMDBCastMember {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  character: string;
  credit_id: string;
  order: number;
}

/**
 * Crew member information
 */
export interface TMDBCrewMember {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}
