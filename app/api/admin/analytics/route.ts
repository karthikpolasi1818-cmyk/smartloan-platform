import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(){


try{


const totalApplications =
await prisma.loanApplication.count();



const approvedLoans =
await prisma.loanApplication.count({

where:{
approvalStatus:"APPROVED"
}

});



const rejectedLoans =
await prisma.loanApplication.count({

where:{
approvalStatus:"REJECTED"
}

});



const pendingLoans =
await prisma.loanApplication.count({

where:{
approvalStatus:"PENDING"
}

});





const totalAmount =
await prisma.loanApplication.aggregate({

_sum:{
loanAmount:true
}

});





// Monthly applications

const applications =
await prisma.loanApplication.findMany({

select:{
createdAt:true
}

});



const monthlyData = [

{
month:"Jan",
count:0
},

{
month:"Feb",
count:0
},

{
month:"Mar",
count:0
},

{
month:"Apr",
count:0
},

{
month:"May",
count:0
},

{
month:"Jun",
count:0
},

{
month:"Jul",
count:0
},

{
month:"Aug",
count:0
},

{
month:"Sep",
count:0
},

{
month:"Oct",
count:0
},

{
month:"Nov",
count:0
},

{
month:"Dec",
count:0
}

];



applications.forEach((app)=>{


const month =
new Date(app.createdAt).getMonth();


monthlyData[month].count++;


});






// Loan Type Analysis


const loanTypes =
await prisma.loanApplication.groupBy({

by:[
"loanType"
],


_count:{

loanType:true

}

});





const approvalRate =

totalApplications===0

?

0

:

Math.round(

(approvedLoans / totalApplications)

*100

);







return NextResponse.json({

success:true,


analytics:{


totalApplications,

approvedLoans,

rejectedLoans,

pendingLoans,


totalLoanAmount:

totalAmount._sum.loanAmount || 0,



approvalRate,


monthlyData,


loanTypes



}


});




}

catch(error){


console.error(error);



return NextResponse.json({

success:false,

message:"Analytics error"

},

{
status:500
}

);


}



}