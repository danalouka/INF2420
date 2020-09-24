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
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
} 

function closeForm() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";

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
