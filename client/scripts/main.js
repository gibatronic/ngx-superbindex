var helper = require('./helper');
var List = require('./list');

var main = function() {
  var list = new List({
    list: JSON.parse(document.getElementById('data').textContent)
  });

  document.body.appendChild(list.$list);
};

document.addEventListener('DOMContentLoaded', main);
