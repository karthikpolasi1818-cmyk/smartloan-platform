"use client";


import {
useState
} from "react";


import {
useApplicationStore
} from "@/store/applicationStore";


import {

verifyPAN,

verifyAadhaar,

generateOTP,

calculateRiskScore

}

from "@/services/verification";





export default function IdentityVerification(){



const {


pan,

aadhaar,

setPAN,

setAadhaar,

setVerified,

setVerificationStatus,

nextStep


}=useApplicationStore();





const [otp,setOtp]=useState("");

const [generatedOtp,setGeneratedOtp]=useState("");

const [message,setMessage]=useState("");

const [risk,setRisk]=useState<number | null>(null);







function generate(){



if(!verifyPAN(pan)){


setMessage(
"Invalid PAN format. Example ABCDE1234F"
);


return;

}





if(!verifyAadhaar(aadhaar)){


setMessage(
"Invalid Aadhaar. Enter 12 digits"
);


return;

}






const code =
generateOTP();



setGeneratedOtp(code);



setMessage(
`OTP Generated: ${code}`
);



}









function verify(){



if(
otp===generatedOtp
){



setVerified(true);


setVerificationStatus(true);



const score =
calculateRiskScore();



setRisk(score);



setMessage(
"Identity verification completed successfully"
);



}

else{


setMessage(
"Incorrect OTP"
);


}



}








return(


<div className="loan-card">



<h2 className="section-title">

Identity Verification

</h2>



<p className="subtitle">

Verify PAN and Aadhaar details

</p>








<div className="form-group">


<label>

PAN Number

</label>


<input


value={pan}


onChange={(e)=>

setPAN(
e.target.value.toUpperCase()
)

}


placeholder="ABCDE1234F"


maxLength={10}


/>


</div>







<div className="form-group">


<label>

Aadhaar Number

</label>


<input


value={aadhaar}


onChange={(e)=>

setAadhaar(
e.target.value.replace(/\D/g,"")
)

}


placeholder="123456789012"


maxLength={12}


/>


</div>







<button

className="primary-btn"

onClick={generate}

>

Generate OTP

</button>









{

generatedOtp &&


<div className="form-group">


<label>

Enter OTP

</label>


<input


value={otp}


onChange={(e)=>

setOtp(e.target.value)

}


placeholder="6 digit OTP"


maxLength={6}


/>





<button

className="primary-btn"

onClick={verify}

>

Verify OTP

</button>



</div>


}









{

message &&


<div className={

risk

?

"success-box"

:

"error-box"

}

>


{message}


</div>


}








{

risk &&


<div className="success-box">


Risk Score:

<strong>

{" "}{risk}/100

</strong>


</div>


}









<button

className="primary-btn"

disabled={!risk}

onClick={nextStep}

>

Continue To Agreement

</button>





</div>


);


}