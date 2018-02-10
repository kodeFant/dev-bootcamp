$('button').on("click", function() {
  $('div').slideToggle(100, function () {
   $(this).remove();
  });

});