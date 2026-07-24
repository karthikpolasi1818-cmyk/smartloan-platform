import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(){

    try {

        const applications =
        await prisma.loanApplication.findMany({

            include:{
                documents:true,
                user:true,
                history:true
            },

            orderBy:{
                createdAt:"desc"
            }

        });


        return NextResponse.json(
            {
                success:true,
                applications
            }
        );


    } catch(error){

        console.error(error);

        return NextResponse.json(
            {
                success:false,
                message:"Failed to fetch applications"
            },
            {
                status:500
            }
        );

    }

}