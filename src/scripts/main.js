// Preloader start

$(window).load(function () {
	setTimeout(function () {
		$('.preloader').fadeOut('slow');
		readyPage();
	}, 2500);
});

// Preloader end

// Parallax amination start

function animateProducts(productAnimate, productCover, delayItem = 0.15, yAnimation = 60, topOffset = 500) {
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
	
	const tl = new TimelineMax()
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

function readyPage() {
	animateProducts('.main-cover .fade-up','.main-cover');
}

$(document).ready( function(){
	
	// Animation just for web start
	
	// var mobDev = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	var mobDev = false
	
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
	
	// Smooth anchor scroll start
	
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
	
	// Smooth anchor scroll end
	
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



