//get sales
//sum sales
//update webpage

// window.onload = function() {
//   //var url = "http://gumball.wickedlysmart.com";
//   var url = "http://gumball.wickedlysmart.com";
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = function() {
//     if (request.status == 200) {
//       updateSales(request.responseText);
//     };
//   };
//   request.send(null)
// };

var lastReportTime = 0;

window.onload = init;

function init() {
  var interval = setInterval(handleRefresh, 3000);
  handleRefresh();
}

function handleRefresh() {
  var url = "http://gumball.wickedlysmart.com" +
            "?callback=updateSales" +
            "&lastreporttime=" + lastReportTime +
            "&random=" + (new Date()).getTime();
  var newScriptElement = document.createElement("script");
  newScriptElement.setAttribute("src", url);
  newScriptElement.setAttribute("id", "jsonp");
  var oldScriptElement = document.getElementById("jsonp");
  var head = document.getElementsByTagName("head")[0];
  if (oldScriptElement == null) {
    head.appendChild(newScriptElement);
  } else {
    head.replaceChild(newScriptElement, oldScriptElement);
  }
}

function updateSales(salesData) {
  //var salesData = JSON.parse(responseText);
  var salesDiv = document.getElementById("sales");
  for (i = 0; i < salesData.length; i++) {
    var sale = salesData[i];
    var div = document.createElement("div");
    div.setAttribute("class", "saleItem");
    div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
    if (salesDiv.childElementCount == 0) {
      salesDiv.appendChild(div);
    } else {
      salesDiv.insertBefore(div, salesDiv.firstChild);
    }
  }
  if (salesData.length > 0) {
    lastReportTime = salesData[salesData.length - 1].time;
  }
}
