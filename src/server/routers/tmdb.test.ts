/**
 * TMDB router tests
 */
import { describe, expect, it, vi, beforeAll, afterAll } from 'vitest';
import { createCaller } from './_app';
import { createContextInner } from '../context';

describe('TMDB Router', () => {
  const caller = createCaller(
    createContextInner({
      // No session needed for these tests
    }),
  );

  // Mock the fetch function for testing
  const originalFetch = global.fetch;

  beforeAll(() => {
    // Mock the fetch function to return test data
    global.fetch = vi.fn().mockImplementation((url) => {
      if (url.toString().includes('/movie/popular')) {
        return Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              page: 1,
              results: [
                {
                  id: 123,
                  title: 'Test Movie',
                  overview: 'Test Overview',
                },
              ],
              total_pages: 10,
              total_results: 100,
            }),
        });
      }

      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      });
    });
  });

  afterAll(() => {
    // Restore the original fetch function
    global.fetch = originalFetch;
  });

  it('should get popular movies', async () => {
    const result = await caller.tmdb.getPopularMovies({ page: 1 });

    expect(result).toMatchObject({
      page: 1,
      results: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
        }),
      ]),
    });
  });
});
