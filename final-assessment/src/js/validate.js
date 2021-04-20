function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let latitude = document.querySelector("#latitude");
  let longtitude = document.querySelector("#longtitude");
  let latitudeNum = latitude.value.trim();
  let longtitudeNum = longtitude.value.trim();
  let latChecker = false;
  let longChecker = true;
  if (latitudeNum < -90 || latitudeNum > 90 || isNaN(latitudeNum)) {
    document.querySelector("#latLabel>span").innerHTML = "";
    document
      .querySelector("#latLabel>span")
      .append("* must be a valid Latitude (-90 to 90)");
    latChecker = false;
  } else {
    document.querySelector("#latLabel>span").innerHTML = "";
    latChecker = true;
  }
  if (longtitudeNum < -180 || longtitudeNum > 180 || isNaN(longtitudeNum)) {
    document.querySelector("#longLabel>span").innerHTML = "";
    document
      .querySelector("#longLabel>span")
      .append("* must be a valid Longtitude(-180 to 180)");
    longChecker = false;
  } else {
    document.querySelector("#longLabel>span").innerHTML = "";
    longChecker = true;
  }
  if (latChecker === false || longChecker === false) {
    event.preventDefault();
    return validate();
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
