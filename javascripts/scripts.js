$(document).ready(function() {
	
	function slideshow() {
		var timeDelay = 2500;
		var selectedImage = $('img');
		var clickedOn = false;
		var randomTop;
		var randomLeft;
		var windowWidth;
		var windowHeight;
		var topPixels;
		var leftPixels;
		var imageWidth;
		var imageHeight;
		var maxTop;
		var maxLeft;
		var numberOfImages = $('img').length;
		
    for (var i = 0; i < numberOfImages; i++) {
    	imageWidth = $('img:first').width();
			imageHeight = $('img:first').height();
			if (imageWidth === 0) {		//in case browser fails to measure the images as it sometimes does
				imageWidth = 750;
			}
			if (imageHeight === 0) {
				imageHeight = 500;
			}
    	windowWidth = $(window).width();
			windowHeight = $(window).height();
			maxTop = windowHeight - imageHeight;
			maxLeft = windowWidth - imageWidth;
			if (windowWidth <= 800) {
				topPixels = "20px";
				leftPixels = "0px";
			} else {
				topPixels = randomNum(maxTop);
				leftPixels = randomNum(maxLeft);
			}
  		selectedImage.eq(i).css("top", topPixels).css("left", leftPixels)
  					.delay(timeDelay*2*i).fadeIn(timeDelay).delay(timeDelay).fadeOut(timeDelay, function(){
				if (i === numberOfImages) {
					i = 0;
					setTimeout(function() {
						slideshow();
					}, timeDelay * (numberOfImages * 2 - 2));
				}
			});     
    }
	}
	function randomNum(number) {
		randomPixels = Math.floor(Math.random() * number) + "px";
		return randomPixels;
	}
	slideshow();

});