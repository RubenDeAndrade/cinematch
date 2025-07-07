/**
 * Base DTO types for TMDB API
 */

/**
 * Common pagination response from TMDB API
 */
export interface TMDBPaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

/**
 * Basic image configuration
 */
export interface TMDBImage {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

/**
 * Common genre information
 */
export interface TMDBGenre {
  id: number;
  name: string;
}

/**
 * Common production company information
 */
export interface TMDBProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

/**
 * Common production country information
 */
export interface TMDBProductionCountry {
  iso_3166_1: string;
  name: string;
}

/**
 * Common spoken language information
 */
export interface TMDBSpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

/**
 * Common error response
 */
export interface TMDBErrorResponse {
  status_message: string;
  status_code: number;
}
