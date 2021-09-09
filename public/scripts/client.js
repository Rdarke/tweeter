/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Hard coded tweet object - short term. 
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


$(document).ready(function() {

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
    </article>`

    console.log($tweet);
    return $tweet;
  };

  // Function is responsible for taking an array of tweet objects and then appending each one.
  const renderTweets = function(tweets) {
    for (let tweet in tweets) {
      const $tweet = createTweetElement(tweets[tweet]);
      $('#tweets-container').append($tweet);
    }
  }
  renderTweets(tweetData);

  const $form = $('#new-tweet-form');
  $form.on('submit', function(event) {
    event.preventDefault();
    console.log('the form has been submitted')

    const serializedData = $(this).serialize() 
    console.log(serializedData);

    $.post('/tweets', serializedData, (response) => {
      console.log(response)
    })
  });

});