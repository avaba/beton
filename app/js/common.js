$(function() {

	$('.block8__slide').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	var action = 'click';
	var speed = "500";
	jQuery(document).ready(function($){
		$('li.q').on(action, function(){
			$(this).next().slideToggle(speed)
			.siblings('li.a').slideUp();
		});
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
			$('.head').addClass("sticky");
		}
		else{
			$('.head').removeClass("sticky");
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('#scroller').fadeIn();
		} else {
			$('#scroller').fadeOut();
		}
	});
	$('#scroller').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});

	$(".head__menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 84;
		$('body,html').animate({scrollTop: top}, 1500);
	});


	var wow = new WOW(
	{
		boxClass:     'wow', 
		animateClass: 'animated',
		offset:       200,
		mobile:       false
	}
	);
	wow.init();
});
