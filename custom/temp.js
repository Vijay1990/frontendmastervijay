
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
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

// var aText = new Array(
//     "(function(){",
//     " ",
//     "   console.log('VIJAY P');",
//     " ",
//     " })();"
// );
var aText = ["<h1>ANGULAR</h1>", "<h2>TYPESCRIPT</h2>", "<h3>NODE JS</h3>", "<h4>FULLSTACK</h4>"]
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination1 = document.getElementById("typedtext0");
    var destination2 = document.getElementById("typedtext1");
    var destination3 = document.getElementById("typedtext2");
    //var destination4 = document.getElementById("typedtext3");
    //var destination5 = document.getElementById("typedtext4");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination1.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    destination2.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    destination3.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    //destination4.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    //destination5.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


// $(".typeText").each(function (intIndex) {

//     var l = Math.floor(Math.random() * 100);
//     var t = Math.floor(Math.random() * $('body').height());

//     $(this).css("left", l);
//     $(this).css("top", t);    

// });
function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function moveRandom(obj) {
    /* get container position and size
     * -- access method : cPos.top and cPos.left */
    var cPos = $('.about').offset();
    var cHeight = $('.about').height();
    var cWidth = $('.about').width();

    // get box padding (assume all padding have same value)
    var pad = parseInt($('.about').css('padding-top').replace('px', ''));

    // get movable box size
    var bHeight = obj.height();
    var bWidth = obj.width();

    // set maximum position
    maxY = cPos.top + cHeight - bHeight - pad;
    maxX = cPos.left + cWidth - bWidth - pad;

    // set minimum position
    minY = cPos.top + pad;
    minX = cPos.left + pad;

    // set new position			
    newY = randomFromTo(minY, maxY);
    newX = randomFromTo(minX, maxX);

    obj.animate({
        top: newY,
        left: newX
    }, 1000, function () {
        moveRandom(obj);
    });
}
$('.typeText').each(function () {
    moveRandom($(this));
});


typewriter();