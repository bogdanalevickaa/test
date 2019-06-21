$('.slider').slick({
	dots:true,
	infinite : false,
	// autoplay:true,
	// autoplaySpeed:2000,
})

$('document').ready(function(){
	$('#country_name').click(function(){
	 $('.countries').fadeToggle();
	});

	$('.option').on('click', function() {
		var counrty = this.value;
		$('#country_name').val(counrty);
		$('.countries').hide();
	});

});
