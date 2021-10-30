/* Tip Calculator */

// Custom function

function calculateTip(){
    // Store the data of inputs

    var billAmount=document.getElementById("billAmount").value;
    var serviceQuality=document.getElementById("serviceQuality").value;
    var numPeople=document.getElementById("totalPeople").value;

    //Quick Validation
    if(billAmount=== "" || serviceQuality == 0){
        window.alert("Please enter some values to get this baby up and running!");
        return; // this will prevent the function from continuing.
    }

    // Check to see if this input is empty or less than or equal to 1.
    if(numPeople==="" || numPeople<=1){
        numPeople=1;

        document.getElementById("each").style.display="none";
    }
    else {
        document.getElementById("each").style.display="block";
    }

    //Calculate Tip
    var total=(billAmount*serviceQuality)/numPeople;
    total=Math.round(total*100)/100;
    total=total.toFixed(2);

    //Display the tip
    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML=total;

}


//Hide the tip amount on load

document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calculate").onclick=function(){calculateTip();};










//Cannot display the result after clicking submit button without using function.
/* My Method is wrong:-

var ba=document.getElementById("billAmount").value;

var tip=document.getElementById("serviceQuality").value;

var people=document.getElementById("totalPeople").value;

var totaltip=(ba*tip)/people;

document.getElementById("totalTip").style.display="block";
document.getElementById("tip").innerHTML=totaltip;

*/