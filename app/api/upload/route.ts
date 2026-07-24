import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/lib/supabase/client";

import { prisma } from "@/lib/prisma";



export async function POST(
  request: NextRequest
) {

  try {


    const formData =
      await request.formData();



    const file =
      formData.get("file") as File;



    const applicationId =
      formData.get("applicationId") as string;



    const documentType =
      formData.get("documentType") as string;




    if (!file) {

      return NextResponse.json(
        {
          success:false,
          message:"File is required"
        },
        {
          status:400
        }
      );

    }




    if (!applicationId) {

      return NextResponse.json(
        {
          success:false,
          message:"Application ID is required"
        },
        {
          status:400
        }
      );

    }





    /*
      Convert File -> Buffer
    */

    const bytes =
      await file.arrayBuffer();



    const buffer =
      Buffer.from(bytes);





    /*
      Unique filename
    */


    const fileName =

      `${applicationId}/${Date.now()}-${file.name}`;







    /*
      Upload to Supabase Storage

      Bucket:
      loan-documents
    */


    const uploadResult =

      await supabase.storage

      .from("loan-documents")

      .upload(

        fileName,

        buffer,

        {

          contentType:file.type,

          upsert:false

        }

      );






    if(uploadResult.error){


      return NextResponse.json(
        {

          success:false,

          message:
          uploadResult.error.message

        },
        {
          status:500
        }
      );


    }








    /*
       Generate Public URL
    */


    const publicUrl =

      supabase.storage

      .from("loan-documents")

      .getPublicUrl(

        fileName

      )
      .data
      .publicUrl;









    /*
       Save document metadata
       in PostgreSQL

       Prisma Document table
    */


    const document =

      await prisma.document.create({

        data:{


          applicationId,


          documentType:
          documentType || "OTHER",


          fileName:
          file.name,


          fileUrl:
          publicUrl


        }

      });








    return NextResponse.json(
      {

        success:true,

        message:
        "Document uploaded successfully",

        document

      },
      {
        status:200
      }
    );






  }

  catch(error:any){


    console.error(
      "UPLOAD ERROR:",
      error
    );



    return NextResponse.json(

      {

        success:false,

        message:
        error.message ||
        "Upload failed"

      },

      {

        status:500

      }

    );


  }


}