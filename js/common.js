head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	///menu-mob
	$('.header__btn').on('click',function(){
	    $(this).parent('.header').find('.header__menu').slideToggle('400');
	    $(this).toggleClass('is-open');
	});
	///
	console.log($('body').html());
});