// When HTML doc has been read. 
// Main function changes the numerical character limit shown to the user 
// & updates this font color if number Exceeded maximum character limit.

$(document).ready(function() {
  
  const $tweetText = $("#tweet-text")
  
  $tweetText.on("keyup", function() {
    const characters = this.textLength;
    const $counter = $(this).closest("form").find(".counter");
    
    const charactersMax = 140;
    $counter.val(charactersMax - characters);

    if (characters > charactersMax) {
      $counter.css("color", "red");
    }
    if (characters < charactersMax) {
      $counter.css("color", "#545149");
    }
  })
});

