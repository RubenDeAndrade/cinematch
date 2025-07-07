# TMDB API Client

This directory contains a TypeScript client library for The Movie Database (TMDB) API.

## Structure

- `index.ts` - Core fetch function for making requests to TMDB API
- `api.ts` - Higher-level API methods for movies and TV shows
- `/dto` - Data Transfer Objects (type definitions) for TMDB API responses

## Usage

### Import the API client

```typescript
import tmdbApi from '~/lib/tmdb/api';
```

### Movies API

```typescript
// Get popular movies (page 1)
const popularMovies = await tmdbApi.movies.getPopular();

// Get movie details by ID
const movieDetails = await tmdbApi.movies.getById(123);

// Search for movies
const searchResults = await tmdbApi.movies.search('matrix', 1);
```

### TV Shows API

```typescript
// Get popular TV shows (page 1)
const popularShows = await tmdbApi.tv.getPopular();

// Get TV show details by ID
const showDetails = await tmdbApi.tv.getById(456);

// Search for TV shows
const searchResults = await tmdbApi.tv.search('office', 1);
```

### Raw Fetch API

If you need to access endpoints not covered by the high-level API:

```typescript
import { fetchTMDB } from '~/lib/tmdb';

// Custom API call
const data = await fetchTMDB({
  path: '/custom/endpoint',
  params: { custom: 'param' }
});
```

## Environment Variables

The TMDB client requires two environment variables:
- `TMDB_API_URL` - The base URL for the TMDB API (usually https://api.themoviedb.org/3)
- `TMDB_API_KEY` - Your TMDB API key

## tRPC Integration

The TMDB API is integrated with tRPC in `src/server/routers/tmdb.ts`, allowing you to access TMDB data through typesafe APIs on the client.

Example usage in a component:

```tsx
import { api } from '~/utils/trpc';

// In a React component:
const { data, isLoading } = api.tmdb.getPopularMovies.useQuery({ page: 1 });
```
