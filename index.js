var days= [];
var 
function formValidation(){
    var month = document.getElementById("myForm").month.value;
    var year = document.getElementById("myForm").year.value;
    var date = document.getElementById("myForm").day.value;
    var gender = document.getElementsByName("gender")

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
