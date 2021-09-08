/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Hard coded tweet object - short term. 
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};


$(document).ready(function() {

  //Takes in a tweet object and returns a tweet <article> element. This element includes HTML tweet structure.
  const createTweetElement = function(obj) {
    const $tweet = `
    <article class ="tweet">
    <header>
      <div class="user-icon">
        <img class="avatar" src="https://i.imgur.com/73hZDYK.png" alt="Newton">
        <span class ="name" >Newton</span>
      </div>
        <div class="user-name">
          <span >@Newton </span> 
        </div>
    </header>
      <div class="content" ><p>Some quote about standing on giants!</p></div>
    <footer>
      <div class="timeline"> 10 Days ago</div>
        <div class="tweet-icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
    </div>
    </footer>
    </article>`

    return $tweet;
  };



});

// Test / driver code (temporary)....................
// to see what it looks like
console.log($tweet); 

// to add it to the page so we can make sure it's got all the right elements, classes, etc.
$('#tweets-container').append($tweet); 

// lecture example 
  // create single blog post node
  // const createBlog = (blog) => {
  //   const $title = $('<h2>').text(blog.title);
  //   const $body = $('<p>').text(blog.body);
  //   const $authorId = $('<p>').text(blog.userId);

  //   const $blog = $('<div>').addClass('blog-post');

  //   $blog.append($title, $body, $authorId)

  //   return $blog
  // }