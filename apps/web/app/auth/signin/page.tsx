import Link from 'next/link'
import React from 'react'
import SigninForm from './signinForm'

const SignInPage = () => {
    return (
        <div className='bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center'>
            <h1 className='text-center text-2xl font-bold mb-4'>Sign In Page</h1>
            <SigninForm />
            <div className='flex gap-1 justify between text-sm'>
                <p>Not have an account yet?</p>
                <Link className='underline' href="auth/signup">
                    Sign Up
                </Link>
            </div>
        </div>
    )
}

export default SignInPage