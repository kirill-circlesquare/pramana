// Preloader start

'use strict';

$(window).on('load', function () {
	setTimeout(function () {
		$('.preloader').fadeOut('slow');
		readyPage();
		animIconCover();
	}, 2500);
});

// Preloader end

// Parallax amination start

function animateProducts(productAnimate, productCover) {
	var delayItem = arguments.length <= 2 || arguments[2] === undefined ? 0.15 : arguments[2];
	var yAnimation = arguments.length <= 3 || arguments[3] === undefined ? 60 : arguments[3];
	var topOffset = arguments.length <= 4 || arguments[4] === undefined ? 500 : arguments[4];
	var mainDelay = arguments.length <= 5 || arguments[5] === undefined ? 0.15 : arguments[5];

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

	var tl = new TimelineMax({ delay: mainDelay }).staggerTo(productItem, 0.4, {
		y: 0,
		autoAlpha: 1,
		clearProps: 'transition, transform, opacity',
		ease: Power1.easeOut
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

function addAnimateClass(productAnimate, productCover) {
	var classItem = arguments.length <= 2 || arguments[2] === undefined ? 'svg_anim' : arguments[2];
	var offsetTop = arguments.length <= 3 || arguments[3] === undefined ? 500 : arguments[3];
	var durItem = arguments.length <= 4 || arguments[4] === undefined ? 0.5 : arguments[4];
	var delayItem = arguments.length <= 5 || arguments[5] === undefined ? 0.15 : arguments[5];

	var productItem = productAnimate;
	var section = productCover;

	if (!$(section).length) {
		return;
	}

	var tl = new TimelineMax().staggerTo(productItem, durItem, { css: { className: '+=' + classItem } }, delayItem);

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

	if (coverIcon) {
		setTimeout(function () {
			addAnimateClass('.mc_title-img .svg_item', '.mc_title-img', 'svg_anim', 0);
			console.log('done');
		}, 1000);
	}
}

$(document).ready(function () {

	// Animation just for web start

	if (!mobDev) {
		animateProducts('.about-us .fade-up', '.about-us');

		animateProducts('.idea-block .fade-up', '.idea-block');
		animateProducts('.compare .fade-up', '.compare');
		animateProducts('.trust .fade-up', '.trust', 0.25, 0);
		animateProducts('.cta .fade-up', '.cta');
		animateProducts('.footer .fade-up', '.footer', 0.25, 20, 100);

		// SVG Animate
		animateProducts('.about-us .fade-svg1', '.about-us', 0.05, 0);
		animateProducts('.about-us .fade-svg2', '.about-us', 0.05, 0);

		addAnimateClass('.solutions .svg_item', '.solutions');

		addAnimateClass('.fresh-start .svg_item', '.fresh-start');
		addAnimateClass('.next-chapter .svg_item', '.next-chapter');
		addAnimateClass('.new-direction .svg_item', '.new-direction');

		// Animations for list with svg icons start

		var info_steps = document.querySelector('.info-steps');

		if (info_steps) {
			for (var i = 0; i < $('.info-step').length; i++) {
				var stepI = i + 1;
				addAnimateClass('.info-step-' + stepI + ' .svg_item', '.info-step-' + stepI, 'svg_anim', 200);
			}
		}

		// Animations for list with svg icons end
	} else {
			$('body').addClass('show-svg');
		}

	// Animation just for web end

	// Slider start

	function beforeZerro(mainCore, numClass) {
		var mainC = $(mainCore);
		var numC = $(numClass);
		var mainNum = mainC.find(numC[0]);

		console.log($(mainNum)[0]);

		mainNum.find('button').each(function () {
			var curentNum = $(this);
			var numSlide = curentNum.text();
			if (numSlide < 10) {
				curentNum.text('0' + numSlide);
			}
		});
	}

	$('.fs_slider').on('init', function (event, slick, direction) {
		beforeZerro('.fs_slider', '.slider-num');
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

	$('.nc_slider').on('init', function (event, slick, direction) {
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
		nextArrow: '.nc_slider-next'
	});

	$('.nd_slider').on('init', function (event, slick, direction) {
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
		nextArrow: '.nd_slider-next'
	});

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
	$('.tl_btn').on('click', function (e) {
		e.preventDefault();

		var $this = $(this),
		    $parentClass = $('.tl_info'),
		    $parent = $this.parent();

		if (!$parent.hasClass('active')) {
			$parentClass.removeClass('active');
			$parent.addClass('active');
		} else {
			$parentClass.removeClass('active');
		}
	});
	// show/hide text btn end

	// Hamburger menu start

	$('.hamburger').on('click', function () {
		var $containerMob = $('.main-header_d-menu');
		var $mobMenu = $('.mob-menu');
		var $thisActive = $containerMob.hasClass('active');

		if ($thisActive) {
			$containerMob.removeClass('active');
			$mobMenu.removeClass('active');
		} else {
			$containerMob.addClass('active');
			$mobMenu.addClass('active');
		}
	});

	// Hamburger menu end
});

; // Init controller
var controller = new ScrollMagic.Controller({
	globalSceneOptions: {
		duration: $('section').height() / 1.15,
		triggerHook: .025,
		reverse: true
	}
});

var scenes = {
	'scene1': {
		'section-1': 'anchor1'
	},
	'scene2': {
		'section-2': 'anchor2'
	},
	'scene3': {
		'section-3': 'anchor3'
	},
	'scene4': {
		'section-4': 'anchor4'
	},
	'scene5': {
		'section-5': 'anchor5'
	},
	'scene6': {
		'section-6': 'anchor6'
	},
	'scene7': {
		'section-7': 'anchor7'
	}
};

for (var key in scenes) {
	// skip loop if the property is from prototype
	if (!scenes.hasOwnProperty(key)) continue;

	var obj = scenes[key];

	for (var prop in obj) {
		// skip loop if the property is from prototype
		if (!obj.hasOwnProperty(prop)) continue;

		new ScrollMagic.Scene({ triggerElement: '#' + prop }).setClassToggle('#' + obj[prop], 'active').addTo(controller);
	}
}

// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function (target) {

	TweenMax.to(window, 0.5, {
		scrollTo: {
			y: target,
			autoKill: true // Allow scroll position to change outside itself
		},
		ease: Cubic.easeInOut
	});
});

//  Bind scroll to anchor links using Vanilla JavaScript
var anchor_nav = document.querySelector('.anchor-nav');

if (anchor_nav) {
	anchor_nav.addEventListener('click', function (e) {
		var target = e.target,
		    id = target.getAttribute('href');

		if (id !== null) {
			if (id.length > 0) {
				e.preventDefault();
				controller.scrollTo(id);

				if (window.history && window.history.pushState) {
					history.pushState("", document.title, id);
				}
			}
		}
	});
}