"use client"
import React, { useEffect, useState } from 'react'

const CardPortfolio = ({ nama, posisi, deskripsi, profileImg, backgroundImg, portfolio }) => {
    return (
        <div className='w-full lg:w-2/5 mt-8 lg:mt-0'>
            <div className='w-full bg-white rounded-xl drop-shadow rounded-xl  pb-8'>
                <div className='bg-gray w-full h-40 rounded-t-xl'>
                    <img src={`${backgroundImg == "" || backgroundImg == null ? "/assets/background.png" : `data:image/jpeg;base64,${backgroundImg}`} `} className='w-full h-full rounded-t-xl' />
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <div className='absolute top-20 flex flex-col items-center justify-center'>
                        <img src={`${profileImg == "" || backgroundImg == null ? "/assets/profilepic.png" : `data:image/jpeg;base64,${profileImg}`}`} className='w-36 h-36 rounded-full bg-gray' />
                        <h1 className='text-lg lg:text-2xl	font-bold text-black-2 mt-4'>{nama == "" || nama == null ? "Nama" : nama}</h1>
                        <p className='font-bold text-sm lg:text-base text-gray-7 w-2/3  text-center'>{posisi == "" || posisi == null ? "Posisi" : posisi}</p>
                        <p className='text-xs font-normal text-black-2 text-center w-2/3 '>{deskripsi == "" || deskripsi == null ? "deskripsi" : deskripsi}</p>
                    </div>
                </div>
                <div className='px-6 lg:px-12 mt-44'>
                    <h1 className='text-base font-bold text-black-2'>Portofolio</h1>
                    {
                        portfolio.map(i => {
                            return (
                                <div className='w-full bg-white rounded-xl drop-shadow rounded-xl px-6 rounded-md mt-2.5 py-4'>
                                    <h1 className='text-xs lg:text-base font-medium text-black mt-1'>{i.posisi == '' ? "ex: Front End Engineer " : i.posisi}</h1>
                                    <p className='text-xs font-medium text-gray-8'>{i.perusahaan == '' ? "ex: PT.XYZ" : i.perusahaan}</p>
                                    <p className='text-xs font-normal text-gray-8'>{i.tanggalMulai == '' ? "ex: Januari 2023" : i.tanggalMulai} - {i.tanggalSelesai == '' ? "ex: Desember 2023" : i.tanggalSelesai}</p>
                                    <p className='text-xs font-normal text-black-2'>{i.deskripsi == '' ? "ex: lorem ipsum dolor sit amet " : i.deskripsi}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default CardPortfolio