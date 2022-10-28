import bcryptjs from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User";
import db from "../../../utils/mongodb";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.uType) token.uType = user.uType;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.uType) session.user.uType = token.uType;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db.dbCon();
        const user = await User.findOne({
          email: credentials.email,
        });
        await db.disconnect();
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            name: user.name,
            email: user.email,
            uType: user.uType,
          };
        }
        throw new Error("Invalid email or password");
      },
    }),
  ],
});
