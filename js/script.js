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

// var colors = document.querySelectorAll("#color");
var colors = document.getElementById("color");



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
        //colors[4].hidden = true; : caché
        colors[4].hidden = true;
        colors[5].hidden = true;
        colors[6].hidden = true;
    }

})
























































