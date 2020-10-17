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

  var border1 = document.getElementById("password");
  var border2 = document.getElementById("confirmPassword");
  var border3 = document.getElementById("red");

 
  border1.style.borderTop = "1px solid  black";
  border2.style.borderTop = "1px solid  black";
  border3.style.display = "none";

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

function alertRed(){
  var border1 = document.getElementById("password");
  var border2 = document.getElementById("confirmPassword");
  var border3 = document.getElementById("red");
  border1.style.borderTop = "4px solid rgba(255, 78, 98, 1)";
  border2.style.borderTop = "4px solid rgba(255, 78, 98, 1)";
  border3.style.display = "block";
}

function connectIfAcceptable(evt){
  if(verifyCheckbox() == true){
    if(checkFilled() == true){
      if(checkPassword() == true){
        addAccount(evt);
        openPopup();
        
      }
      else{
        alertRed();
      }
    }
    else{
      alertRed();
    }
  }
  else{
    alertRed();
  }
}


const addAccount = (ev)=>{
  ev.preventDefault();
  let json = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }
  document.forms[0].reset();
  

  let postRequest = new Request("http://127.0.0.1:3000/", {method: 'POST', body: JSON.stringify(json)})

  fetch(postRequest)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })

}

