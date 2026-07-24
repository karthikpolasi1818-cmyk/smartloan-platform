"use client";


import { create } from "zustand";



interface ApplicationState {


  // ==========================
  // APPLICATION
  // ==========================

  currentStep:number;

  applicationId:string;



  // ==========================
  // LOAN DETAILS
  // ==========================

  loanType:string;

  loanConfig:any;

  amount:number;

  tenure:number;

  interestRate:number;



  // ==========================
  // PERSONAL DETAILS
  // ==========================

  fullName:string;

  email:string;

  phone:string;



  // ==========================
  // IDENTITY
  // ==========================

  pan:string;

  aadhaar:string;



  // ==========================
  // ADDRESS
  // ==========================

  address:string;

  city:string;

  state:string;



  // ==========================
  // EMPLOYMENT
  // ==========================

  employmentType:string;

  companyName:string;

  income:number;



  // ==========================
  // DOCUMENTS
  // ==========================

  documents:any;



  // ==========================
  // VERIFICATION
  // ==========================

  verified:boolean;

  verificationStatus:boolean;



  // ==========================
  // CREDIT / APPROVAL
  // ==========================

  creditScore:number;

  riskScore:number;

  approvalStatus:string;



  // ==========================
  // SIGNATURE
  // ==========================

  signature:string;



  // ==========================
  // ACTIONS
  // ==========================


  setApplicationId:
  (id:string)=>void;



  setLoanType:
  (
    type:string,
    config?:any
  )=>void;



  setAmount:
  (amount:number)=>void;



  setTenure:
  (tenure:number)=>void;



  setIncome:
  (income:number)=>void;



  setFullName:
  (name:string)=>void;



  setEmail:
  (email:string)=>void;



  setPhone:
  (phone:string)=>void;



  setPAN:
  (pan:string)=>void;



  setAadhaar:
  (aadhaar:string)=>void;



  setDocuments:
  (documents:any)=>void;



  setVerified:
  (value:boolean)=>void;



  setVerificationStatus:
  (value:boolean)=>void;



  setSignature:
  (signature:string)=>void;



  setApproval:
  (
    score:number,
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







export const useApplicationStore = create<ApplicationState>(

(set)=>(

{


// ==========================
// INITIAL STATE
// ==========================


currentStep:1,


applicationId:"",



loanType:"",


loanConfig:{},


amount:0,


tenure:0,


interestRate:0,



// Personal

fullName:"",

email:"",

phone:"",



// Identity

pan:"",

aadhaar:"",



// Address

address:"",

city:"",

state:"",



// Employment

employmentType:"",

companyName:"",

income:0,



// Documents

documents:{},



// Verification

verified:false,

verificationStatus:false,



// Approval

creditScore:0,

riskScore:0,

approvalStatus:"PENDING",



// Signature

signature:"",





// ==========================
// SETTERS
// ==========================



setApplicationId:

(id)=>

set({

applicationId:id

}),





setLoanType:

(type,config)=>

set({

loanType:type,

loanConfig:config || {},

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

(score,status)=>

set({

creditScore:score,

approvalStatus:status

}),





// ==========================
// STEPS
// ==========================


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





// ==========================
// UPDATE
// ==========================


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





// ==========================
// RESET
// ==========================


resetApplication:

()=>


set({

currentStep:1,


applicationId:"",


loanType:"",

loanConfig:{},

amount:0,

tenure:0,

interestRate:0,



fullName:"",

email:"",

phone:"",



pan:"",

aadhaar:"",



address:"",

city:"",

state:"",



employmentType:"",

companyName:"",

income:0,



documents:{},



verified:false,

verificationStatus:false,



creditScore:0,

riskScore:0,

approvalStatus:"PENDING",



signature:""

})


}

)

);