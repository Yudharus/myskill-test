import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


const TopBar = ({ searchParams }) => {
    const pathname = usePathname()

    return (
        <div className='w-full h-16 items-center px-8 py-3 flex backdrop-blur bg-white/50 sticky top-0 z-50'>
            <img src='/assets/myskill-logo.png' className='w-12 h-4 mr-4 lg:mr-0 lg:w-16 lg:h-6' />
            <div className='flex justify-around lg:justify-evenly w-full'>
                <Link className={`link ${pathname === '/' ? 'text-green--primary' : 'text-black-2'}`} href="/">
                    <h1 className=' text-xs lg:text-base font-semibold '>Home</h1>
                </Link>
                <Link className={`link ${pathname === '/create-portfolio' ? 'text-green--primary' : 'text-black-2'}`} href="/create-portfolio">
                    <h1 className='text-xs lg:text-base font-semibold '>{searchParams ? "Edit" : "Create"} Portofolio</h1>
                </Link>
                <Link className={`link ${pathname === '/my-resume' ? 'text-green--primary' : 'text-black-2'}`} href="/my-resume">
                    <h1 className='text-xs lg:text-base font-semibold '>My Portofolio</h1>
                </Link>
            </div>
        </div>
    )
}

export default TopBar