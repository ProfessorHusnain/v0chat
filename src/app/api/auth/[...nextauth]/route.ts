import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/lib/dbConfig";

import bcryptjs from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/auth";


export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        try {
          await connect();
          const user = await User.findOne({ email: username });
          if (!user) {
            return null;
          }

          const isValidPassword = await bcryptjs.compare(
            password,
            user.password
          );
          if (!isValidPassword) {
            return null;
          }
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // todo: you may add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      if (account.provider === "google") {
        try {
          await connect();
          const userExists = await User.findOne({ email: user.email });
          if (userExists) {
            return user;
          }
          const newUser = new User({
            email: user.email,
            name: user.name,
          });
          const res = await newUser.save();
          if (res.status === 200 || res.status === 201) {
            return user;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return user;
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.name;
      }
      console.log(session);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_URL,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
