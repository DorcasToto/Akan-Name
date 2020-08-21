var day= ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

var CC, YY, MM, DD,d;

function formValidation(){
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var date = document.getElementById("day").value;
    var gender = document.getElementsByName("gender").value;

  if((month<=0) || (month>12) || (!month=="")||(month.length==2)){
      window.alert("Your birth month should be between 0 and 12")
  }
  else if((!year=="") || (year>=1900 && year<=2020)){
      window.alert("please provide a valid year")
  }
  else if((!date=="") || (date>=1 && date<=31) || (date.length==2)){
     window.alert("please provide a valid day")
  }
}
function calculateDayofBirth(){
   CC = parseInt(document.getElementById("year").value).substring(0,2);
   YY = parseInt(document.getElementById("year").value).substring(2,4);
   MM = document.getElementById("month").value;
   DD = document.getElementById("date").value;
   //calculate day of the week
   d =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
   return(Math.floor(d));



    
    
}
