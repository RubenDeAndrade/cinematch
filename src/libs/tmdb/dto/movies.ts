/**
 * Movie DTOs for TMDB API
 */

import { TMDBGenre, TMDBPaginatedResponse, TMDBProductionCompany, TMDBProductionCountry, TMDBSpokenLanguage } from './common';

/**
 * Basic movie information returned in list endpoints
 */
export interface TMDBMovieBasic {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

/**
 * Detailed movie information returned by single movie endpoint
 */
export interface TMDBMovieDetail extends Omit<TMDBMovieBasic, 'genre_ids'> {
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres: TMDBGenre[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: TMDBProductionCompany[];
  production_countries: TMDBProductionCountry[];
  revenue: number;
  runtime: number | null;
  spoken_languages: TMDBSpokenLanguage[];
  status: string;
  tagline: string | null;
}

/**
 * Response for popular, top-rated, upcoming, and now playing movies
 */
export type TMDBMovieListResponse = TMDBPaginatedResponse<TMDBMovieBasic>;

/**
 * Movie credits response
 */
export interface TMDBMovieCredits {
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
  cast_id: number;
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
