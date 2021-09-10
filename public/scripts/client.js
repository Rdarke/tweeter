/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

    // Function is responsible for taking an array of tweet objects and then appending each one.
  const renderTweets = function(tweets) {
    for (let tweet in tweets) {
      const $tweet = createTweetElement(tweets[tweet]);
      $('#tweets-container').prepend($tweet);
    }
  };

  // AJAX to fetch (GET) data from the server.
  const fetchTweets = () => {

    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: (tweets) => {
        console.log("Tweets", tweets);
        renderTweets(tweets);
      },
      error: (err) => {
        console.log(`Error: ${err}`);
      }
    })
  };

  //Takes in a object and returns a tweet <article> element. This element includes HTML tweet structure.
  const createTweetElement = function(obj) {
    const $tweet = `
    <article class ="tweet">
    <header>
      <div class="user-icon">
        <img class="avatar" src="${obj.user.avatars}" alt="">
        <span class ="name"> ${obj.user.name} </span>
      </div>
        <div class="user-name">
          <span> ${obj.user.handle} </span> 
        </div>
    </header>
      <div class="content" ><p> ${obj.content.text} </p></div>
    <footer>
      <div class="timeline">${timeago.format(new Date(obj.created_at))}</div>
        <div class="tweet-icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
    </div>
    </footer>
    </article>`;

    return $tweet;
  };  

  
  const $form = $('#new-tweet-form');

  // AJAX for sending (POST) the tweet text to the server.
  $form.on('submit', function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();

    // Function hides error-message popups after a set time.
    const $hideMessage = $(function() {
      setTimeout(function() {
        $(".error-popup").hide()
          }, 8000);
      });
    
    if ($("#tweet-text").val() === "") {
      $hideMessage;
      return $(".error-popup").text("** Cannot Tweet an empty Tweet! **").slideDown().show();
      
    }
    
    if ($(".counter").val() < 0) {
      $hideMessage;
      return $(".error-popup").text("** 140 character limit exceeded! **").slideDown().show();
    }
    
  
    $.post('/tweets', serializedData, (response) => {
    $("#tweet-text").val('');
    $(".counter").val('140');
    location.reload();
    })

  });



  // Retrives all tweets from DB on load.
  fetchTweets();

});