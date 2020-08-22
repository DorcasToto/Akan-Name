var day= ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function formValidation(){
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var date = document.getElementById("day");
    var gender = document.getElementsByName("gender");

  if((month<=0) || (month>12) || (month=="")){
      alert("Provide a valid month");
      return false;
  }
  else if((year=="") ||(year<=1900 || year>2100)){
      alert("please provide a valid year");
      return false;
  }
  else if((date=="") || (date<=0 || date>31)){
     alert("please provide a valid day");
     return false;
  }
  else{
     // return true;
     alert("Okay");
  }
}
function calculateDayOfBirth(){
  var CC = (document.getElementById("year").value).substring(0,2);
  var YY = (document.getElementById("year").value).substring(2,4);
  var MM = document.getElementById("month");
  var DD = document.getElementById("date");
   //calculate day of the week
   d =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
   return(Math.floor(d));  
}

function getGender(){
    //generateName();
    var genders = document.getElementsByName('gender');
    var gender_value;
    for(var i = 0; i < genders.length; i++){
        if(genders[0].checked){
            gender_value ="female";
        }
        if(genders[1].checked){
            gender_value = "male";
        }
    }
    switch(gender_value){
        case "female":
            if(days==1){
                alert("You Were you born on"+day[0]+"and your Akhan name is"+femaleNames[0]);
            }
            if(days==2){
                alert("You Were you born on"+day[1]+"and your Akhan name is"+femaleNames[1]);
            }
            if(days==3){
                alert("You Were you born on"+day[2]+"and your Akhan name is"+femaleNames[2]);
            }
            if(days==4){
                alert("You Were you born on"+day[3]+"and your Akhan name is"+femaleNames[3]);
            }
            if(days==5){
                alert("You Were you born on"+day[4]+"and your Akhan name is"+femaleNames[4]);
            }
            if(days==6){
                alert("You Were you born on"+day[5]+"and your Akhan name is"+femaleNames[5]);
            }
            if(days==7){
                alert("You Were you born on"+day[6]+"and your Akhan name is"+femaleNames[6]);
            }
            break;
        case "male":
            if(days==1){
                alert("You Were you born on"+day[0]+"and your Akhan name is"+maleNames[0]);
            }
            if(days==2){
                alert("You Were you born on"+day[1]+"and your Akhan name is"+maleNames[1]);
            }
            if(days==3){
                alert("You Were you born on"+day[2]+"and your Akhan name is"+maleNames[2]);
            }
            if(days==4){
                alert("You Were you born on"+day[3]+"and your Akhan name is"+maleNames[3]);
            }
            if(days==5){
                alert("You Were you born on"+day[4]+"and your Akhan name is"+maleNames[4]);
            }
            if(days==6){
                alert("You Were you born on"+day[5]+"and your Akhan name is"+maleNames[5]);
            }
            if(days==7){
                alert("You Were you born on"+day[6]+"and your Akhan name is"+maleNames[6]);
            }
            break;
        default:
            
    }
}
    function generateName(){
        days = calculateDayOfBirth();
        getGender();
    }

    


