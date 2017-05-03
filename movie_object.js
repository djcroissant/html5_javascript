var movie1 = {
  title: "Plan B",
  time: ["3:00pm", "7:00pm", "9:00pm"],
  rating: rating(2)
}

var movie2 = {
  title: "Plan D",
  time: ["1:00pm"],
  rating: rating(1)
}

function rating(num) {
  var stars = [1, 2, 3, 4, 5];
  return stars[num-1] + " stars";
}

function getNextShowingMovie(movie) {
  var now = new Date().getTime();
}
