$(document).ready(function() {
  const currentYear = new Date().getFullYear();
  $('#footer').append(`<p>&copy; ${currentYear}</p>`);
});
