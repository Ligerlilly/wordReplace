$(document).ready(function() {
  $("form#findReplace").on('submit', function() {
    var phrase = $('input#phrase').val();
    var toBeReplaced = $("input#toBeReplaced").val();
    var replacement = $('input#replacement').val();
    var result = findReplace(phrase, toBeReplaced, replacement);
    $('.result').text("Results: " + result).show();
    event.preventDefault();
  });
});
