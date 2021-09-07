

$(document).ready(function() {
  const $tweetText = $("#tweet-text")
  
  $tweetText.on("keyup", function() {
    const characters = this.textLength;
    console.log(characters);

    const $counter = $(this).closest("form").find(".counter");

    const charactersMax = 140;
    $counter.val(charactersMax - characters);

    if (characters > charactersMax) {
      console.log("The counter is below zero!!");
      $counter.css("color", "red");
    }
  })
});

