var birthDay = document.getElementById('birthDay');
var birthMonth = document.getElementById('birthMonth');
var birthYear = document.getElementById('birthYear');
var expectDay = document.getElementById('expectDay');
var expectMonth = document.getElementById('expectMonth');
var expectYear = document.getElementById('expectYear');
var pError = document.getElementById('error');
var birthDate = document.getElementById("birthDate");
var expectDate = document.getElementById("expectDate");
var calcButton = document.getElementById("calculate");
var str = document.getElementById('str');
var result = document.getElementById('result');
var ageResult = document.getElementById('ageResult');

function reset() {
  birthDay.value = "";
  birthMonth.value= "";
  birthYear.value = "";
  expectDay.value = "";
  expectMonth.value = "";
  expectYear.value = "";
  str.textContent = "";
  ageResult.textContent = "";
  pError.textContent = "";
  pError.style.display = "none";
  birthDate.style.display = "block";
  expectDate.style.display = "block";
  calcButton.style.display = "inline-block";
}

function checkError() {
  if (birthDay.value == "" || birthMonth.value == "" ||
  birthYear.value == "" || expectDay.value == "" ||
  expectMonth.value == "" || expectYear.value == "") {
    if (pError.textContent == "") {
    var errorMsg = document.createTextNode("Invalid input");
    pError.appendChild(errorMsg);
    pError.style.display = "inline-block";
    }
    return -1;
  }
}

function setToday() {
  var nowDay = new Date().getDate();
  var nowMonth = new Date().getMonth();
  var nowYear = new Date().getFullYear();
  expectDay.value = nowDay;
  expectMonth.value = nowMonth+1;
  expectYear.value = nowYear;
}

function calculateAge() {
  str.textContent = "";
  result.textContent = "";
  var value = checkError();
  if (value == -1) {
    return
  }
  else {
    birth_day = parseInt(birthDay.value);
    birth_month = parseInt(birthMonth.value);
    birth_year = parseInt(birthYear.value);

    expect_day = parseInt(expectDay.value);
    expect_month = parseInt(expectMonth.value);
    expect_year = parseInt(expectYear.value);

    /* If birth month > expect month, then
    don't count this month and add 30 to the date
    subtract the date and get the remaining days */
    month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birth_day > expect_day) {
      expect_month = expect_month-1;
      expect_day = expect_day + month[birth_month-1];
    }

    /* If birth year > expect year, then
    don't count this year and add 12 to the month
    subtract and find out the difference */
    if (birth_month > expect_month) {
      expect_year = expect_year - 1;
      expect_month = expect_month + 12;
    }

    // Calculate Age
    var calculated_day = expect_day - birth_day;
    var calculated_month = expect_month - birth_month;
    var calculated_year = expect_year - birth_year;

    // Validate
    if (calculated_day < 0 || calculated_month < 0 ||
      calculated_year < 0 || calculated_day == "NaN" ||
      calculated_month == "NaN" || calculated_year == "NaN") {
        if (pError.textContent == "") {
          var validatemsg = document.createTextNode("Invalid date");
          pError.appendChild(validatemsg);
          pError.style.display = "inline-block";
        }
    }
    else {
      // Insert Result
      var t = document.createTextNode("Your age is");
      str.appendChild(t);
      result.appendChild(str);
      if (calculated_year > 0 && calculated_month > 0 && calculated_day > 0) {
        if (calculated_year > 1 && calculated_month > 1 && calculated_day > 1) {
          var rslt = document.createTextNode(calculated_year + " years " + calculated_month + " months " + calculated_day + " days");
        }
        else if (calculated_year > 1 && calculated_month > 1 && calculated_day == 1) {
          var rslt = document.createTextNode(calculated_year + " years " + calculated_month + " months " + calculated_day + " day");
        }
        else if (calculated_year > 1 && calculated_month == 1 && calculated_day > 1) {
          var rslt = document.createTextNode(calculated_year + " years " + calculated_month + " month " + calculated_day + " days");
        }
        else if (calculated_year == 1 && calculated_month > 1 && calculated_day > 1) {
          var rslt = document.createTextNode(calculated_year + " year " + calculated_month + " months " + calculated_day + " days");
        }
      }
      else if (calculated_year > 0 && calculated_month > 0 && calculated_day == 0) {
        if (calculated_year > 1 && calculated_month > 1) {
          var rslt = document.createTextNode(calculated_year + " years " + calculated_month + " months");
        }
        else if (calculated_year > 1 && calculated_month == 1) {
          var rslt = document.createTextNode(calculated_year + " years " + calculated_month + " month");
        }
        else if (calculated_year == 1 && calculated_month > 1) {
          var rslt = document.createTextNode(calculated_year + " year " + calculated_month + " months");
        }
      }
      else if (calculated_year > 0 && calculated_month == 0 && calculated_day > 0) {
        if (calculated_year > 1 && calculated_day > 1) {
          var rslt = document.createTextNode(calculated_year + " years " + calculated_day + " days");
        }
        else if (calculated_year > 1 && calculated_day == 1) {
          var rslt = document.createTextNode(calculated_year + " years " + calculated_day + " day");
        }
        else if (calculated_year == 1 && calculated_day > 1) {
          var rslt = document.createTextNode(calculated_year + " year " + calculated_day + " days");
        }
      }
      else if (calculated_year == 0 && calculated_month > 0 && calculated_day > 0) {
        if (calculated_month > 1 && calculated_day > 1) {
          var rslt = document.createTextNode(calculated_month + " months " + calculated_day + " days");
        }
        else if (calculated_month > 1 && calculated_day == 1) {
          var rslt = document.createTextNode(calculated_month + " months " + calculated_day + " day");
        }
        else if (calculated_month == 1 && calculated_day > 1) {
          var rslt = document.createTextNode(calculated_month + " month " + calculated_day + " days");
        }
      }
      else if (calculated_year == 0 && calculated_month == 0 && calculated_day > 0) {
        if (calculated_day > 1) {
          var rslt = document.createTextNode(calculated_day + " days");
        }
        else if (calculated_day == 1) {
          var rslt = document.createTextNode(calculated_day + " day");
        }
      }
      else if (calculated_year == 0 && calculated_month > 0 && calculated_day == 0) {
        if (calculated_month > 1) {
          var rslt = document.createTextNode(calculated_month + " months");
        }
        else if (calculated_month == 1) {
          var rslt = document.createTextNode(calculated_month + " month");
        }
      }
      else if (calculated_year > 0 && calculated_month == 0 && calculated_day == 0) {
        if (calculated_year > 1) {
          var rslt = document.createTextNode(calculated_year + " years");
        }
        else if (calculated_year == 1) {
          var rslt = document.createTextNode(calculated_year + " year");
        }
      }
      else if (calculated_year == 0 && calculated_month == 0 && calculated_day == 0) {
        var rslt = document.createTextNode("0 days");
      }
      ageResult.appendChild(rslt);
      result.appendChild(ageResult);

      //Toggle display
      pError.style.display = "none";
      birthDate.style.display = "none";
      expectDate.style.display = "none";
      calcButton.style.display = "none";
      result.style.display = "block";
    }

  console.log(calculated_year + " years");
  console.log(calculated_month + " months");
  console.log(calculated_day + " days");
  }
}

document.getElementById("reset").addEventListener("click", reset);
document.getElementById("setToday").addEventListener("click", setToday);
document.getElementById("calculate").addEventListener("click", calculateAge);


