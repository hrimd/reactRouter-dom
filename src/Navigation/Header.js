import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header  className='flex justify-between items-center bg-slate-100'>
    <a className='text-4xl ' href='#' >Logo</a>
<nav >
    <ul className='flex m-8 gap-3 '>
        <li >
           <Link to='/'> Home</Link>
        </li>
        <li>
           <Link to="/about"> About</Link>
        </li>
        <li>
           <Link to="/contact"> Contact</Link>
        </li>
    </ul>
</nav>
</header>
  )
}

export default Header
