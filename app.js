var baseUrl = 'https://jsonplaceholder.typicode.com/posts/'


// Write a function that fetches data for one blog post from the API

function getBlogPosts(url) {
  fetch(url)                          // 1. request data
    .then(function(response) {        // 2. Receive a response
      return response.json()          // 3. Turn response into JSON so we can work with it
    })
    .then(function(data) {
      // 4. Data is now formatted to JSON so we can do whatever we want
        // Must do it here because of async
        // Work with data in some way
        // Often DOM manipulation

      console.log(data)
      console.log(data.body)
      console.log(data.title)
      
      // Grab the right section of the DOM to append to
      var $posts = document.querySelector('.blog-posts')

      // Create a new element
      var newH1 = document.createElement('h1')

      // Add data to the element
      newH1.innerText = data.title

      // Append element to page
      $posts.appendChild(newH1)
      
    })
}

getBlogPosts(baseUrl + '1')


// Write a function that appends data from blog post to the page
  // Append to the section with class "posts"
  // title
  // body


// Write a function that fetches data for the entire list of blog posts



// Write a function that appends data from all blog posts to the page
  // Append to the section with class "posts"
  // title
  // body