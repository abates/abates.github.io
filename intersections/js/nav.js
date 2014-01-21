
$(document).ready(function() {
  var pages = [
    ['index.html', 'Home'],
    ['intersection.html', 'The Intersection'],
    ['plot.html', 'Plot'],
    ['characters.html', 'Characters'],
    ['contact.html', 'Contact'],
  ];

  var navbar = $('#navbar');
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);

  for (var i=0; i<pages.length; i++) {
    var item;
    if (pages[i][0] == filename) {
      item = $('<li class="active">');
    } else {
      item = $('<li>');
    }
    item.html("<a href='" + pages[i][0] + "'>" + pages[i][1] + '</a>');
    navbar.append(item);
  }
});
