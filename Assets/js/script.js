// Global declared variables
var saveButtonEl9 = $("#save-btn-9");
var saveButtonEl10 = $("#save-btn-10");
var saveButtonEl11 = $("#save-btn-11");
var saveButtonEl12 = $("#save-btn-12");
var saveButtonEl13 = $("#save-btn-13");
var saveButtonEl14 = $("#save-btn-14");
var saveButtonEl15 = $("#save-btn-15");
var saveButtonEl16 = $("#save-btn-16");
var saveButtonEl17 = $("#save-btn-17");

// initialize page
function init() {
  var now = dayjs();
  var todayEl = $("#currentDay");

  getSavedEvents();
  printDay(now, todayEl);
  colorHour(now);
}

// displays current date in header
function printDay (now, todayEl) {
  todayEl.text(now.format("dddd, MMMM DD"));
}

// applies CSS to each hour based on what time of day it is past = red; current = gray; future = green
function colorHour(now) {
  var hr9El = $("#hour-9");
  var hr10El = $("#hour-10");
  var hr11El = $("#hour-11");
  var hr12El = $("#hour-12");
  var hr13El = $("#hour-13");
  var hr14El = $("#hour-14");
  var hr15El = $("#hour-15");
  var hr16El = $("#hour-16");
  var hr17El = $("#hour-17");


// check for what the current hour is and apply css
  if (now.format("H") < 9) {
    hr9El.addClass("future");
    hr10El.addClass("future");
    hr11El.addClass("future");
    hr12El.addClass("future");
    hr13El.addClass("future");
    hr14El.addClass("future");
    hr15El.addClass("future");
    hr16El.addClass("future");
    hr17El.addClass("future");
  }
    else if (now.format("H") == 9) {
      hr9El.addClass("present");
      hr10El.addClass("future");
      hr11El.addClass("future");
      hr12El.addClass("future");
      hr13El.addClass("future");
      hr14El.addClass("future");
      hr15El.addClass("future");
      hr16El.addClass("future");
      hr17El.addClass("future");
    }
      else if (now.format("H") == 10) {
        hr9El.addClass("past");
        hr10El.addClass("present");
        hr11El.addClass("future");
        hr12El.addClass("future");
        hr13El.addClass("future");
        hr14El.addClass("future");
        hr15El.addClass("future");
        hr16El.addClass("future");
        hr17El.addClass("future");
      }
        else if (now.format("H") == 11) {
          hr9El.addClass("past");
          hr10El.addClass("past");
          hr11El.addClass("present");
          hr12El.addClass("future");
          hr13El.addClass("future");
          hr14El.addClass("future");
          hr15El.addClass("future");
          hr16El.addClass("future");
          hr17El.addClass("future");    
        }   
          else if (now.format("H") == 12) {
            hr9El.addClass("past");
            hr10El.addClass("past");
            hr11El.addClass("past");
            hr12El.addClass("present");
            hr13El.addClass("future");
            hr14El.addClass("future");
            hr15El.addClass("future");
            hr16El.addClass("future");
            hr17El.addClass("future");
          }
            else if (now.format("H") == 13) {
              hr9El.addClass("past");
              hr10El.addClass("past");
              hr11El.addClass("past");
              hr12El.addClass("past");
              hr13El.addClass("present");
              hr14El.addClass("future");
              hr15El.addClass("future");
              hr16El.addClass("future");
              hr17El.addClass("future");  
            }   
              else if (now.format("H") == 14) {
                hr9El.addClass("past");
                hr10El.addClass("past");
                hr11El.addClass("past");
                hr12El.addClass("past");
                hr13El.addClass("past");
                hr14El.addClass("present");
                hr15El.addClass("future");
                hr16El.addClass("future");
                hr17El.addClass("future");    
              }
                else if (now.format("H") == 15) {
                  hr9El.addClass("past");
                  hr10El.addClass("past");
                  hr11El.addClass("past");
                  hr12El.addClass("past");
                  hr13El.addClass("past");
                  hr14El.addClass("past");
                  hr15El.addClass("present");
                  hr16El.addClass("future");
                  hr17El.addClass("future");          
                }
                  else if (now.format("H") == 16) {
                    hr9El.addClass("past");
                    hr10El.addClass("past");
                    hr11El.addClass("past");
                    hr12El.addClass("past");
                    hr13El.addClass("past");
                    hr14El.addClass("past");
                    hr15El.addClass("past");
                    hr16El.addClass("present");
                    hr17El.addClass("future");
                  }
                    else if (now.format("H") == 17) {
                      hr9El.addClass("past");
                      hr10El.addClass("past");
                      hr11El.addClass("past");
                      hr12El.addClass("past");
                      hr13El.addClass("past");
                      hr14El.addClass("past");
                      hr15El.addClass("past");
                      hr16El.addClass("past");
                      hr17El.addClass("present");
                    }
  else {
    hr9El.addClass("past");
    hr10El.addClass("past");
    hr11El.addClass("past");
    hr12El.addClass("past");
    hr13El.addClass("past");
    hr14El.addClass("past");
    hr15El.addClass("past");
    hr16El.addClass("past");
    hr17El.addClass("past");
  }
          
}

// retrieve any locally stored events
function getSavedEvents() {
  var taEl9 = $("#ta-9");
  var taEl10 = $("#ta-10");
  var taEl11 = $("#ta-11");
  var taEl12 = $("#ta-12");
  var taEl13 = $("#ta-13");
  var taEl14 = $("#ta-14");
  var taEl15 = $("#ta-15");
  var taEl16 = $("#ta-15");
  var taEl17 = $("#ta-15");
  ta9 = localStorage.getItem("event9");
  ta10 = localStorage.getItem("event10");
  ta11 = localStorage.getItem("event11");
  ta12 = localStorage.getItem("event12");
  ta13 = localStorage.getItem("event13");
  ta14 = localStorage.getItem("event14");
  ta15 = localStorage.getItem("event15");
  ta16 = localStorage.getItem("event16");
  ta17 = localStorage.getItem("event17");
  taEl9.text(ta9);
  taEl10.text(ta10);
  taEl11.text(ta11);
  taEl12.text(ta12);
  taEl13.text(ta13);
  taEl14.text(ta14);
  taEl15.text(ta15);
  taEl16.text(ta16);
  taEl17.text(ta17);
  
}

// save event to local storage
function saveEvent9() {
  var localSEl = $("#update-localS");
  var taEl9 = $("#ta-9");
  localStorage.setItem("event9", taEl9.val());
  localSEl.prepend('<p class="lead text-center">Event Saved to Local Storage! </p>');
}

// save event to local storage
function saveEvent10() {
  var localSEl = $("#update-localS");
  var taEl10 = $("#ta-10");
  localStorage.setItem("event10", taEl10.val());
  localSEl.prepend('<p class="lead text-center">Event Saved to Local Storage! </p>');
}

// save event to local storage
function saveEvent11() {
  var localSEl = $("#update-localS");
  var taEl11 = $("#ta-11");
  localStorage.setItem("event11", taEl11.val());
  localSEl.prepend('<p class="lead text-center">Event Saved to Local Storage! </p>');
}

// save event to local storage
function saveEvent12() {
  var localSEl = $("#update-localS");
  var taEl12 = $("#ta-12");
  localStorage.setItem("event12", taEl12.val());
  localSEl.prepend('<p class="lead text-center">Event Saved to Local Storage! </p>');
}

// save event to local storage
function saveEvent13() {
  var localSEl = $("#update-localS");
  var taEl13 = $("#ta-13");
  localStorage.setItem("event13", taEl13.val());
  localSEl.prepend('<p class="lead text-center">Event Saved to Local Storage! </p>');
}

// save event to local storage
function saveEvent14() {
  var localSEl = $("#update-localS");
  var taEl14 = $("#ta-14");
  localStorage.setItem("event14", taEl14.val());
  localSEl.prepend('<p class="lead text-center">Event Saved to Local Storage! </p>');
}

// save event to local storage
function saveEvent15() {
  var localSEl = $("#update-localS");
  var taEl15 = $("#ta-15");
  localStorage.setItem("event15", taEl15.val());
  localSEl.prepend('<p class="lead text-center">Event Saved to Local Storage! </p>');
}

// save event to local storage
function saveEvent16() {
  var localSEl = $("#update-localS");
  var taEl16 = $("#ta-16");
  localStorage.setItem("event16", taEl16.val());
  localSEl.prepend('<p class="lead text-center">Event Saved to Local Storage! </p>');
}

// save event to local storage
function saveEvent17() {
  var localSEl = $("#update-localS");
  var taEl17 = $("#ta-17");
  localStorage.setItem("event17", taEl17.val());
  localSEl.prepend('<p class="lead text-center">Event Saved to Local Storage! </p>');
}

saveButtonEl9.on("click", saveEvent9);
saveButtonEl10.on("click", saveEvent10);
saveButtonEl11.on("click", saveEvent11);
saveButtonEl12.on("click", saveEvent12);
saveButtonEl13.on("click", saveEvent13);
saveButtonEl14.on("click", saveEvent14);
saveButtonEl15.on("click", saveEvent15);
saveButtonEl16.on("click", saveEvent16);
saveButtonEl17.on("click", saveEvent17);

init();
