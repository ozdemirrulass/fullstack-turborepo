import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
    return (
        <div className='bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center'>
            <h1 className='text-center text-2xl font-bold mb-4'>Sign In Page</h1>
            <div className='flex justify between text-sm'>
                <p>Not have an account?</p>
                <Link className='underline' href="auth/signin">
                    Sign Up
                </Link>
            </div>
        </div>
    )
}

export default SignInPage