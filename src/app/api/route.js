// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export async function GET(req, res) {
    try {
        const portfolio = await prisma.user.findMany({
            select: {
                id_user: true,
                nama: true,
                posisi: true,
                deskripsi: true,
                background: true,
                profileImage: true,
                portfolio: {
                    select: {
                        id: true,
                        posisi: true,
                        perusahaan: true,
                        deskripsi: true,
                        mulai: true,
                        selesai: true,
                        user_id: true
                    },
                },
            },
        })
        return Response.json({ message: "Sukses mendapatkan data", status: 200, data: portfolio });
    } catch (e) {
        // return NextApiResponse.json({ message: "Gagal mendapatkan data" })
        // return res.status(500).json({ message: "Gagal mendapatkan data", status: 500, data: [] })
    }
}
