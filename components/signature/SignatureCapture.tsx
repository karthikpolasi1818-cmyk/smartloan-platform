"use client";


import {
  useRef,
  useState
} from "react";


import SignatureCanvas from "react-signature-canvas";


import {
  useApplicationStore
} from "@/store/applicationStore";





export default function SignatureCapture(){



const signatureRef =
useRef<any>(null);




const {


setSignature,

nextStep


}=useApplicationStore();





const [saved,setSaved] =
useState(false);


const [preview,setPreview] =
useState("");





function clearSignature(){


if(signatureRef.current){

signatureRef.current.clear();

}


setPreview("");

setSaved(false);


}








function saveSignature(){



if(
!signatureRef.current ||
signatureRef.current.isEmpty()
){


alert(
"Please provide your signature"
);


return;

}






const canvas =

signatureRef.current
.getTrimmedCanvas();





const image =

canvas.toDataURL(
"image/png"
);





setSignature(image);



setPreview(image);



setSaved(true);



}









return(


<div className="loan-card">





<h2 className="section-title">

Digital E-Signature

</h2>




<p className="subtitle">

Sign your loan agreement electronically

</p>








<div className="signature-wrapper">



<SignatureCanvas


ref={signatureRef}


penColor="#000000"


canvasProps={{

className:

"signature-canvas",


width:700,


height:250


}}


/>



</div>








<div className="flex gap-4">


<button


className="primary-btn"


onClick={clearSignature}


>

Clear

</button>







<button


className="primary-btn"


onClick={saveSignature}


>

Save Signature

</button>



</div>








{

saved &&


<>


<div className="success-box">


Signature saved successfully


</div>





<div className="loan-card">


<h3>

Signature Preview

</h3>



<img


src={preview}


alt="Digital Signature"


style={{

width:"350px",

border:"2px solid #2563eb",

borderRadius:"12px"

}}


/>



</div>







<button


className="primary-btn"


onClick={nextStep}


>

Submit For Approval

</button>



</>


}



</div>


);


}