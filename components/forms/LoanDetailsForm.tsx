"use client";


import {
useApplicationStore
} from "@/store/applicationStore";



export default function LoanDetailsForm(){



const {


loanType,

loanConfig,

amount,

tenure,

income,

setAmount,

setTenure,

setIncome,

nextStep


}=useApplicationStore();







const emi =

amount && tenure && loanConfig.rate

?


Math.round(

(

amount *

(loanConfig.rate/12/100)

*

Math.pow(
1+(loanConfig.rate/12/100),
tenure*12
)

)

/

(

Math.pow(
1+(loanConfig.rate/12/100),
tenure*12
)-1

)

)

:

0;







return(


<div className="loan-card">



<h2 className="section-title">

Loan Details

</h2>




<p className="subtitle">

{loanType} Loan Configuration

</p>







<div className="summary-box">


<p>

Interest Rate:

<strong>

{loanConfig.rate}%

</strong>

</p>




<p>

Maximum Amount:

<strong>

₹

{loanConfig.maxAmount.toLocaleString(
"en-IN"
)}

</strong>

</p>



<p>

Maximum Tenure:

<strong>

{loanConfig.maxTenure} Years

</strong>

</p>



</div>







<div className="form-group">


<label>

Loan Amount

</label>



<input


type="number"


value={amount}


min={loanConfig.minAmount}


max={loanConfig.maxAmount}



onChange={(e)=>

setAmount(
Number(e.target.value)
)

}



/>



</div>








<div className="form-group">


<label>

Tenure (Years)

</label>



<input


type="number"


value={tenure}


min="1"


max={loanConfig.maxTenure}



onChange={(e)=>

setTenure(
Number(e.target.value)
)

}



/>


</div>







<div className="form-group">


<label>

Monthly Income

</label>


<input


type="number"


value={income}


onChange={(e)=>

setIncome(
Number(e.target.value)
)

}



/>


</div>








<div className="success-box">


Estimated EMI:

<strong>

₹

{emi.toLocaleString(
"en-IN"
)}

</strong>


</div>







<button


className="primary-btn"


onClick={nextStep}


>

Continue Verification

</button>






</div>


);


}