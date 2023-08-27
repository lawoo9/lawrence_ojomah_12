

try {
  
function validatepersonalinfo(){
let firstname = document.forms.personalinfo.firstname.value;
let othername = document.forms.personalinfo.othername.value;
let lastname = document.forms.personalinfo.lastname.value;
let uniqueid = document.forms.uniqueid.value;
let dateofbirth = document.forms.personalinfo.dateofbirth.value;
let sex = document.forms.personalinfo.sex.value;
let genderidentity = document.forms.personalinfo.genderidentity.value;
let pronouns(optional) = document.forms.personalinfo.pronouns(optional).value;

    // firstname validation
    if (!firstname) {
      document.getElementById('firstnameErr').innerHTML = "first name is required";
      document.forms.personalinfo.firstname.focus();
      return false;
    } else {
    document.getElementById('firstnameErr').innerHTML = ""; // Clear error message

  }

    // othername Form validation
    if (!person_completing) {
      document.getElementById('othernameErr').innerHTML = "other name is required";
      document.forms.personalinfo.othername.focus();
      return false;
    } else {
    document.getElementById('othernameErr').innerHTML = ""; // Clear error message
  }

    // lastname form validation
    if (!lastname) {
      document.getElementById('lastnameErr').innerHTML = "last name is required";
      document.forms.personalinfo.lastname.focus();
      return false;
    }else {
    document.getElementById('lastnameErr').innerHTML = ""; // Clear error message
  }

    // uniqueid form validation
    if (!uniqueid) {
      document.getElementById('uniqueidErr').innerHTML = "uniqueid is required";
      document.forms.personalinfo.uniqueid.focus();

      return false;
    } else {
    document.getElementById('uniqueidErr').innerHTML = "";
    }

      // Date of Birth validation
      let dob = document.forms.clinicinfo['date-of-birth'].value;
       if (!dob) {
        document.getElementById('doberr').innerHTML = "Date of Birth is required";
        document.forms.clinicinfo['date-of-birth'].focus();
        return false;
      } else {
        document.getElementById('doberr').innerHTML = "";
      }

      // Pregnancy Test Results validation (At least one option must be selected)
      let SexTestChecked = false;
      let SexTestOptions = document.querySelectorAll('input[name="test-results"]');
      for (let i = 0; i < pregnancyTestOptions.length; i++) {
        if (SexTestOptions[i].checked) {
          SexTestChecked = true;
          break;
        }
      }
      if (!SexTestChecked) {
        document.getElementById('sexErr').innerHTML = "Select at least one sex test result option";
        return false;
      } else {
         document.getElementById('sexErr').innerHTML = "";
      }

    // Gender identity validation (At least one gender must be selected)
    let genderidentityChecked = false;
    let genderOptions = document.querySelectorAll('input[name="gender"]');
    for (let i = 0; i < genderOptions.length; i++) {
      if (genderOptions[i].checked) {
        genderChecked = true;
        break;
      }
    }
    if (!genderChecked) {
      document.getElementById('gendererr').innerHTML = "Select at least one gender option";
      return false;
    } else {
       document.getElementById('gendererr').innerHTML = "";
    }

    // Ethnicity validation (At least one ethnicity must be selected)
    let ethnicityChecked = false;
    let ethnicityOptions = document.querySelectorAll('input[name="ethnicity"]');
    for (let i = 0; i < ethnicityOptions.length; i++) {
      if (ethnicityOptions[i].checked) {
        ethnicityChecked = true;
        break;
      }
    }
    if (!ethnicityChecked) {
      document.getElementById('ethnicityerr').innerHTML = "Select at least one ethnicity option";
      return false;
    } else {
       document.getElementById('ethnicityerr').innerHTML = "";
    }

    // Race validation (At least one race must be selected)
    let raceChecked = false;
    let raceOptions = document.querySelectorAll('input[name="race"]');
    for (let i = 0; i < raceOptions.length; i++) {
      if (raceOptions[i].checked) {
        raceChecked = true;
        break;
      }
    }
    if (!raceChecked) {
      document.getElementById('raceerr').innerHTML = "Select at least one race option";
      return false;
    } else {
       document.getElementById('raceerr').innerHTML = "";
    }

    // Gender of Sex Partner(s) validation (At least one option must be selected)
    let partnerGenderChecked = 
     false;
    let partnerGenderOptions = document.querySelectorAll('input[name="partner-gender"]');
    for (let i = 0; i < partnerGenderOptions.length; i++) {
      if (partnerGenderOptions[i].checked) {
        partnerGenderChecked = true;
        break;
      }
    }
    if (!partnerGenderChecked) {
      document.getElementById('partnergendererr').innerHTML = "Select at least one partner gender option";
      return false;
    } else {
       document.getElementById('partnergendererr').innerHTML = "";
    }

    // Previous HIV Testing validation (At least one option must be selected)
    let prevHIVChecked = false;
    let prevHIVOptions = document.querySelectorAll('input[name="previous-hiv"]');
    for (let i = 0; i < prevHIVOptions.length; i++) {
      if (prevHIVOptions[i].checked) {
        prevHIVChecked = true;
        break;
      }
    }
    if (!prevHIVChecked) {
      document.getElementById('prevhiverr').innerHTML = "Select at least one previous HIV testing option";
      return false;
    } else {
       document.getElementById('prevhiverr').innerHTML = "";
    }

    // Reason for Examination validation (At least one option must be selected)
    let reasonChecked = false;
    let reasonOptions = document.querySelectorAll('input[name="reason"]');
    for (let i = 0; i < reasonOptions.length; i++) {
      if (reasonOptions[i].checked) {
        reasonChecked = true;
        break;
      }
    }
    if (!reasonChecked) {
      document.getElementById('reasonerr').innerHTML = "Select at least one reason for examination option";
      return false;
    } {
       document.getElementById('reasonerr').innerHTML = "";
    }

    // Diagnosis validation (At least one option must be selected)
    let diagnosisChecked = false;
    let diagnosisOptions = document.querySelectorAll('input[name="diagnosis"]');
    for (let i = 0; i < diagnosisOptions.length; i++) {
      if (diagnosisOptions[i].checked) {
        diagnosisChecked = true;
        break;
      }
    }
    if (!diagnosisChecked) {
      document.getElementById('diagnosiserr').innerHTML = "Select at least one diagnosis option";
      return false;
    } {
       document.getElementById('diagnosiserr').innerHTML = "";
    }

    // Site validation (At least one option must be selected)
    let siteChecked = false;
    let siteOptions = document.querySelectorAll('input[name="site"]');
    for (let i = 0; i < siteOptions.length; i++) {
      if (siteOptions[i].checked) {
        siteChecked = true;
        break;
      }
    }
    if (!siteChecked) {
      document.getElementById('siteerr').innerHTML = "Select at least one site option";
      return false;
    } {
       document.getElementById('siteerr').innerHTML = "";
    }


    return true;
  }


} catch (e) {
  window.alert(err.message);
}






