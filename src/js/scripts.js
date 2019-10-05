$(document).ready(function(){
	'use strict';

	let coverHeight = $('.cover').height();
	
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > coverHeight) {
			$('.navbar')
				.removeClass('bg-transparent')
				.addClass('bg-pre-transparent');
		} else {
			$('.navbar')
				.addClass('bg-transparent')
				.removeClass('bg-pre-transparent');
		}
	});

	let grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode  : 'masonry',
		filter      : $('.filter__link--active').attr('data-filter')
	});

	$('[data-filter]').on('click', function(e){
		e.preventDefault();

		let filter = $(this).attr('data-filter');

		grid.isotope({ filter: filter });

		$('[data-filter]').removeClass('filter__link--active');
		$(this).addClass('filter__link--active');		
	});

});