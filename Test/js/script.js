'use strict'; // Mode strict du JavaScript

/******* Affichage Date et Heure **********/

function horloge() {
  var today = new Date();

  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var hh = today.getHours();
  var mn = today.getMinutes();
  var ss = today.getSeconds()
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  if (hh < 10) {
    hh = '0' + hh;
  }
  if (mn < 10) {
    mn = '0' + mn;
  }
  if (ss < 10) {
    ss = '0' + ss;
  }

  today = dd + '/' + mm + '/' + yyyy;
  var hours = hh + ':' + mn + ':' + ss;

  var fullDate = today + ' ' + hours;
  document.getElementById("date").innerHTML = fullDate;
}
setInterval("horloge()", 1000);