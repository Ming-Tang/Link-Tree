
var relations = { };

function relate(from, to) {
  if (from in relations) {
    relations[from].push(to);
  } else {
    relations[from] = [ to ];
  }
  if (!(to in relations)) relations[to] = [ ];
}

chrome.extension.onRequest.addListener(function(req, sndr, sResp) {
  if (sndr.tab) {
    relate(req.from, req.to);
  }
});

