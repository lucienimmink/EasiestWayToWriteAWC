// Look for sections that have a fullscreen-img attribute and set this image as
// the body background image whenever this section is displayed.
// TODO insert image with reveal transition
var BGR;

$(document).ready(function () {
  // Hide all our fullscreen markdown images
  $("img[alt='']").hide();
  $('section img[alt="Fullscreen"]').hide();
});

function fullscreen(event) {
  var url = event.currentSlide.getAttribute("fullscreen-img");

  if (
    !url &&
    event.currentSlide.getElementsByClassName("fullscreen-img").length > 0
  ) {
    // Hack to allow us to specify fullscreen bleed images in Markdown
    url = event.currentSlide
      .getElementsByClassName("fullscreen-img")[0]
      .getAttribute("src");
  }

  // Also allow just setting an initial image with no alt tag to set fullscreen bg
  if (!url && $(event.currentSlide).find('img[alt="Fullscreen"]').length > 0) {
    url = $(event.currentSlide)
      .find('img[alt="Fullscreen"]')[0]
      .getAttribute("src");
  }

  if (url) {
    if (typeof BGR == "undefined") {
      // Store background value
      BGR = document.body.style.background;
    }

    // Set image from fullscreen-img attribute as body background
    document.body.style.backgroundImage = "url('" + url + "')";
    var size = event.currentSlide.getAttribute("fullscreen-size");
    if (size != "contain") {
      document.body.style.backgroundSize = "cover";
    } else {
      // Put image in 'contain' mode with black background
      // TODO store background color and use it. This is possible by regexping
      // the background property and replacing the 2nd value by the image url.
      // See http://www.w3schools.com/cssref/css3_pr_background.asp
      document.body.style.backgroundColor = "#000000";
      document.body.style.backgroundSize = "contain";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundPosition = "center center";
    }
  } else {
    if (typeof BGR != "undefined") {
      document.body.style.backgroundImage = "none";
      document.body.style.background = BGR;
    }
  }
}

Reveal.addEventListener(
  "ready",
  function (event) {
    fullscreen(event);
  },
  false
);

Reveal.addEventListener(
  "slidechanged",
  function (event) {
    fullscreen(event);
  },
  false
);
