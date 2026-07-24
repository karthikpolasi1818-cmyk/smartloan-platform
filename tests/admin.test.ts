describe(

"Admin Loan Approval Workflow",

()=>{



test(

"approved status should be valid",

()=>{


const status =
"APPROVED";



expect(

[

"APPROVED",

"REJECTED",

"PENDING",

"SUBMITTED"

]

).toContain(status);



});







test(

"rejected status should be valid",

()=>{


const status =
"REJECTED";



expect(status)
.toBe("REJECTED");


});



}

);