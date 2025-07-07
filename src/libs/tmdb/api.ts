/**
 * TMDB API client implementation
 */

import { fetchTMDB } from './index';
import type { 
  TMDBMovieCredits, 
  TMDBMovieDetail, 
  TMDBMovieListResponse,
  TMDBTvShowCredits,
  TMDBTvShowDetail,
  TMDBTvShowListResponse
} from './dto';

/**
 * Movie API methods
 */
export const moviesApi = {
  /**
   * Get popular movies
   * @param page - Page number to retrieve (1-indexed)
   */
  getPopular: (page = 1) => 
    fetchTMDB<TMDBMovieListResponse>({
      path: '/movie/popular',
      params: { page }
    }),

  /**
   * Get top rated movies
   * @param page - Page number to retrieve (1-indexed)
   */
  getTopRated: (page = 1) => 
    fetchTMDB<TMDBMovieListResponse>({
      path: '/movie/top_rated',
      params: { page }
    }),

  /**
   * Get now playing movies
   * @param page - Page number to retrieve (1-indexed)
   */
  getNowPlaying: (page = 1) => 
    fetchTMDB<TMDBMovieListResponse>({
      path: '/movie/now_playing',
      params: { page }
    }),

  /**
   * Get upcoming movies
   * @param page - Page number to retrieve (1-indexed)
   */
  getUpcoming: (page = 1) => 
    fetchTMDB<TMDBMovieListResponse>({
      path: '/movie/upcoming',
      params: { page }
    }),

  /**
   * Get movie details by ID
   * @param id - TMDB movie ID
   */
  getById: (id: number) => 
    fetchTMDB<TMDBMovieDetail>({
      path: `/movie/${id}`,
    }),

  /**
   * Get movie credits by ID
   * @param id - TMDB movie ID
   */
  getCredits: (id: number) => 
    fetchTMDB<TMDBMovieCredits>({
      path: `/movie/${id}/credits`,
    }),

  /**
   * Search for movies
   * @param query - Search query
   * @param page - Page number to retrieve (1-indexed)
   */
  search: (query: string, page = 1) => 
    fetchTMDB<TMDBMovieListResponse>({
      path: '/search/movie',
      params: { query, page }
    }),
};

/**
 * TV API methods
 */
export const tvApi = {
  /**
   * Get popular TV shows
   * @param page - Page number to retrieve (1-indexed)
   */
  getPopular: (page = 1) => 
    fetchTMDB<TMDBTvShowListResponse>({
      path: '/tv/popular',
      params: { page }
    }),

  /**
   * Get top rated TV shows
   * @param page - Page number to retrieve (1-indexed)
   */
  getTopRated: (page = 1) => 
    fetchTMDB<TMDBTvShowListResponse>({
      path: '/tv/top_rated',
      params: { page }
    }),

  /**
   * Get TV shows airing today
   * @param page - Page number to retrieve (1-indexed)
   */
  getAiringToday: (page = 1) => 
    fetchTMDB<TMDBTvShowListResponse>({
      path: '/tv/airing_today',
      params: { page }
    }),

  /**
   * Get TV shows on the air
   * @param page - Page number to retrieve (1-indexed)
   */
  getOnTheAir: (page = 1) => 
    fetchTMDB<TMDBTvShowListResponse>({
      path: '/tv/on_the_air',
      params: { page }
    }),

  /**
   * Get TV show details by ID
   * @param id - TMDB TV show ID
   */
  getById: (id: number) => 
    fetchTMDB<TMDBTvShowDetail>({
      path: `/tv/${id}`,
    }),

  /**
   * Get TV show credits by ID
   * @param id - TMDB TV show ID
   */
  getCredits: (id: number) => 
    fetchTMDB<TMDBTvShowCredits>({
      path: `/tv/${id}/credits`,
    }),

  /**
   * Search for TV shows
   * @param query - Search query
   * @param page - Page number to retrieve (1-indexed)
   */
  search: (query: string, page = 1) => 
    fetchTMDB<TMDBTvShowListResponse>({
      path: '/search/tv',
      params: { query, page }
    }),
};

/**
 * Combined API client for TMDB
 */
const tmdbApi = {
  movies: moviesApi,
  tv: tvApi,
};

export default tmdbApi;
