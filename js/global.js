// Execute the following code when the page is loaded
$(function () {

});




function RemoveDays() {
  $(".day").each(function(index) {
    if (!$(this).hasClass("event")) {
      $(this).css("display", "none");
    }
  });
}

function AddDays() {
  $(".day").each(function(index) {
    $(this).css("display", "table-cell");
  });
}

$(window).resize(function(){
  if ($(".day").css("float") == "left" ){
    RemoveDays();
  } else {
    AddDays()
  }

});
