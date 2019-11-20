// Preloader start

$(window).on('load', function () {
	setTimeout(function () {
		$('.preloader').fadeOut('slow');
		readyPage();
		animIconCover();
	}, 2500);
});

// Preloader end

// Parallax amination start

function animateProducts(productAnimate, productCover, delayItem = 0.15, yAnimation = 60, topOffset = 500, mainDelay = 0.15) {
	var productItem = productAnimate;
	var section = productCover;
	
	if (!$(section).length) {
		return;
	}
	
	TweenMax.set(productItem, {
		y: yAnimation,
		autoAlpha: 0,
		transition: 'none'
	});
	
	const tl = new TimelineMax({delay:mainDelay})
		.staggerTo(productItem, 0.4, {
			y: 0,
			autoAlpha: 1,
			clearProps: 'transition, transform, opacity',
			ease:Power1.easeOut
		}, delayItem);
	
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});
	
	// build scenes
	new ScrollMagic.Scene({
		triggerElement: section,
		offset: topOffset,
		reverse: true
	}).setTween(tl).addTo(controller);

}

function addAnimateClass(productAnimate, productCover, classItem = 'svg_anim', offsetTop = 500, durItem = 0.5, delayItem = 0.15) {
	
	var productItem = productAnimate;
	var section = productCover;
	
	if (!$(section).length) {
		return;
	}
	
	const tl = new TimelineMax()
	.staggerTo(productItem, durItem, {css:{className:'+=' + classItem}}, delayItem);
	
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});
	
	// build scenes
	new ScrollMagic.Scene({
		triggerElement: section,
		offset: offsetTop,
		reverse: true
	}).setTween(tl).addTo(controller);
	
}

// Parallax animation end

var mobDev = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
// var mobDev = false

function readyPage() {
	if (!mobDev) {
		animateProducts('.main-cover .fade-up', '.main-cover', 0.15, 60, 500, 0.5);
		// setTimeout( function () {
		
		// },1000);
	}
}

function animIconCover() {
	var coverIcon = document.querySelector('.mc_title-img');
	
	if(coverIcon) {
		setTimeout( function () {
			addAnimateClass('.mc_title-img .svg_item','.mc_title-img', 'svg_anim', 0);
		},1000);
	}
}

$(document).ready( function(){
	
	// Animation just for web start
	
	if (!mobDev) {
		animateProducts('.about-us .fade-up','.about-us');
		
		animateProducts('.idea-block .fade-up', '.idea-block');
		animateProducts('.compare .fade-up', '.compare');
		animateProducts('.trust .fade-up', '.trust', 0.25, 0);
		animateProducts('.cta .fade-up', '.cta');
		animateProducts('.footer .fade-up', '.footer', 0.25, 20, 100);
		
		// SVG Animate
		animateProducts('.about-us .fade-svg1','.about-us', 0.05, 0);
		animateProducts('.about-us .fade-svg2','.about-us', 0.05, 0);
	
		addAnimateClass('.solutions .svg_item','.solutions');
		
		addAnimateClass('.fresh-start .svg_item','.fresh-start');
		addAnimateClass('.next-chapter .svg_item','.next-chapter');
		addAnimateClass('.new-direction .svg_item','.new-direction');
		
		// Animations for list with svg icons start
		
		var info_steps = document.querySelector('.info-steps');
		
		if(info_steps) {
			for(let i = 0;i < $('.info-step').length; i++ ) {
				let stepI = i + 1;
				addAnimateClass('.info-step-' + stepI +' .svg_item','.info-step-' + stepI, 'svg_anim', 200);
			}
		}
		
		// Animations for list with svg icons end
		
	} else {
		$('body').addClass('show-svg');
	}
	
	// Animation just for web end
	
	// Slider start
	
	if($('.ow_slider-wrap').length) {
		function beforeZerro(mainCore, numClass) {
			let mainC = $(mainCore);
			let numC = $(numClass);
			let mainNum = mainC.find(numC[0]);
			
			mainNum.find('button').each( function() {
				let curentNum = $(this);
				let numSlide = curentNum.text();
				if (numSlide < 10) {
					curentNum.text('0' + numSlide);
				}
			});
		}
		
		$('.fs_slider').on('init', function(event, slick, direction){
			beforeZerro('.fs_slider','.slider-num');
		});
		
		$('.fs_slider').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 7000,
			dots: true,
			dotsClass: 'slider-num',
			// adaptiveHeight: true,
			focusOnSelect: true,
			prevArrow: '.fs_slider-prev',
			nextArrow: '.fs_slider-next'
		});
		
		$('.nc_slider').on('init', function(event, slick, direction){
			beforeZerro('.nc_slider', '.nc-num');
		});
		
		$('.nc_slider').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 7500,
			dots: true,
			dotsClass: 'nc-num',
			// adaptiveHeight: true,
			focusOnSelect: true,
			prevArrow: '.nc_slider-prev',
			nextArrow: '.nc_slider-next',
		});
		
		$('.nd_slider').on('init', function(event, slick, direction){
			beforeZerro('.nd_slider', '.nd-num');
		});
		
		$('.nd_slider').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 8000,
			dots: true,
			dotsClass: 'nd-num',
			// adaptiveHeight: true,
			focusOnSelect: true,
			prevArrow: '.nd_slider-prev',
			nextArrow: '.nd_slider-next',
		});
	}
	
	// Slider end
	
	// Smooth anchor scroll start
	
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
	
	// Smooth anchor scroll end
	
	// show/hide text btn start
	$('.tl_btn').on('click', function(e) {
		e.preventDefault();
		
		let $this = $(this),
				$parentClass = $('.tl_info'),
				$parent = $this.parent();
		
		if(!$parent.hasClass('active')) {
			$parentClass.removeClass('active');
			$parent.addClass('active');
		} else {
			$parentClass.removeClass('active');
		}
	});
	// show/hide text btn end
	
	// Hamburger menu start
	
	$('.hamburger').on('click', function() {
		var $containerMob = $('.main-header_d-menu');
		var $mobMenu = $('.mob-menu');
		var $thisActive = $containerMob.hasClass('active');
		
		if($thisActive) {
			$containerMob.removeClass('active');
			$mobMenu.removeClass('active');
		} else {
			$containerMob.addClass('active');
			$mobMenu.addClass('active');
		}
		
	});
	
	// Hamburger menu end
	
});



