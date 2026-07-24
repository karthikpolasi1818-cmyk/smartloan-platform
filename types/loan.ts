export type LoanType =
"PERSONAL" |
"HOME" |
"BUSINESS";


export interface ApplicationData {

loanType:LoanType;


personal:{
name:string;
email:string;
phone:string;
pan:string;
aadhaar:string;
};


employment:{
company:string;
income:number;
};


loan:{
amount:number;
tenure:number;
};


documents:{
pan?:string;
aadhaar?:string;
};


signature?:string;


currentStep:number;

}