// reveal animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  
  // animated text
  var words = ['Hi I like HTML', 'I also like css', 'I like python', 'Hi i like HTML'],
  part,
  i = 1,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
var wordflick = function () {
setInterval(function () {
  if (forwards) {
    if (offset >= words[i].length) {
      ++skip_count;
      if (skip_count == skip_delay) {
        forwards = false;
        skip_count = 0;
      }
    }
  }
  else {
    if (offset == 1) {
      forwards = true;
      i++;
      offset = 1;
      if (i >= len) {
        i = 1;
      }
    }
  }
  part = words[i].substr(0, offset);
  if (skip_count == 0) {
    if (forwards) {
      offset++;
    }
    else {
      offset--;
    }
  }
  $('.word').text(part);
},speed);
};

$(document).ready(function () {
wordflick();
});

