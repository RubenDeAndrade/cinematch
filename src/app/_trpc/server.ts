import { httpBatchLink } from '@trpc/client';
import { createCaller } from '~/server';
import { getBaseUrl } from '~/utils/get-base-url';

export const serverTrpc = createCaller({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
