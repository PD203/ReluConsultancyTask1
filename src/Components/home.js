import React from 'react'
import { Link } from 'react-router-dom'

function home() {
  return (
    <>
    <div>home</div>
    <Link to="/login"><div >sign in</div></Link>
    <Link to="/sign-up"><div >sign up</div></Link>

    </>
  )
}

export default home