import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-4 p-6 bg-slate-300 text-slate-800 font-bold'>
      <Link href="\">|home page|</Link>
      <Link href="\address">|address page|</Link>
      <Link href="\name">|name page|</Link>
      <Link href="\contact">|contact page|</Link>
   </div>
  )
}

export default Header
