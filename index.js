var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

function dayOfBirth() {
    var birthDate = document.getElementById("dateOfBirth").value;
    var date = new Date(birthDate);
    var dayOfBirth = date.getDay();
    //get gender
    var genders = document.getElementsByName('gender');
    var gender_value;
    for (var i = 0; i < genders.length; i++) {
        if (genders[0].checked) {
            gender_value = "female";
        }
        if (genders[1].checked) {
            gender_value = "male";
        }
    }
    switch (gender_value) {
        case "female":
            if (dayOfBirth == 0) {
                alert("You Were you born on" + day[0] + "and your Akhan name is" + femaleNames[0]);
            }
            if (dayOfBirth == 1) {
                alert("You Were you born on" + day[1] + "and your Akhan name is" + femaleNames[1]);
            }
            if (dayOfBirth == 2) {
                alert("You Were you born on" + day[2] + "and your Akhan name is" + femaleNames[2]);
            }
            if (dayOfBirth == 3) {
                alert("You Were you born on" + day[3] + "and your Akhan name is" + femaleNames[3]);
            }
            if (dayOfBirth == 4) {
                alert("You Were you born on" + day[4] + "and your Akhan name is" + femaleNames[4]);
            }
            if (dayOfBirth == 5) {
                alert("You Were you born on" + day[5] + "and your Akhan name is" + femaleNames[5]);
            }
            if (dayOfBirth == 6) {
                alert("You Were you born on" + day[6] + "and your Akhan name is" + femaleNames[6]);
            }
            break;
        case "male":
            if (dayOfBirth == 0) {
                alert("You Were you born on" + day[0] + "and your Akhan name is" + maleNames[0]);
            }
            if (dayOfBirth == 1) {
                alert("You Were you born on" + day[1] + "and your Akhan name is" + maleNames[1]);
            }
            if (dayOfBirth == 2) {
                alert("You Were you born on" + day[2] + "and your Akhan name is" + maleNames[2]);
            }
            if (dayOfBirth == 3) {
                alert("You Were you born on" + day[3] + "and your Akhan name is" + maleNames[3]);
            }
            if (dayOfBirth == 4) {
                alert("You Were you born on" + day[4] + "and your Akhan name is" + maleNames[4]);
            }
            if (dayOfBirth == 5) {
                alert("You Were you born on" + day[5] + "and your Akhan name is" + maleNames[5]);
            }
            if (dayOfBirth == 6) {
                alert("You Were you born on" + day[6] + "and your Akhan name is" + maleNames[6]);
            }
            break;
        default:
    }


}