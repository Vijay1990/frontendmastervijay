$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
  });
  $('body').on('keyup', function (event) {

    var owl = $(".owl-carousel");
    owl.owlCarousel();
    // handle cursor keys
    if (event.keyCode == 37) {
      // go left
      owl.trigger('prev.owl.carousel');
    } else if (event.keyCode == 39) {
      // go right
      owl.trigger('next.owl.carousel');
    }

  });
});

var cords = [];
var smallPoint, largePoint;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);

  var res = 20;
  var countX = ceil(width / res) + 1;
  var countY = ceil(height / res) + 1;

  for (var j = 0; j < countY; j++) {
    for (var i = 0; i < countX; i++) {
      cords.push(new p5.Vector(res * i, res * j));
    }
  };

  noFill();
  stroke(255, 255, 255);
  smallPoint = 40;
  largePoint = 140;
  cnv.parent('container');
}

function draw() {
  background(30, 67, 137);
  for (var i = cords.length - 1; i >= 0; i--) {
    var h = calculateVector(cords[i].x - mouseX, cords[i].y - mouseY);
    line(
      cords[i].x,
      cords[i].y,
      cords[i].x + 18 * cos(h.heading()),
      cords[i].y + 18 * sin(h.heading())
    );
  };
  var pointillize = map(mouseX, mouseY, width, 300, 300);
  stroke(0, 0, 0);
  fill(0, 0, 0);
  ellipse(mouseX, mouseY, pointillize, pointillize);
}

function calculateVector(x, y) {
  return new p5.Vector(y - x, -x - y);
}

/**Charts */
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
    labels: ["TYPESCRIPT", "CSS", "HTML", 'JAVASCRIPT', "ANGULAR", "NODEJS", "REACT", "PHP"],
    datasets: [{
      label: "Technical Competency",
      backgroundColor: "#488ee2",
      borderColor: 'white',
      data: [0, 60, 80, 80, 80, 70, 60, 60, 70, 100],
    }]
  },

  // Configuration options go here
  options: {}
});