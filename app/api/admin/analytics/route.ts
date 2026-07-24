import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";



export async function GET(){


try{


const totalApplications =
await prisma.loanApplication.count();




const approvedLoans =
await prisma.loanApplication.count({

where:{

status:"APPROVED"

}

});





const rejectedLoans =
await prisma.loanApplication.count({

where:{

status:"REJECTED"

}

});





const pendingLoans =
await prisma.loanApplication.count({

where:{

status:"SUBMITTED"

}

});







const totalLoanAmount =

await prisma.loanApplication.aggregate({

_sum:{

loanAmount:true

}

});







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

totalApplications === 0

?

0

:

(

approvedLoans /

totalApplications

) * 100;







return NextResponse.json({

success:true,


data:{


totalApplications,


approvedLoans,


rejectedLoans,


pendingLoans,


approvalRate:


Number(

approvalRate.toFixed(2)

),



totalLoanAmount:

totalLoanAmount._sum.loanAmount || 0,



loanTypes



}


});



}

catch(error){


console.log(error);



return NextResponse.json({

success:false,

message:"Analytics failed"

},

{

status:500

}

);


}


}