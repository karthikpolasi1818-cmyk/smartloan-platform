export function calculateEMI(
amount:number,
rate:number,
years:number
){

const monthlyRate =
rate / 12 / 100;


const months =
years * 12;



const emi =
amount *
monthlyRate *
Math.pow(
1+monthlyRate,
months
)
/
(
Math.pow(
1+monthlyRate,
months
)-1
);



return Math.round(emi);

}



export function checkEligibility(
income:number,
emi:number
){


const allowed =
income * 0.5;



return emi <= allowed;


}