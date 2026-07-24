import type { Metadata } from "next";

import "./globals.css";


import ToastProvider 
from "@/components/providers/ToastProvider";


import Navbar 
from "@/components/layout/Navbar";





export const metadata: Metadata = {


title: "SmartLoan Platform",


description:
"Digital loan application and management platform",



keywords:[

"SmartLoan",

"Loan",

"FinTech",

"Digital Banking",

"Finance"

],



authors:[

{

name:"SmartLoan Team"

}

]


};







export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {



return (


<html lang="en">


<body

className="
antialiased
bg-gray-50
"

>


<ToastProvider />


<Navbar />



{children}



</body>


</html>


);


}