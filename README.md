# React Native Coding Challenge

In this challenge you're going to create a basic Reddit app with React Native

Reddit is a news website where registered users can submit posts or links to content that other users can vote and comment. Each of these posts is grouped into categories known as "subreddits".

Your web app should list the last posts of the r/pics subreddit.

To obtain the list of posts of a subreddit use the following URL:
https://api.reddit.com/r/pics/hot.json

For more information about the JSON structure see:
https://github.com/reddit/reddit/wiki/JSON 

## Requirements:

* Show a list of the posts in the r/pics subreddit
* Each post must show the following data: thumbnail image (if present), title, author, total number of votes (score), number of comments and date of creation
* Example layout:

  ![](showcase.gif)
* Once the user taps on a post navigate to the post’s URL in a WebView
* A brief explanation of your design and assumptions along with your code.

## What will we evaluate?

- Code quality
- Usage of patterns
- Networking code
- Language skills
- Project structure

## Extra points (not required):

- Unit tests
- Date of creation in a relative format (e.g. “1 day ago”)
- Ability to sort the posts list (“top”, “new”, “hot” or “controversial”)


## Notes:

* You can use [expo-cli](https://expo.io/learn) to bootstrap your app, or build your app from scratch . Keep in mind that the app must be easily executable.
* Send us your code in a zip file.

Good luck!
