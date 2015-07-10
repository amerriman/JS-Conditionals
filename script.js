window.onload = function(){
  var phoneNum = prompt("Please enter your phone number.");
if (phoneNum.charAt(3)==="-" && phoneNum.charAt(7)==="-"){
  alert("Thanks for the valid phone number!");}
  else {
  alert("Do it right the first time please.");
}

var bDay = prompt("Please enter your birthday.");
if (bDay.charAt(2)==="/" && bDay.charAt(5)==="/" && bDay.length === 6){
  alert("Great, you know your birthday!")}
  else {
    alert("Do it right the first time please.")}

var postCode = prompt("Please enter your postal code.");
if(postCode.length === 5 || postCode.length === 10 && postCode.charAt(5) === "-") {
  alert("Thanks!")}
  else {
    alert("Do it right the first time please.")
  }

  var state = prompt("Please enter the state you are in.");
    if(state ===state.toUpperCase() && state.length === 2 ) {
      alert("Thanks!")}
    else {
      alert("Do it right the first time please.")
    }

  var mar = prompt("Are you married?");
    if(mar.toUpperCase() === "YES" || mar.toUpperCase() === "NO") {
      alert("Great!")}
    else {
      alert("That doesn't answer the question!")
    }



};
