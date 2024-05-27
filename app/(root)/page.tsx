import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const Home= () => {
  return (
    <div>
      <p>Home</p>
      <SignedOut>          
        <SignInButton />        
        </SignedOut>        
        <SignedIn>          
        <UserButton afterSignOutUrl='/' />       
          </SignedIn>
    </div>
  )
}

export default Home