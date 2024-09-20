import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-slate-400 flex justify-center p-4 text-slate-800 font-bold '>
      <Link href="\" className='pl-3 pr-3'>|privacy|</Link>
      <Link href="\"className='pl-3 pr-3'>|terms|</Link>
      <Link href="\"className='pl-3 pr-3'>|conditions|</Link>
    </div>
  )
}

export default Footer
