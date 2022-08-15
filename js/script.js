/*focus() Name input field */
var Input_name = document.getElementById("name");
Input_name.focus();
/*hide the other-job-role input text field when the page first loads */
var other_job_role =document.getElementById("other-job-role");
other_job_role.style.display ="none";
var job_title = document.getElementById("title");

/* if you select other the other-job-role input will be visible */
job_title.addEventListener("change",(event)=>{
const target = event.target;
// console.log("event",target.value);
if (target.value === "other"){
    other_job_role.style.display="";
 }
 else {
    other_job_role.style.display="none";
 }
});

/*hide the color select field when the page first loads */
var Select_color = document.getElementById("shirt-colors");
Select_color.style.display ="none";

var colors = document.getElementById("color");
console.log(colors);
/*When you select a design and choose a value*/ 
var shirt_design = document.getElementById("design");
shirt_design.addEventListener("change",(event)=>{

    const target = event.target;
    Select_color.style.display ="";
    if (target.value === "js puns"){
        colors[1].hidden = true;
        colors[2].hidden = true;
        colors[3].hidden = true;

        colors[4].hidden = false;
        colors[5].hidden = false;
        colors[6].hidden = false;
    
    }
    if(target.value === "heart js"){
        //  colors[1].hidden = false; : visible 
        colors[1].hidden = false;
        colors[2].hidden = false;
        colors[3].hidden = false;
     
        colors[4].hidden = true;
        colors[5].hidden = true;
        colors[6].hidden = true;
    }

});

const Activities = document.getElementById("activities");
var total_amount = 0;

Activities.addEventListener("change",(event)=>{

    const target = event.target
    var p_total =document.getElementById("activities-cost");
    p_total.innerHTML="";
    var HTML ="";
    var activitie_cost = target.getAttribute("data-cost");
    // activitie_cost is a string and we need to convert it to integer using parseInt method
    if (target.type =="checkbox"){
        if (target.checked){
        total_amount = total_amount + parseInt(activitie_cost);
        console.log(total_amount);
        }
        else{//the checkbox is unchecked
        total_amount = total_amount - parseInt(activitie_cost);
        }
    }

    HTML =`Total: ${total_amount}$`;
    p_total.innerHTML = HTML;


});
/*when the page loads for the first time, the only payement option should be credit card */

var payement =document.getElementById("payment");
payement.value ="credit-card"
var credit_card = document.getElementById("credit-card");
var paypal = document.getElementById("paypal");
paypal.style.display="none";
var bitcoin = document.getElementById("bitcoin");
bitcoin.style.display ="none";
console.log(payement.value);

payement.addEventListener("change",(event)=>{
    var target = event.target.value;
    console.log(target);
if(target === "paypal"){
     paypal.style.display="";
     bitcoin.style.display ="none";
     credit_card.style.display="none";
 }
if(target === "bitcoin"){
    bitcoin.style.display ="";
    paypal.style.display="none";
    credit_card.style.display="none";
 }
 if( target=== "credit-card"){
    credit_card.style.display="";
    bitcoin.style.display ="none";
    paypal.style.display="none";
 }

});





























































