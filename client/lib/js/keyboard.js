$(function(){
	var $write = $('#commands'),
		shift = false,
		capslock = false;

	$('.key').click(function(){
		var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
			$('#metadata').hide();
		// Delete
		if ($this.hasClass('clear')) {
			var html = $write.html();

			$write.html(html.substr(0, html.length - 1));
			return false;
		}
		// Uppercase letter
		if ($this.hasClass('uppercase')) character = character.toUpperCase();
		if ($this.hasClass('spacebutton')){
			console.log("spacebutton clicked");
			character = ' ';
		}


		// Add the character
		$write.html($write.html() + character);
	});
});
