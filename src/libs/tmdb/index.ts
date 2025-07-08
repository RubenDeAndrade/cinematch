import { env } from '~/server/env';

interface TMDBRequestOptions {
  path: string;
  params?: Record<string, string | number | boolean>;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
}

const TMDB_API_URL = env.TMDB_API_URL;
const TMDB_API_KEY = env.TMDB_API_KEY;

/**
 * Generic fetch function for TMDB API
 * @param options - Request options
 * @returns The response data
 */
export async function fetchTMDB<T>({
  path,
  params = {},
  method = 'GET',
  body,
}: TMDBRequestOptions): Promise<T> {
  const url = new URL(path, TMDB_API_URL);

  url.searchParams.append('api_key', TMDB_API_KEY);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  if (body && method !== 'GET') {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url.toString(), options);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      `TMDB API Error (${response.status}): ${JSON.stringify(errorData)}`,
    );
  }
  return response.json();
}

/**
 * Default export for easier importing
 */
export default {
  fetch: fetchTMDB,
};
