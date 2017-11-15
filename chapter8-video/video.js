var position = 0;
var playlist;
var video;

window.onload = function() {
  // var playButton = document.getElementById("playButton");
  video = document.getElementById("video");
  var extension = getFormatExtension();
  if (extension == "none") {
    alert("This isn't working too well. Maybe read a book?")
  } else {
    playlist = ["video/preroll",
                "video/areyoupopular",
                "video/destinationearth"];
    playlist = playlist.map(function(a) { return a + extension;});
    video.addEventListener("ended", nextVideo, false);
    video.src = playlist[position];
    video.load();
    video.play();
  }
}

function getFormatExtension() {
  var videoTypes = ['video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                    'video/webm; codecs="vp8, vorbis"',
                    'video/ogg; codecs="theora, vorbis"'];
  var videoExtensions = [".mp4", ".webm", ".ogv"];

  var probablyExists = false;
  var index = 0;
  var extension = "none";

  while (probablyExists == false && index < videoTypes.length) {
    if (video.canPlayType(videoTypes[index]) == "probably") {
      extension = videoExtensions[index];
      probablyExists = true;
    } else if (video.canPlayType(videoTypes[index]) == "maybe" && extension == "none") {
      extension = videoExtensions[index];
    }
    index++;
  }
  return extension;
}

function nextVideo() {
  position++;
  if (position >= playlist.length) {
    position = 0;
  };
  video.src = playlist[position];
  video.load();
  video.play();
}

function playHandler(video) {
  if (video.canPlayType) {
    video.play();
  } else {
    alert("Something went wrong!");
  };
}

// function playlist() {
//   video = document.getElementById("video");
//   playlist = ["vid1", "vid2", "vid3"];
//   var source1 = document.getElementById("source1");
//   var source2 = document.getElementById("source2");
//   var source3 = document.getElementById("source3");
//   for (i = 0; i < playlist.length; i++) {
//     source1.src = "video/" + playlist[i] + ".mp4";
//     source2.src = "video/" + playlist[i] + ".webm";
//     source3.src = "video/" + playlist[i] + ".ogv";
//   };
// }
