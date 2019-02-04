var page = require('page');

var main = document.getElementById('main-container');

page('/', () =>
  main.innerHTML = 'Home <a href="/signup">Sign Up</a>'
);

page('/signup', () =>
  main.innerHTML = 'Signup <a href="/">Home</a>'
);

//Start page
page();
