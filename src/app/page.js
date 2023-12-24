"use client"
import React from 'react'
import TopBar from './components/molecules/TopBar.molecules'
import Link from 'next/link'


const page = () => {
    return (
        <div>
            <TopBar />
            <div className='flex items-center justify-around py-14 px-16 lg:py-16 lg:px-32 bg-green-2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <img src='/assets/resume.png' className='w-52 h-52 mb-8 lg:hidden ' />
                    <h1 className='text-lg lg:text-3xl text-center lg:text-left	font-bold text-black-2'>Buat resume jadi lebih mudah</h1>
                    <p className='font-medium text-sm lg:text-base text-black-2 lg:w-2/3 mt-4'>
                        Selamat datang di Resume Maker, platform inovatif yang akan membantu Anda menciptakan curriculum vitae yang mengesankan dan profesional dengan mudah. Dengan Resume Maker, Anda dapat menggabungkan keterampilan dan pengalaman Anda dalam sebuah desain yang menarik, meningkatkan daya tarik visual CV Anda. Templat yang modern dan fleksibel memastikan bahwa setiap resume yang Anda buat sesuai dengan kepribadian dan kebutuhan Anda. Kami menyediakan alat yang mudah digunakan, memandu Anda melalui setiap langkah dengan saran kontekstual dan fitur penyesuaian yang memastikan CV Anda menjadi representasi terbaik dari diri Anda. Dengan Resume Maker, buatlah kesan pertama yang tak terlupakan dan beri diri Anda kesempatan terbaik untuk sukses. Daftarkan diri Anda sekarang dan mulailah perjalanan penciptaan CV yang lebih baik!
                    </p>
                    <Link href="/create-portfolio">
                        <div className="items-center justify-center flex border border-green--primary/70 w-48 h-12	rounded-lg cursor-pointer mt-4">
                            <h1 className="text-green--primary text-base font-bold">Buat Resume Sekarang</h1>
                        </div>
                    </Link>
                </div>
                <img src='/assets/resume.png' className='w-52 h-52 hidden lg:block' />
            </div>
            <div className='flex items-center justify-evenly py-14 px-16 lg:py-16 lg:px-32 bg-white'>
                <div className='flex flex-col items-center lg:items-start'>
                    <img src='/assets/yudharus.png' className='w-44 h-44 rounded-md mb-8 lg:hidden' />
                    <h1 className='text-lg text-center lg:text-left lg:text-3xl	font-bold text-black-2'>Dibuat dengan 🫶 oleh Moch Yudha Rusdian</h1>
                    <p className='font-medium text-sm lg:text-base  text-black-2 lg:w-2/3 mt-4'>
                        Hai, Saya Yudha. Saya adalah seorang individu bersemangat dengan ketertarikan mendalam dalam dunia musik, saya juga senang untuk bermain game. Pekerjaan saya adalah sebagai Mobile Developer dan Front - End Developer. Saya juga memiliki ketertarikan dan pengalaman dalam membuat serta pengembangan aplikasi mobile maupun website.
                    </p>
                </div>
                <img src='/assets/yudharus.png' className='w-44 h-44 rounded-md hidden lg:block' />
            </div>
        </div>
    )
}

export default page