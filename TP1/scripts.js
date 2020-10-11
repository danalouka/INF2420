(function() {
  
  var i, tabcontent, tablinks; 

  // doesn't display anything for every tab.
  tabcontent = document.getElementsByClassName("tabcontent");  
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // displays Tab "Mission" and classifying it as "active"
  document.getElementById("Mission").style.display = "block";

})();

function openTab(evt, TabName) {

  var i, tabcontent, tablinks; 
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openForm(){
  var modal = document.getElementsByClassName("modal");
  modal[0].style.display = "block";
} 

function closeForm() {
  var modal = document.getElementsByClassName("modal");
  modal[0].style.display = "none";

  var tabcontent = document.getElementsByClassName("tabcontent");  

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // displays Tab "Mission" and classifying it as "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  tabcontent[0].style.display = "block";
  tablinks[0].className += " active"; 
}

function checkPassword(){
  var inputs = document.getElementsByClassName("inputBox");
  var password = inputs[2].value;
  var confirmation = inputs[3].value;
  return(password == confirmation);
}
function verifyCheckbox(){
  var checkBox = document.getElementById("checkbox");
  if(checkBox.checked == true){
    return true;
  }
  return false;
}

function checkFilled(){
  var inputs = document.getElementsByClassName("inputBox");
  var i;
  var j = true;
  for(i = 0; i < 4; i++){
    if(inputs[i].value.length == 0){
      j = false;
    }
  }
  return j;
}
function openPopup(){
  var modal = document.getElementsByClassName("modal");
  modal[1].style.display = "block";
}

function closePopup() {
  var modal = document.getElementsByClassName("modal");
  modal[1].style.display = "none";

  var tabcontent = document.getElementsByClassName("tabcontent");  

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // displays Tab "Mission" and classifying it as "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  tabcontent[0].style.display = "block";
  tablinks[0].className += " active"; 
}


function checkIfAcceptable(){
  // if(verifyCheckbox() == true){
  //   if(checkFilled() == true){
  //     if(checkPassword() == true){
  //       alert("hackerman i'm in!");
  //       openPopup();
  //     }
  //     else{
  //       alert("password dont match");
  //     }
  //   }
  //   else{
  //     alert("pas filled");
  //   }
  // }
  // else{
  //   alert("not checked");
  // }
  openPopup();
}

