"use client"
import React from 'react'

const Button = ({ onPressAdd, onPressSave, active }) => {
    return (
        <div className="flex lg:flex-row flex-col">
            <div className="items-center justify-center flex border border-green--primary/70 w-40 h-12	rounded-lg cursor-pointer mr-4 mb-4 lg:mb-0" onClick={onPressAdd}>
                <h1 className="text-green--primary text-base font-bold">+ Add Portofolio</h1>
            </div>
            <div className={`items-center justify-center ${active == true ? "border border-green--primary/70 cursor-pointer" : "bg-gray"}  flex w-52 h-12	rounded-lg `} onClick={onPressSave}>
                <h1 className={` ${active == true ? "text-green--primary" : "text-gray-2"} text-base font-bold`}>Simpan Perubahan</h1>
            </div>
        </div>
    )
}

export default Button