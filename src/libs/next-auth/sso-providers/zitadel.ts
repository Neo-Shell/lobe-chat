import Zitadel from 'next-auth/providers/zitadel';

import { authEnv } from '@/config/auth';

const provider = {
  id: 'zitadel',
  provider: Zitadel({
    // Available scopes in ZITADEL: https://zitadel.com/docs/apis/openidoauth/scopes
    authorization: { params: { scope: 'openid email profile' } },
    clientId: authEnv.ZITADEL_CLIENT_ID,
    clientSecret: authEnv.ZITADEL_CLIENT_SECRET,
    issuer: authEnv.ZITADEL_ISSUER,
    // TODO(NextAuth): map unique user id to `providerAccountId` field
    // profile(profile) {
    //   return {
    //     email: profile.email,
    //     image: profile.picture,
    //     name: profile.name,
    //     providerAccountId: profile.user_id,
    //   };
    // },
  }),
};

export default provider;
