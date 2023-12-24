"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Dropzone from 'react-dropzone'
import Button from '../molecules/Button.molecules'
import CardPortfolio from './CardPortfolio.organisms'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



const CardDataPortfolio = ({ searchParams }) => {

    const router = useRouter()
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [imageBackground, setImageBackground] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [nama, setNama] = useState("")
    const [posisi, setPosisi] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [portfolios, setPortfolios] = useState(() => {
        const storedPortfolios = localStorage.getItem('portfolios');
        return storedPortfolios ? JSON.parse(storedPortfolios) : [{ id: 1, nama: '', posisi: '', perusahaan: '', tanggalMulai: '', tanggalSelesai: '', deskripsi: '' }];
    });
    const maxPortfolios = 10

    useEffect(() => {
        if (searchParams) {
            setNama(localStorage.getItem("nama"))
            setPosisi(localStorage.getItem("posisi"))
            setDeskripsi(localStorage.getItem("deskripsi"))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('portfolios', JSON.stringify(portfolios));
    }, [portfolios]);

    const addPortfolio = () => {
        if (portfolios.length < maxPortfolios) {
            setPortfolios((prevPortfolios) => [
                ...prevPortfolios,
                {
                    id: prevPortfolios.length + 1,
                    nama: '',
                    posisi: '',
                    perusahaan: '',
                    tanggalMulai: '',
                    tanggalSelesai: '',
                    deskripsi: '',
                },
            ]);
        }
    };

    const removePortfolio = (index) => {
        setPortfolios((prevPortfolios) => {
            const newPortfolios = [...prevPortfolios];
            newPortfolios.splice(index, 1);

            for (let i = 0; i < newPortfolios.length; i++) {
                newPortfolios[i].id = i + 1;
            }

            localStorage.setItem('portfolios', JSON.stringify(newPortfolios));

            return newPortfolios;
        });
    };

    const handleInputChange = (index, field, value) => {
        setPortfolios((prevPortfolios) => {
            const newPortfolios = [...prevPortfolios];
            newPortfolios[index][field] = value;
            return newPortfolios;
        });

    };

    const onDropBackground = (acceptedFiles) => {
        handleDrop(acceptedFiles, setImageBackground, 'imageBackground');
    };

    const onDropProfileImage = (acceptedFiles) => {
        handleDrop(acceptedFiles, setProfileImage, 'profileImage');
    };

    const handleDrop = (acceptedFiles, setImage, localStorageKey) => {
        setUploadedFiles(acceptedFiles)
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            setImage(base64String);

            localStorage.setItem(localStorageKey, base64String);
        };

        reader.readAsDataURL(acceptedFiles[0]);
    };

    const { getRootProps: getRootPropsBackground, getInputProps: getInputPropsBackground, isDragActive: isDragActiveBackground } = useDropzone({
        onDrop: onDropBackground,
    });

    const { getRootProps: getRootPropsProfileImage, getInputProps: getInputPropsProfileImage, isDragActive: isDragActiveProfileImage } = useDropzone({
        onDrop: onDropProfileImage,
    });

    async function save() {
        localStorage.setItem('nama', nama);
        localStorage.setItem('posisi', posisi);
        localStorage.setItem('deskripsi', deskripsi);
        router.push("/my-resume")

    }

    return (
        <div>
            {/* <Link href="/my-resume"> */}
            <Button
                onPressSave={nama !== "" && posisi !== "" && deskripsi !== "" ? () => save() : null}
                onPressAdd={addPortfolio}
                active={nama !== "" && posisi !== "" && deskripsi !== "" ? true : false}
            />
            {/* </Link> */}
            <div className='mt-8 flex lg:flex-row flex-col'>
                <div className='lg:mr-12'>
                    <div className='w-full bg-white p-6 rounded-xl drop-shadow'>
                        <div className='flex items-center justify-between '>
                            <h2 className='font-semibold text-base text-black--primary underline '>Background Image</h2>
                            <Image
                                className='cursor-pointer'
                                src={"/assets/resize.png"}
                                width={40}
                                height={40}
                            />
                        </div>
                        <div {...getRootPropsBackground()} className='bg-gray-3 rounded-lg flex flex-col items-center justify-center h-60 cursor-pointer mt-3.5'>
                            <input {...getInputPropsBackground()} />

                            {
                                uploadedFiles.length == 0 ? (
                                    <>
                                        <Image
                                            className='cursor-pointer'
                                            src={"/assets/attachment.png"}
                                            width={24}
                                            height={24}
                                        />
                                        <div className='items-center flex mt-1'>
                                            <p className="font-medium text-sm text-gray-4 underline flex">Drag and drop files, or </p>
                                            <p className="font-medium text-sm text-blue underline decoration-blue ml-1">Browse</p>
                                        </div>
                                        <p className='text-xs font-normal text-gray-5 text-center mt-1 underline'>Support formats : png, jpg, jpeg, mp4. <br />Max size : 500Mb</p>
                                    </>
                                ) : (
                                    <>
                                        {uploadedFiles.map((file) => (
                                            <p className='text-xs font-normal text-gray-5 text-center mt-1 underline'>{file.name}</p>
                                        ))}
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className='w-full bg-white p-6 rounded-xl drop-shadow mt-6'>
                        <div className='flex items-center justify-between '>
                            <h2 className='font-semibold text-base text-black--primary underline '>Profile Image</h2>
                            <Image
                                className='cursor-pointer'
                                src={"/assets/resize.png"}
                                width={40}
                                height={40}
                            />
                        </div>
                        <div {...getRootPropsProfileImage()} className='bg-gray-3 rounded-lg flex flex-col items-center justify-center h-60 cursor-pointer mt-3.5'>
                            <input {...getInputPropsProfileImage()} />

                            {
                                uploadedFiles.length == 0 ? (
                                    <>
                                        <Image
                                            className='cursor-pointer'
                                            src={"/assets/attachment.png"}
                                            width={24}
                                            height={24}
                                        />
                                        <div className='items-center flex mt-1'>
                                            <p className="font-medium text-sm text-gray-4 underline flex">Drag and drop files, or </p>
                                            <p className="font-medium text-sm text-blue underline decoration-blue ml-1">Browse</p>
                                        </div>
                                        <p className='text-xs font-normal text-gray-5 text-center mt-1 underline'>Support formats : png, jpg, jpeg, mp4. <br />Max size : 500Mb</p>
                                    </>
                                ) : (
                                    <>
                                        {uploadedFiles.map((file) => (
                                            <p className='text-xs font-normal text-gray-5 text-center mt-1 underline'>{file.name}</p>
                                        ))}
                                    </>
                                )
                            }

                        </div>
                    </div>
                    <div className='w-full bg-white p-6 rounded-xl drop-shadow mt-6'>
                        <div className='flex items-center justify-between '>
                            <h2 className='font-semibold text-base text-black--primary underline '>Profile</h2>
                            <Image
                                className='cursor-pointer'
                                src={"/assets/resize.png"}
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="border border-gray-6 rounded-lg flex justify-center p-4 h-14 mt-3.5">
                            <input className='w-full outline-none font-normal text-base ' placeholder='Nama' color='#919EAB3D' value={nama} onChange={(e) => setNama(e.target.value)} />
                        </div>
                        <div className="border border-gray-6 rounded-lg flex justify-center p-4 h-14 mt-6">
                            <input className='w-full outline-none font-normal text-base ' placeholder='Title / Posisi' color='#919EAB3D' value={posisi} onChange={(e) => setPosisi(e.target.value)} />
                        </div>
                        <textarea className='outline-none border border-gray-6 rounded-lg flex justify-center p-4 mt-6 w-full' placeholder='Deskripsi' color='#919EAB3D' value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                    </div>
                    {portfolios.map((portfolio, index) => (
                        <div className='w-full bg-white p-6 rounded-xl drop-shadow mt-6'>
                            <div className='flex items-center justify-between '>
                                <h2 className='font-semibold text-base text-black--primary underline '>Porfolio {index + 1}</h2>
                                <div className="items-center flex">
                                    <Image
                                        className='cursor-pointer'
                                        src={"/assets/resize.png"}
                                        width={40}
                                        height={40}
                                    />
                                    {
                                        portfolios.length == 1 ?
                                            null : (
                                                <Image
                                                    className='cursor-pointer'
                                                    src={"/assets/x.png"}
                                                    width={40}
                                                    height={40}
                                                    onClick={() => removePortfolio(index)}
                                                />
                                            )
                                    }
                                </div>
                            </div>
                            {/* <div className="border border-gray-6 rounded-lg flex justify-center p-4 h-14 mt-3.5">
                                <input className='w-full outline-none font-normal text-base ' placeholder='Nama' color='#919EAB3D' onChange={(e) => handleInputChange(index, 'nama', e.target.value)} />
                            </div> */}
                            <div className="border border-gray-6 rounded-lg flex justify-center p-4 h-14 mt-6">
                                <input className='w-full outline-none font-normal text-base ' placeholder='Posisi' color='#919EAB3D' onChange={(e) => handleInputChange(index, 'posisi', e.target.value)} />
                            </div>
                            <div className="border border-gray-6 rounded-lg flex justify-center p-4 h-14 mt-6">
                                <input className='w-full outline-none font-normal text-base ' placeholder='Perusahaan' color='#919EAB3D' onChange={(e) => handleInputChange(index, 'perusahaan', e.target.value)} />
                            </div>
                            <div className='flex items-center '>
                                <div className="border border-gray-6 rounded-lg flex justify-center p-4 h-14 mt-6 w-2/3 mr-3.5">
                                    <input className='w-full outline-none font-normal text-base ' placeholder='Tanggal Mulai' color='#919EAB3D' onChange={(e) => handleInputChange(index, 'tanggalMulai', e.target.value)} />
                                </div>
                                <div className="border border-gray-6 rounded-lg flex justify-center p-4 h-14 mt-6 w-2/3">
                                    <input className='w-full outline-none font-normal text-base ' placeholder='Tanggal Selesai' color='#919EAB3D' onChange={(e) => handleInputChange(index, 'tanggalSelesai', e.target.value)} />
                                </div>
                            </div>
                            <textarea className='outline-none border border-gray-6 rounded-lg flex justify-center p-4 mt-6 w-full' placeholder='Description' color='#919EAB3D' onChange={(e) => handleInputChange(index, 'deskripsi', e.target.value)} />
                        </div>
                    ))}
                </div>

                <CardPortfolio
                    backgroundImg={searchParams ? localStorage.getItem("imageBackground") : imageBackground}
                    profileImg={searchParams ? localStorage.getItem("profileImage") : profileImage}
                    nama={nama}
                    posisi={posisi}
                    deskripsi={deskripsi}
                    portfolio={portfolios}
                />


            </div>
        </div>

    )
}

export default CardDataPortfolio