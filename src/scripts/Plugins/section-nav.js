// Init controller
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
}

for(var key in scenes) {
	// skip loop if the property is from prototype
	if (!scenes.hasOwnProperty(key)) continue;
	
	var obj = scenes[key];
	
	for (var prop in obj) {
		// skip loop if the property is from prototype
		if(!obj.hasOwnProperty(prop)) continue;
		
		new ScrollMagic.Scene({ triggerElement: '#' + prop })
		.setClassToggle('#' + obj[prop], 'active')
		.addTo(controller);
	}
}


// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {
	
	TweenMax.to(window, 0.5, {
		scrollTo : {
			y : target,
			autoKill : true // Allow scroll position to change outside itself
		},
		ease : Cubic.easeInOut
	});
	
});


//  Bind scroll to anchor links using Vanilla JavaScript
var anchor_nav = document.querySelector('.anchor-nav');

if(anchor_nav) {
	anchor_nav.addEventListener('click', function(e) {
		var target = e.target,
				id     = target.getAttribute('href');
		
		if(id !== null) {
			if(id.length > 0) {
				e.preventDefault();
				controller.scrollTo(id);
				
				if(window.history && window.history.pushState) {
					history.pushState("", document.title, id);
				}
			}
		}
	});
}
