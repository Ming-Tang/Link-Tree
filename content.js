var as = document.getElementsByTagName('a');

for (var i = 0; i < as.length; i ++) {
  as[i].addEventListener('click', (function(x) { // functional hack
    return function(_) {
      chrome.extension.sendRequest({
        from: window.location.toString(),
        to: x
      });
    }
  })(as[i].href), false);
}
