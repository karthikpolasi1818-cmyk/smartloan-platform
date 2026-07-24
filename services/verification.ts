// services/verification.ts



// PAN Card validation simulation
// Format: ABCDE1234F

export function verifyPAN(
  pan:string
):boolean{


  const panRegex =
  /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;


  return panRegex.test(
    pan.toUpperCase()
  );


}





// Aadhaar validation simulation
// 12 digit number

export function verifyAadhaar(
  aadhaar:string
):boolean{


  const aadhaarRegex =
  /^[0-9]{12}$/;


  return aadhaarRegex.test(
    aadhaar
  );


}







// OTP generation simulation

export function generateOTP():string{


  return Math.floor(

    100000 +

    Math.random() * 900000

  ).toString();


}







// Credit/Risk score simulation

export function calculateRiskScore():number{


  return Math.floor(

    Math.random() * 20

  ) + 80;


}







// Optional: simulate verification API delay

export function simulateVerification(){


  return new Promise(
    
    (resolve)=>{


      setTimeout(()=>{


        resolve(true);


      },1500);


    }

  );


}