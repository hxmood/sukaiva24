import connectMongoDB from "@/utils/database";
import  CredentialsProvider  from "next-auth/providers/credentials";
import User from "@/models/registration";
import NextAuth from "next-auth/next";
import bcrypt from "bcryptjs"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const {email, password} = credentials
                try {
                    await connectMongoDB()
                    const user = await User.findOne({email})
                    if(!user) {
                        return null
                    }

                    const passMatch = await bcrypt.compare(password, user.password)
                    if (!passMatch) {
                        return null
                    }
                    return user
                } catch (error) {
                    console.log(error);
                }
            }
        })
    ],

    session: {
        strategy: "jwt"
    },

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: "/login"
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}