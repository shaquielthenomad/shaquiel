import { createClient, OAuthStrategy } from '@wix/sdk';

export const useWixClient = () => {
  const wixClient = createClient({
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID
    })
  });

  return wixClient;
}
