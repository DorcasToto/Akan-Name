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
var days = function(){
   CC = parseInt(document.getElementById("year").value).substring(0,2);
   YY = parseInt(document.getElementById("year").value).substring(2,4);
   MM = document.getElementById("month").value;
   DD = document.getElementById("date").value;
   //calculate day of the week
   d =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
   return(Math.floor(d));  
}

function getGender(){
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
           
    }

    }


