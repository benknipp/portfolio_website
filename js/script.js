console.log("Hi, My name is Ben! Welcome to My Portfolio Site.");

$(document).ready(function () {
  $(".col-n-curl").on("mouseenter", function () {
      $(this).find(".project-details").fadeIn();
    });

  $(".col-n-curl").on("mouseleave", function () {
    $(this).find(".project-details").fadeOut();
    });
});
