
var orders = { };
var relations = { };

function relate(from, to) {
  var order = 1;
  if (from in orders) {
    order = orders[from] + 1;
  } else {
    orders[from] = 0;
  }
  orders[to] = order;
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
