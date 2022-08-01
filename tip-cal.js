
//creating the function//

function calculatetip(){
  var billamt = document.getElementById("bill amt").value;
  var qal = document.getElementById("qal").value;
  var totalPeople = document.getElementById("total people").value;

  // validation check//

  if(billamt === "" || qal === 0){
      window.alert("be sure to enter valid information");
      return;
  }

  // value check//

  if(totalPeople === "" || totalPeople <= 1){
      totalPeople = 1;

      document.getElementById("each").style.display = "none";
  } else{
      document.getElementById("each").style.display = "block";
  }

  // calculations

  var total = (billamt * qal) / totalPeople;
  total = Math.round(total * 100) / 100; 
  total=total.toFixed(2);

  // display

  document.getElementById("totaltip").style.display = "block";
document.getElementById("tip").innerHTML = total;
}

document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function(){calculatetip(); };
  