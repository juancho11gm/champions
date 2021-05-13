import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    }),
  ],
  callbacks: {
    async signIn (_, account, profile) {
      if (
        account.provider === 'google' &&
        profile.verified_email === true
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
})