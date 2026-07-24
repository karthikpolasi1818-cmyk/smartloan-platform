"use client";


import { create } from "zustand";



interface ApplicationState {


  // STEP

  currentStep:number;



  // LOAN DETAILS

  loanType:string;

  loanConfig:any;

  amount:number;

  tenure:number;

  interestRate:number;



  // PERSONAL DETAILS

  fullName:string;

  email:string;

  phone:string;



  // ADDRESS DETAILS

  address:string;

  city:string;

  state:string;



  // EMPLOYMENT DETAILS

  employmentType:string;

  companyName:string;

  income:number;



  // DOCUMENTS

  documents:any;



  // VERIFICATION

  pan:string;

  aadhaar:string;

  verified:boolean;

  verificationStatus:boolean;



  // APPROVAL

  creditScore:number;

  riskScore:number;

  approvalStatus:string;



  // SIGNATURE

  signature:string;




  // ACTIONS


  setLoanType:
  (
    type:string,
    config?:any
  )=>void;



  setAmount:
  (
    amount:number
  )=>void;



  setTenure:
  (
    tenure:number
  )=>void;



  setIncome:
  (
    income:number
  )=>void;



  setFullName:
  (
    name:string
  )=>void;



  setEmail:
  (
    email:string
  )=>void;



  setPhone:
  (
    phone:string
  )=>void;



  setPAN:
  (
    pan:string
  )=>void;



  setAadhaar:
  (
    aadhaar:string
  )=>void;



  setDocuments:
  (
    documents:any
  )=>void;



  setVerified:
  (
    value:boolean
  )=>void;



  setVerificationStatus:
  (
    value:boolean
  )=>void;



  setSignature:
  (
    signature:string
  )=>void;



  setApproval:
  (
    creditScore:number,
    status:string
  )=>void;



  nextStep:
  ()=>void;



  previousStep:
  ()=>void;



  update:
  (
    data:Partial<ApplicationState>
  )=>void;



  resetApplication:
  ()=>void;


}







export const useApplicationStore =

create<ApplicationState>((set)=>(



{


// INITIAL STATE


currentStep:1,



// LOAN

loanType:"",

loanConfig:null,

amount:0,

tenure:0,

interestRate:0,




// PERSONAL

fullName:"",

email:"",

phone:"",




// ADDRESS

address:"",

city:"",

state:"",





// EMPLOYMENT

employmentType:"",

companyName:"",

income:0,





// DOCUMENTS

documents:{},





// VERIFICATION

pan:"",

aadhaar:"",

verified:false,

verificationStatus:false,





// APPROVAL

creditScore:0,

riskScore:0,

approvalStatus:"PENDING",





// SIGNATURE

signature:"",







// ACTIONS





setLoanType:

(type,config)=>

set({

loanType:type,

loanConfig:config || null,

interestRate:

config?.rate || 0

}),








setAmount:

(amount)=>

set({

amount

}),








setTenure:

(tenure)=>

set({

tenure

}),








setIncome:

(income)=>

set({

income

}),








setFullName:

(name)=>

set({

fullName:name

}),








setEmail:

(email)=>

set({

email

}),








setPhone:

(phone)=>

set({

phone

}),








setPAN:

(pan)=>

set({

pan

}),








setAadhaar:

(aadhaar)=>

set({

aadhaar

}),








setDocuments:

(documents)=>

set({

documents

}),








setVerified:

(value)=>

set({

verified:value

}),








setVerificationStatus:

(value)=>

set({

verificationStatus:value

}),








setSignature:

(signature)=>

set({

signature

}),








setApproval:

(creditScore,status)=>

set({

creditScore,

approvalStatus:status

}),









nextStep:

()=>


set(

(state)=>(

{

currentStep:

state.currentStep + 1

}

)

),









previousStep:

()=>


set(

(state)=>(

{

currentStep:

Math.max(

1,

state.currentStep - 1

)

}

)

),









update:

(data)=>

set(

(state)=>(

{

...state,

...data

}

)

),







resetApplication:

()=>


set({


currentStep:1,


loanType:"",

loanConfig:null,


amount:0,

tenure:0,

interestRate:0,



fullName:"",

email:"",

phone:"",



address:"",

city:"",

state:"",



employmentType:"",

companyName:"",

income:0,



documents:{},



pan:"",

aadhaar:"",

verified:false,

verificationStatus:false,



creditScore:0,

riskScore:0,

approvalStatus:"PENDING",



signature:""



})





}


));