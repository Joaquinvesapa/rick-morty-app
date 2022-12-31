import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="content-footer w-full h-auto min-h-40 p-4 bg-dk-grey flex items-center flex-col justify-center">
            <a href='https://github.com/Joaquinvesapa/rick-morty-app'>
                <img src="/25231.png" alt="" className='relative w-auto h-16' />
            </a>
            <p className='text-zinc-500 pt-3'>Created By Joaquin Vesco Aparicio</p>
        </div>
        <div className='w-full h-1 bg-gradient-to-l from-pink to-dk-violet'></div>
    </div>
  )
}

export default Footer