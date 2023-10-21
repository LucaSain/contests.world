import { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const authOptions: NextAuthOptions = {

    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),

    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },

}
export default authOptions;