"use client"
import React, { useEffect, useState } from 'react'
import TopBar from '../components/molecules/TopBar.molecules'
import CardPortfolio from '../components/organisms/CardPortfolio.organisms'
import Link from 'next/link'

const page = () => {
    const [portfolios, setPortfolios] = useState(() => {
        const storedPortfolios = localStorage.getItem('portfolios');
        return storedPortfolios ? JSON.parse(storedPortfolios) : [];
    });

    return (
        <div >
            <TopBar />
            <Link href={{ pathname: '/create-portfolio', query: { isEdit: true } }}>
                <div className='flex items-center justify-center lg:mt-8 mb-8 py-14 px-8 lg:py-0 lg:px-0'>
                    <CardPortfolio
                        backgroundImg={localStorage.getItem('imageBackground')}
                        profileImg={localStorage.getItem('profileImage')}
                        nama={localStorage.getItem('nama')}
                        deskripsi={localStorage.getItem('deskripsi')}
                        posisi={localStorage.getItem('posisi')}
                        portfolio={portfolios}
                    />
                </div>
            </Link>

        </div>
    )
}

export default page