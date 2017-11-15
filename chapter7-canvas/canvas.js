window.onload = function() {
  var previewButton = document.getElementById("previewButton");
  previewButton.onclick = previewHandler;
  makeImage();
  var url = "http://localhost/~djCroissant/Canvas/tweets.json";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function() {
    if (request.status == 200) {
      updateTweets(request.responseText);
    };
  };
  request.send(null)
};
//****The Twitter API no long supports this code*********
//   var url = "https://api.twitter.com/1.1/statuses/user_timeline.json" +
//             "?screen_name=croissantdj" +
//             "&count=5";
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = function() {
//     if (request.status == 200) {
//       updateTweets(request.responseText);
//     } else {
//       alert(request.status);
//     };
//   };
//   request.send(null)
// }

// var selectObj = document.getElementById("foregroundColor");
// var index = selectObj.selectedIndex;
// var fgColor = selectObj[index].value;


function previewHandler() {
  var canvas = document.getElementById("tshirtCanvas");
  if (canvas.getContext) {
    var context = canvas.getContext("2d");
    fillBackgroundColor(context, canvas);

    var selectObj = document.getElementById("shape");
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;

    if (shape == "squares") {
      drawSquare(context, canvas);
    } else if (shape == "circles") {
      drawCircle(context, canvas);
    } else if (shape == "triangles") {
      drawTriangle(context, canvas);
    }
  } else {
    alert("upgrade yr gadam browser!");
    // this could also be a redirect or an image or a rolling eyes emoji or something
  }
  drawText(context, canvas);
  putABirdOnIt(context,canvas);
}

function makeImage() {
  var canvas = document.getElementById("tshirtCanvas");
  canvas.onclick = function() {
    window.location = canvas.toDataURL("image/png");
  }
}

function putABirdOnIt(context, canvas) {
  var twitterBird = new Image();
  twitterBird.src = "twitterBird.png";
  // putting this into an onload function ensures the png is available before executing
  twitterBird.onload = function () {
    context.drawImage(twitterBird, canvas.width - 90, 20, 70, 70);
  }
}

function drawText(context, canvas) {
  var selectObj = document.getElementById("foregroundColor");
  var index = selectObj.selectedIndex;
  var fgColor = selectObj[index].value;

  selectObj = document.getElementById("tweets");
  index = selectObj.selectedIndex;
  var text = selectObj[index].value;

  context.fillStyle = fgColor;
  context.font = "bold 1em sans-serif";
  context.textAlign = "left";
  context.fillText("I saw this Tweet", 20, 40, 400);

  context.font = "italic 1.3em sans-serif";
  context.fillText("\"" + text + "\"", 60, 100, 400);

  context.font = "bold 1em sans-serif";
  context.textAlign = "right";
  context.fillText("And all I got was this lousy t-shirt!",
                   canvas.width - 20, canvas.height - 40, 400);
}

function drawSquare(context, canvas) {
  var totalShapeArea = 0;
  var maxSize = 50;
  var minSize = 5;
  while (totalShapeArea < (canvas.width * canvas.height / 6)) {
    var xLocation = Math.random() * (canvas.width + maxSize / 2) - (maxSize / 2);
    var yLocation = Math.random() * (canvas.height + maxSize / 2) - (maxSize / 2);
    var shapeSize = Math.random() * (maxSize - minSize) + minSize;
    totalShapeArea += shapeSize * shapeSize;
    context.fillStyle = "lightblue";
    context.fillRect(xLocation, yLocation, shapeSize, shapeSize);
  }
}

function drawCircle(context, canvas) {
  var totalShapeArea = 0;
  var maxSize = 50;
  var minSize = 5;
  while (totalShapeArea < (canvas.width * canvas.height / 6)) {
    var xLocation = Math.random() * (canvas.width + maxSize) - (maxSize / 2);
    var yLocation = Math.random() * (canvas.height + maxSize) - (maxSize / 2);
    var shapeSize = Math.random() * (maxSize - minSize) + minSize;
    totalShapeArea += Math.PI * shapeSize * shapeSize / 4;
    context.beginPath();
    context.arc(xLocation, yLocation, shapeSize / 2, 0, 2 * Math.PI, true);
    context.fillStyle = "lightblue";
    context.fill();
  }
}

function drawTriangle(context, canvas) {
  var totalShapeArea = 0;
  var maxSize = 50;
  var minSize = 5;
  while (totalShapeArea < (canvas.width * canvas.height / 6)) {
    var xLocation = Math.random() * (canvas.width + maxSize) - (maxSize / 2);
    var yLocation = Math.random() * (canvas.height + maxSize) - (maxSize / 2);
    var shapeSize = Math.random() * (maxSize - minSize) + minSize;
    context.beginPath();
    context.moveTo(xLocation, yLocation);
    context.lineTo((xLocation - shapeSize / 2), (yLocation + shapeSize / 2 * Math.sqrt(3)));
    context.lineTo((xLocation + shapeSize / 2), (yLocation + shapeSize / 2 * Math.sqrt(3)));
    context.lineTo(xLocation, yLocation);
    context.closePath;
    // context.lineWidth = 1;
    // context.stroke();
    context.fillStyle = "lightblue";
    context.fill();
    totalShapeArea += shapeSize * shapeSize * Math.sqrt(3) / 4;
  }
}

function fillBackgroundColor(context, canvas) {
  var selectObj = document.getElementById("backgroundColor");
  var index = selectObj.selectedIndex;
  var bgColor = selectObj[index].value;
  context.fillStyle = bgColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function updateTweets(responseText) {
  var tweets = JSON.parse(responseText);
  var tweetList = document.getElementById("tweets");
  for (var i = 0; i < tweets.length; i++) {
    tweet = tweets[i];
    var option = document.createElement("option");
    option.value = tweet.text.replace("\"", "'");
    option.text = tweet.text;
    tweetList.options.add(option);
  }
  tweetList.selectedIndex = 0;
}
