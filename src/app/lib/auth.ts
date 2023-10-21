import { AuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
const authOptions: AuthOptions = {

    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],

}
export default authOptions;