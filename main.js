$(document).ready(function () {
  $(window).click(function () {
    $(".modal").fadeIn(800);
  });
  $(".close").click(function () {
    $(".modal").fadeOut(500);
  });
});
