
$(document).ready(function(){
	var yodapics = ['1.jpg','2.jpg','3.jpg','4.jpg', '5.jpg', '6.jpg'];
	$('#picdiv').css('background', "url(img/" + yodapics[0] + ")")
				.css('background-size', 'cover');
	$('button').on("click", function(){
		var input = encodeURIComponent($('input').val());
		if (input == "") {
			input = "You didn't enter anything.";
		}
		yodapics.push(yodapics.shift());
		$('#speechbubble').fadeOut(1300, function() {
				$('#picdiv').css('background', "url(img/" + yodapics[0] + ")")
							.css('background-size', 'cover');
		});
		$('button').text('...');
    	$('html,body').animate({scrollTop:0},600);
		$.ajax({
		    url: ('https://yoda.p.mashape.com/yoda?sentence=' + input), // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
		    type: 'GET', // The HTTP Method
		    data: {}, // Additional parameters here
		    datatype: 'json',
		    success: function(data) { 
		    	//Make the text appear in the speech bubble.
		    	$('#speechbubble').text(JSON.stringify(data)).fadeIn(500);
		    	$('button').text('Yodafy!'); 
				//Fade out current yoda, then fade in new yoda and text.
		    },
		    error: function(err) { 
		    	alert(err + "\n Something weird, you must have entered. Try again, you must.");
		    	$('button').text('Yodafy!'); 
		    },
		    beforeSend: function(xhr) {
				xhr.setRequestHeader("X-Mashape-Authorization", "awcYg6RUKvbAe9SUXsflpRoOgBlpwYLi"); // Enter here your Mashape key
		    }
		});
	})
	$('input').keypress(function (event) {
		if (event.which == 13) {
			$('button').trigger('click');
		}
	})
	$('button').on("mouseenter", function(){
		$(this).css('background-color', '#cfd5d9');
	})
	$('button').on("mouseleave", function(){
		$(this).css('background-color', '#bdc3c7');
	})
})