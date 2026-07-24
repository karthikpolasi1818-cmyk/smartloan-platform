export function calculateApproval(

income:number,

amount:number,

verified:boolean

){



let creditScore = 0;


let riskScore = 0;



if(verified){

creditScore += 700;

}
else{

creditScore += 500;

}




if(income > 100000){

creditScore += 100;

}
else if(income > 50000){

creditScore += 50;

}




riskScore =

Math.floor(

Math.random()*30

)+50;





let approvalProbability =

Math.min(

95,

Math.floor(

creditScore/10

)

);






let status = "REVIEW";




if(

verified &&

approvalProbability >=75

){

status="APPROVED";


}

else if(

approvalProbability <50

){

status="REJECTED";


}






let recommendedAmount =


status==="APPROVED"

?

amount

:

amount*0.5;







return {


creditScore,


riskScore,


approvalProbability,


status,


recommendedAmount



};


}