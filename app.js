var baseUrl = 'https://jsonplaceholder.typicode.com/posts/'

// Write a function that fetches data for one blog post from the API
/**
 * @param {*} response
 * @returns Promise<Object>
 */
function status (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}
function json (response) {
  return response.json();
}

/**
 * @param {*} url
 * @returns Promise of JSON formatted data array
 */
function getBlogPosts(url) {
  return fetch(url)                          // 1. request data
    .then(status) /* resolve, or reject depending on response status */
    .then(json) /* return data in array of JSONs */
}

getBlogPosts(baseUrl).then(dataArray => {
  var $posts = document.querySelector('.posts');
  appendData(dataArray, $posts);
})


// Write a function that appends data from blog post to the page
  // Append to the section with class "posts"
  // title
  // body


// Write a function that fetches data for the entire list of blog posts



// Write a function that appends data from all blog posts to the page
  // Append to the section with class "posts"
  // h2: title
  // p: body
function appendData(dataArray, $target) {
  // var $target = document.querySelector('.posts');
  for (var i = 0; i < dataArray.length; i++) {
    var $li = document.createElement('li');
    var $h2 = document.createElement('h2');
    var $p = document.createElement('p');
    $h2.innerText = dataArray[i].title;
    $p.innerText = dataArray[i].body;
    $li.appendChild($h2);
    $li.appendChild($p);
    $target.appendChild($li);
    console.log($h2, $p);
  }
}



// Write a function that POSTs data to the API
