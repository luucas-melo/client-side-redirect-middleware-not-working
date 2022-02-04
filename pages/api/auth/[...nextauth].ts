import { NextApiRequest, NextApiResponse } from 'next'
import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth/next'

// https://next-auth.js.org/configuration/initialization#advanced-initialization
// eslint-disable-next-line import/no-default-export
export default async function auth(req: NextApiRequest, res: NextApiResponse) {

  const nextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: {
            label: 'Username',
            type: 'text',
            placeholder: 'username'
          },
          password: { label: 'Password', type: 'password' }
        },
        async authorize(credentials) {
          
          return {name: 'John Doe'}
        }
      })
    ], 
    secret: 'secret-example'
  }

  return await NextAuth(req, res, nextAuthOptions)
}
