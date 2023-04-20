import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'cpphtg5uhq',
  apiKey: process.env.API_KEY as string,
});
