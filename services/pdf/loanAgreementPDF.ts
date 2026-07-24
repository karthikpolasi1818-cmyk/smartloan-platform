import jsPDF from "jspdf";



export function generateLoanAgreementPDF(data:any){


const doc = new jsPDF();



doc.setFontSize(22);

doc.text(
"SmartLoan Agreement",
20,
30
);




doc.setFontSize(14);



doc.text(

`Loan Type: ${data.loanType}`,

20,

50

);



doc.text(

`Loan Amount: Rs ${data.amount.toLocaleString("en-IN")}`,

20,

65

);



doc.text(

`Tenure: ${data.tenure} Years`,

20,

80

);



doc.text(

`Interest Rate: ${data.rate}%`,

20,

95

);



doc.text(

`Monthly Income: Rs ${data.income.toLocaleString("en-IN")}`,

20,

110

);



doc.text(

"Terms & Conditions",

20,

140

);



doc.text(

"1. Applicant information must be correct.",

20,

155

);



doc.text(

"2. Loan approval depends on verification.",

20,

170

);



doc.text(

"3. EMI payments must be made on time.",

20,

185

);





doc.save(

"SmartLoan_Agreement.pdf"

);


}