
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'email@site.com' },
                password: { label: 'Password', type: 'password', placeholder: 'password' },
            },
            async authorize({ username, password }, _req) {
                try {
                    const { data, error } = await fetch("<your-remote-api>")
                    if (!data?.user || error) {
                        return null
                    }
                    return data.user
                } catch (error) {
                    return error
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.data = user
            }
            return token
        },
        session: async ({ session, token }) => {
            if (token.data) {
                session.user = token.data
            }
            return session
        },
    },
})

/**
 * 
 * 
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import prisma from "@/app/libs/prisma";

const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return;
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email }
    });
    if (!currentUser) return;
    return currentUser;
  } catch (e: any) {
    // simply ignores if no user is logged in
    return;
  }
};

<button onClick={() => signIn('google')}>Login with Google</button>
/** @type {import('next').NextConfig} *
module.exports = {
    images: {
      domains: ["lh3.googleusercontent.com"],
    },
  };




**/
