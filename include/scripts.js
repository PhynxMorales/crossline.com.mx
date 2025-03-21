/*!
 * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
console.log("Create by: [Github] PhynxMorales ");

$(document).ready(function () {
  $("#modal1").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

// jquery ready start
$(document).ready(function () {
  // jQuery code

  $(document).on("click", ".dropdown-item", function (e) {
    e.stopPropagation();
  });

  if ($(window).width() < 992) {
    $(".dropdown-item a").click(function (e) {
      e.preventDefault();
      if ($(this).next(".submenu").length) {
        $(this).next(".submenu").toggle();
      }
      $(".dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".submenu").hide();
      });
    });
  }
}); // jquery end

$(document).ready(function () {
  $("#youtubeVideo").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#youtubeVideo2").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#youtubeVideo3").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#youtubeVideo4").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#youtubeVideo5").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#youtubeVideo6").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#boton1").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});
$(document).ready(function () {
  $("#boton2").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});
$(document).ready(function () {
  $("#boton3").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});
$(document).ready(function () {
  $("#boton4").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});
$(document).ready(function () {
  $("#boton5").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

function menu() {
  document.getElementById("menu").classList.add("navbar-down");
}
document.getElementById("menu").onclick = function () {
  menu();
};

$(document).ready(function () {
  setTimeout(function () {
    $("#mostrarmodal").modal("show");
  }, 5000);
  // Close modal on button click
  $(".btn").click(function () {
    $("#mostrarmodal").modal("hide");
  });
});

var nav = document.querySelector("nav");
var dropdown = document.getElementById("navbarSupportedContent");
var menu = document.getElementById("menu");
var logo = document.getElementById("logo");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-navbar-light", "shadow", "p-0");
    logo.classList.add("logo-collapse");
  } else {
    nav.classList.remove("bg-navbar-light", "shadow", "p-0");
    logo.classList.remove("logo-collapse");
  }
});
