$('#open-auth').click(function() {
  $('.auth').toggle();
});
$(document).on('click', function(e) {
  if ($(e.target).closest("#open-auth").length === 1 || $(e.target).closest(".auth").length === 1) {
    e.stopPropagation();
  } else $('.auth').hide();
  
});