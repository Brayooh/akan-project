var century, year, month, dayOfWeek, day;
//Get input
function getinput() {
  century = parseInt(document.getElementByid("century").value);
  year = parseInt(document.getElementByid("year").value);
  month = parseInt(document.getElementByid("month").value);
  dayOfMonth = parseInt(document.getElementByid("monthday").value);


  if (century == "") {
    alert("input the correct gender");
    return false;
  } else if (year == "") {
    alert("input the correct year");
    return false;
  } else if (month == "") {
    alert("input the correct month");
    return false;
  } else if (dayOfMonth == "") {
    alert("input the correct date");
    return false;
  }
}
//Calculate func
function calculateDay() {
  getinput();
  dayOfWeek = ((((century / 4) - 2 * century - 1) + ((5 * year / 4) + ((26 * (month + 1) / 10)) +
    dayOfMonth) % 7) - 1);
  console.log(dayOfWeek);//Test the calculateDay function
  return (Math.floor(dayOfWeek));
  if (dayOfWeek < 0) {
    dayOfWeek = dayOfWeek * -1;
  }
  else if (dayOfWeek > 0) {
    return dayOfWeek;
  }
}

//main caller func
function checkDayOfWeek() {
  day = calculateDay();
  checkGender();
  console.log("The function runs");//Test checkDayOfWeek function
}

//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let makeNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


//get selected radio button
function checkGender() {
  var gen = document.getElementsByName("rads");
  if (gen[0].checked == true) {
    var gender = "male";
  } else if (gen[1].checked == true) {
    var gender = "female";
  } else {
    console.log("pass");//Test the radio buttons
  }
  switch (gender) {
    case gender = "male":
      switch (day) {
        case (0 || -0):
          document.getElementByid("result").innerHTML = "The Day is on a sunday." + "" + "Your akan name is" + maleNames[0];
          break;
        case (1 || -1):
          document.getElementByid("result").innerHTML = "The day is on a monday." + "" + "Your akan name is" + maleNames[1];
          break;
        case (2 || -2):
          document.getElementByid("result").innerHTML = "The day is on tuesday." + "" + "Your akan name is" + maleNames[2];
          break;
        case (3 || -3):
          document.getElementByid("result").innerHTML = "The day is on a wednesday." + "" + "Your akan name is" + maleNames[3];
          break;
        case (4 || -4):
          document.getElementByid("result").innerHTML = "The day is on a thursday." + "" + "Your akan name is" + maleNames[4]
        case (5 || -5):
          document.getElementByid("result").innerHTML = "The day is on a friday." + "" + "Your akan name is" + maleNames[5]
          break;
        case (6 || -6):
          document.getElementByid("result").innerHTML = "The day is on a sturday." + "" + "Your akan name is" + maleNames[6];
          break;
        default:
        //console.console.log("pass");//Test male case
      }
      break;
    case gender = "female":
      switch (day) {
        case 0 || -0:
          document.getElementByid("result").innerHTML = "The day is on a sunday." + "" + "Your akan name is akosua";
          break;
        case 1 || -1:
          document.getElementByid("result").innerHTML = "The day is on a monday." + "" + "Your akan name is adwoa";
          break;
        case 2 || -2:
          document.getElementByid("result").innerHTML = "The day is on a tuesday." + "" + "Your akan name is abenaa";
          break;
        case 3 || -3:
          document.getElementByid("result").innerHTML = "The day is on a wednesday." + "" + "Your akan name is akua";
          break;
        case 4 || -4:
          document.getElementByid("result").innerHTML = "The day is on a thursaday." + "" + "your akan name is yaa";
          break;
        case 5 || -5:
          document.getElementByid("result").innerHTML = "The day is on a friday." + "" + "Your akan name is afua";
          break;
        case 6 || -6:
          document.getElementBtid("result").innerHTML = "The day is on a saturday." + "" + "Your akan name is ama";
          break;

      }
      break
    default:
      console.log("pass");//Test gender switch
  }
}