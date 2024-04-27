var $ = window.jQuery || null;
var resizeDone;
var csamChart;
var sextortionChart;

jQuery(document).ready(function($) {

	initStatChart();
	initGroomingChart();
	initSextortionChart();

	$('.expansion-container .indicator, .expansion-container h3').click(function(){
		$(this).parent().find('.expansion-text').slideToggle('400', function(){
			ScrollTrigger.refresh();
		});
		$(this).parent().toggleClass('active');
	});

	if ($(window).width() <= 768) {
		$('svg.desktop-only').each(function( index ) {
  			$(this).remove();
		});
	}

	$(window).resize(function () {
        clearTimeout(resizeDone);
	    resizeDone = setTimeout(function() {
	        resizedWindow();
	    }, 200);
    });

});

function resizedWindow(){

}

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

document.fonts.ready.then(function () {

	mediaQuery = window.matchMedia('(min-width: 769px)');
	initAnimations(mediaQuery);
	mediaQuery.addListener(initAnimations);
});

function initAnimations(mediaQuery) {

	if (Modernizr.touchevents) {
		ScrollSmoother.create({
			speed: 1,
			smoothTouch: 0.4,
			ignoreMobileResize: true,
			normalizeScroll: true,
			content: '#full-page',
		});
	} else {
		ScrollSmoother.create({
			speed: 0.5,
			smooth: 2,
			content: '#full-page',
		});
	}

	gsap.defaults({
		ease: 'slow(0.5,0.7,false)',
	});

	ScrollTrigger.defaults({
		ignoreMobileResize: true,
		invalidateOnRefresh: true,
		anticipatePin: 1,
		scrub: true,
		pinType: 'transform',
	});

	initIntroSection(mediaQuery);
	initStatsSection(mediaQuery);
	initTechnologySection(mediaQuery);
	initAbuseSection(mediaQuery);
	initGroomingSection(mediaQuery);
	initSextortionSection(mediaQuery);
	initAISection(mediaQuery);
	initSextingSection(mediaQuery);
}

function initIntroSection(mediaQuery) {

	$('#intro-section').addClass('loaded');
	var triggerContainer = $('#intro-section');

	if(mediaQuery.matches) {

		// Fade clouds in
		gsap.utils.toArray('#intro-section .cloud').forEach(function (elem, i) {
			gsap.to(elem, {
				top: function(){
					var dynamicTop = (i + 1) * 35;
					return dynamicTop;
				},
				opacity: 1,
				duration: 1.2,
			});
		});

		// Fade heading in and slide up
		gsap.fromTo('#intro-section .heading-container', {
			yPercent: 27,
			opacity: 0,
		}, {
			yPercent: -10,
			opacity: 1,
			ease: 'power1',
			duration: 1,
			delay: 0.4,
		});

		// Slide clouds down and fade out
		gsap.to('.cloud', {
			yPercent: 180,
			opacity: 0.08,
			scrollTrigger: {
				trigger: triggerContainer,
				start: '+=40',
				end: '+=14%'
			}
		});

		// Slide heading down
		gsap.to('#intro-section .heading-container', {
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=35%',
				end: '+=25%',
				pin: '#intro-section .heading-container',
			}
		});

		// Fade playset in and slide up
		gsap.fromTo('#intro-section .playset', {
			yPercent: 10,
			opacity: 0,
		}, {
			yPercent: -25,
			opacity: 1,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top+=10',
				end: '+=15%',
			}
		});

		 // Slide heading up
		gsap.to('#intro-section .heading-container', {
			yPercent: -25,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=63%',
				end: '+=5%',
			}
		});

		 // Slide playset down
		gsap.to('#intro-section .playset', {
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=35%',
				end: '+=120%',
				pin: '#intro-section .playset',
			}
		});

		 // Playset increase scale and slide left
		gsap.to('#intro-section .playset #playset-svg', {
			yPercent: -47,
			xPercent: -21,
			scale: 1.6,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=65%',
				end: '+=53%',
			}
		});

		// Fade out playset background
		gsap.fromTo('#intro-section #playset-svg #grass-tree, #intro-section #playset-svg #clouds', {
			opacity: 1,
		}, {
			opacity: 0,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=69%',
				end: '+=24%',
			}
		});

		// Fade out playset
		gsap.fromTo('#intro-section #playset-svg #playset', {
			opacity: 1,
		}, {
			opacity: 0,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=69%',
				end: '+=24%',
			}
		});

		// Fade in text heading
		gsap.to('#intro-section .text-container-heading', {
			opacity: 1,
			yPercent: -54,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=115%',
				end: '+=50',
			}
		});

		// Fade out girl on swing and fade in girl sitting alone
		gsap.to('#intro-section #playset-svg #girl-on-swing', {
			opacity: 0,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=122%',
				end: '+=120',
			}
		});
		gsap.to('#intro-section #playset-svg #pixelated-girl', {
			opacity: 1,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=122%',
				end: '+=120',
			}
		});

		// Fade out heading text area
		gsap.to('#intro-section .text-container-heading', {
			opacity: 0,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=163%',
				end: '+=40',
			}
		});

		// Slide up text area
		gsap.fromTo('#intro-section .text-container-content', {
			yPercent: 10,
			opacity: 0,
		}, {
			yPercent: -13,
			opacity: 1,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=152%',
				end: '+=22%',
			}
		});

		// Fade in last paragraph of text area
		gsap.to('#intro-section .text-container-content .last-step', {
			opacity: 1,
			yPercent: 60,
			scrollTrigger: {
				trigger: '#intro-section .text-container-content .last-step',
				start: 'middle middle-=15%',
				end: '+=20%',
			}
		});

		// Fade in Photo frame
		gsap.to('#intro-section #playset-svg #photo-frame', {
			opacity: 1,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=92%',
				end: '+=10%',
			}
		});

	} else {

		// Fade in playset
		gsap.fromTo('#intro-section .playset', {
			opacity: 0,
			yPercent: 7,
		}, {
			opacity: 1,
			yPercent: -4,
			scrollTrigger: {
				trigger: '#main-content',
				start: 'top top-=10%',
				end: '+=20%',
			}
		});

		// Slide playset down
		gsap.to('#intro-section .playset', {
			scrollTrigger: {
				trigger: '#intro-section .heading-container',
				start: 'bottom top+=160',
				end: '+=80%',
				pin: '#intro-section .playset',
			}
		});

		// Fade in text heading
		gsap.to('#intro-section .text-container-heading', {
			opacity: 1,
			y: -15,
			scrollTrigger: {
				trigger: '#intro-section .heading-container',
				start: 'bottom top-=15%',
				end: '+=10%',
			}
		});

		// Fade out girl on swing and fade in girl sitting alone
		gsap.to('#intro-section #girl_on_swing', {
			opacity: 0,
			scrollTrigger: {
				trigger: '#intro-section .heading-container',
				start: 'bottom top-=20%',
				end: '+=10%',
			}
		});
		gsap.to('#intro-section #girl_pixelated', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#intro-section .heading-container',
				start: 'bottom top-=20%',
				end: '+=10%',
			}
		});

		// Fade in text area
		gsap.to('#intro-section .text-container-content', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#intro-section .heading-container',
				start: 'bottom top-=75%',
				end: '+=20%',
			}
		});
	}
}

function initStatsSection(mediaQuery) {

	if(mediaQuery.matches) {

		// Slide stat out and fade in
		gsap.set('#stats-section .second-stat', { xPercent: -40, opacity: 0 });
		gsap.to('#stats-section .second-stat', {
			xPercent: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '#stats-section',
				start: 'top bottom-=65%',
				end: '+=20%',
			}
		});

		// Slide text container down
		gsap.to('#stats-section #stats-container3', {
			scrollTrigger: {
				trigger: '#stats-section #stats-container4',
				start: 'center center+=10%',
				end: '+=160%',
				pin: '#stats-section #stats-container3',
				pinSpacing: false,
			}
		});

		// Slide football container down
		gsap.to('#stats-section #stats-container4', {
			scrollTrigger: {
				trigger: '#stats-section #stats-container4',
				start: 'center center+=10%',
				end: '+=160%',
				pin: '#stats-section #stats-container4',
			}
		});

		// Fade in large football field with paper
		gsap.to('#stats-section #stats-container4 #football-field-with-paper', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=6%',
				end: '+=29%',
			}
		});

		// Fade out large plain football field
		gsap.to('#stats-section #stats-container4 #football-field-plain', {
			opacity: 0,
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=7%',
				end: '+=25%',
			}
		});

		// Slide text container down
		gsap.to('#stats-section #stats-container3', {
			yPercent: 280,
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=65%',
				end: '+=50%',
			}
		});

		// Fade in stat
		gsap.to('#stats-section #stats-container3 span.fade-in-text', {
			opacity: 1,
			xPercent: 1,
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=86%',
				end: '+=10%',
			}
		});

		// Add class to stat
		gsap.to('#stats-section #stats-container3 span.fade-in-text', {
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=84%',
				endTrigger: 'footer',
				end: 'bottom bottom',
				toggleClass: {targets: 'span.fade-in-text', className: 'show'}
			}
		});

		// Fade out period
		gsap.to('#stats-section #stats-container3 span.fade-out-text', {
			opacity: 0,
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=86%',
				end: '+=5%',
			}
		});

		// Fade out large plain football field
		gsap.to('#stats-section #stats-container4', {
			yPercent: -30,
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=80%',
				end: '+=29%'
			}
		});

		// Transform large football field
		gsap.to('#stats-section #stats-container4 #football-field-with-paper', {
			scale: .125,
			top: 0,
			left: 0,
			opacity: 0,
			transformOrigin: 'left top',
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=80%',
				end: '+=29%'
			}
		});

		// Fade in multple small fields
		gsap.to('#stats-container4 .small-fields .field', {
			opacity: 0.4,
			stagger: 0.15,
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=97%',
				end: '+=30%'
			}
		});

	} else {

		// Slide stat down and fade in
		gsap.set('#stats-section .second-stat', { yPercent: -100, opacity: 0 });
		gsap.to('#stats-section .second-stat', {
			yPercent: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '#stats-container1 .first-stat',
				start: 'center center',
				end: '+=20%',
			}
		});

		// Slide text container down
		gsap.to('#stats-section #stats-container3', {
			scrollTrigger: {
				trigger: '#stats-section #stats-container4',
				start: 'center center+=10%',
				end: '+=125%',
				pin: '#stats-section #stats-container3',
				pinSpacing: false,
			}
		});

		// Slide football container down
		gsap.to('#stats-section #stats-container4', {
			scrollTrigger: {
				trigger: '#stats-section #stats-container4',
				start: 'center center+=10%',
				end: '+=125%',
				pin: '#stats-section #stats-container4',
			}
		});

		// Fade in large football field with paper
		gsap.to('#stats-section #stats-container4 #football-field-with-paper', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				// start: 'bottom top-=6%',
				start: 'bottom top',
				end: '+=29%',
			}
		});

		// Fade out large plain football field
		gsap.to('#stats-section #stats-container4 #football-field-plain', {
			opacity: 0,
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				// start: 'bottom top-=7%',
				start: 'bottom top',
				end: '+=25%',
			}
		});

		// Transform large football field
		gsap.to('#stats-section #stats-container4 #football-field-with-paper', {
			scale: .125,
			top: 0,
			left: 0,
			opacity: 0,
			transformOrigin: 'left top',
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=50%',
				end: '+=29%'
			}
		});

		// Fade in stat
		gsap.to('#stats-section #stats-container4 .mobile-stat', {
			opacity: 1,
			transformOrigin: 'left top',
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=70%',
				end: '+=15%'
			}
		});

		// Fade in multple small fields
		gsap.to('#stats-container4 .small-fields .field', {
			opacity: 0.4,
			stagger: 0.15,
			scrollTrigger: {
				trigger: '#stats-section #stats-container2',
				start: 'bottom top-=67%',
				end: '+=30%'
			}
		});
	}
}

function initTechnologySection(mediaQuery) {


	// Fade in computer windows
	gsap.utils.toArray('#computer-monitor-illustration .computer-window').forEach(function (elem, i) {
		gsap.fromTo(elem, {
			opacity: 0,
			yPercent: -2,
		}, {
			opacity: 1,
			yPercent: 2,
			scrollTrigger: {
				trigger: '#technology-section #technology-container2',
				start: function() {
					var sectionSplit = $('#technology-section').height() / 7;
					var dynamicTrigger = '+=' + i * sectionSplit;
					if (i == 0) {
						dynamicTrigger = '+=60%';
					} 

					return dynamicTrigger;
				},
				end: '+=10%',
			}
		});
	});

	if(mediaQuery.matches) {

		// Slide computer monitor down
		gsap.to('#technology-section #computer-monitor-illustration', {
			scrollTrigger: {
				trigger: '#technology-section #technology-container2',
				start: 'center center',
				endTrigger: '#technology-container3',
				end: 'top bottom+=10%',
				pin: '#technology-section #computer-monitor-illustration',
				pinSpacing: false,
			}
		});

		// Pause text boxes
		gsap.utils.toArray('#technology-section .harm-type').forEach(function (elem, i) {
			gsap.to(elem, {
				scrollTrigger: {
					trigger: elem,
					start: function() {
						console.log(window.innerWidth);
						if ($(window).width() > 1008) {
							return 'center center-=14%';
						} else {
							return 'center center-=100'
						}
					},
					end: '+=25%',
					pin: elem,
					pinSpacing: false,
				}
			});
		});

	} else {

		// Slide computer monitor down
		gsap.to('#technology-section #computer-monitor-illustration', {
			scrollTrigger: {
				trigger: '#technology-section #technology-container1',
				start: 'bottom top+=10%',
				endTrigger: '#technology-container3',
				end: 'top bottom-=25%',
				pin: '#technology-section #computer-monitor-illustration',
				pinSpacing: false,
			}
		});

		// Pause text boxes
		gsap.utils.toArray('#technology-section .harm-type').forEach(function (elem, i) {
			gsap.to(elem, {
				opacity: 0,
				scrollTrigger: {
					trigger: elem,
					start: function() {
						var percentChange = $('#computer-monitor-illustration').height() / $(window).height() / 2 * 100;
						return 'center center+=' + percentChange + '%';
					},
					end: '+=25%',
					pin: elem,
					pinSpacing: false,
				}
			});
		});
	}

	// Grow connector line
	gsap.set('#technology-section .connecting-line', { scaleY: 0 });
	gsap.to('#technology-section .connecting-line', {
		scaleY: 300,
		scrollTrigger: {
			trigger: '#technology-section .connecting-line',
			start: 'top center+=10%',
			end: '+=350',
		}
	});
}

function initAbuseSection(mediaQuery) {

	if(mediaQuery.matches) {

		// Slide up neighborhood
		gsap.fromTo('#abuse-section #abuse-container2', {
			yPercent: 12,
		},{
			yPercent: -6,
			scrollTrigger: {
				trigger: '#abuse-section #abuse-container2',
				start: 'top bottom',
				end: '+=110%'
			}
		});
	}

	// Fade in groups of people
	gsap.to('#abuse-section #abuse-container2 .user-group', {
		opacity: 1,
		stagger: 1,
		scrollTrigger: {
			trigger: '#abuse-section #abuse-container2',
			start: 'center center+=45%',
			end: '+=30%',
		}
	});

	// Grow social sharing image
	gsap.fromTo('#abuse-section #abuse-container4', {
		scale: 0.7,
	}, {
		scale: 1.2,
		rotate: 18,
		scrollTrigger: {
			trigger: '#abuse-section #abuse-container4',
			start: 'top bottom+=20%',
			end: 'bottom bottom-=20%',
		}
	});
}

function initGroomingSection(mediaQuery) {

	var triggerContainer = $('#grooming-section');

	if(mediaQuery.matches) {

		// Slide main illustration down
		gsap.to('#grooming-section #grooming-split-screen', {
			yPercent: 20,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=36%',
				endTrigger: '#grooming-container6',
				end: 'top top-=64%',
				// pinnedContainer: '#grooming-container6',
				pin: '#grooming-split-screen',
				pinSpacing: false,
			}
		});

		// Fade out main illustration
		gsap.to('#grooming-section #grooming-split-screen #boy', {
			opacity: .3,
			scrollTrigger: {
				trigger: '#grooming-container3',
				start: 'top center+=20%',
				end: '+=10%',
			}
		});

		// // Slide boy illustration over
		gsap.set('#grooming-section #grooming-split-screen #boy', { xPercent: 20 });
		gsap.to('#grooming-section #grooming-split-screen #boy', {
			xPercent: -30,
			opacity: 1,
			scrollTrigger: {
				trigger: '#grooming-container5',
				start: 'top top+=10%',
				end: '+=30%',
			}
		});


		// Fade in dividing line
		gsap.set('#grooming-section #grooming-split-screen #split-line', { yPercent: 60, scaleY: 0 });
		gsap.to('#grooming-section #grooming-split-screen #split-line', {
			scaleY: 1,
			transformOrigin: 'center center',
			scrollTrigger: {
				trigger: '#grooming-container5',
				start: 'top top+=20%',
				end: '+=30%',
			}
		});

		// Fade in predator background
		gsap.to('#grooming-section #grooming-split-screen #predator rect', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#grooming-container5',
				start: 'top top+=20%',
				end: '+=10%',
			}
		});

		// Fade in predator
		gsap.set('#grooming-section #grooming-split-screen #predator path', { xPercent: 20 });
		gsap.to('#grooming-section #grooming-split-screen #predator path', {
			xPercent: -20,
			opacity: 1,
			scrollTrigger: {
				trigger: '#grooming-container5',
				start: 'top top+=20%',
				end: '+=30%',
			}
		});

		// Slide down text
		gsap.to('#grooming-section #grooming-container6', {
			scrollTrigger: {
				trigger: '#grooming-container6',
				start: 'top top+=5%',
				end: '+=65%',
				pin: '#grooming-section #grooming-container6',
			}
		});

		// Slide down stats and graph
		gsap.to('#grooming-section #grooming-container8', {
			scrollTrigger: {
				trigger: '#grooming-container8',
				start: 'top top+=28%',
				end: '+=100%',
				pin: '#grooming-section #grooming-container8 .inner-container',
			}
		});

		// Slide out graph 1
		gsap.to('#grooming-section #grooming-container8 #manipulation-chart1', {
			xPercent: -100,
			scrollTrigger: {
				trigger: '#grooming-container8',
				start: 'top top-=15%',
				end: '+=15%',
			}
		});

		// Slide in graph 2
		gsap.set('#grooming-section #grooming-container8 #manipulation-chart2', { xPercent: 100 });
		gsap.to('#grooming-section #grooming-container8 #manipulation-chart2', {
			xPercent: 0,
			scrollTrigger: {
				trigger: '#grooming-container8',
				start: 'top top-=15%',
				end: '+=15%',
			}
		});

		// Slide out graph 2
		gsap.to('#grooming-section #grooming-container8 #manipulation-chart2', {
			xPercent: -100,
			scrollTrigger: {
				trigger: '#grooming-container8',
				start: 'top top-=55%',
				end: '+=15%',
			}
		});

		// Slide in graph 3
		gsap.set('#grooming-section #grooming-container8 #manipulation-chart3', { xPercent: 100 });
		gsap.to('#grooming-section #grooming-container8 #manipulation-chart3', {
			xPercent: 0,
			scrollTrigger: {
				trigger: '#grooming-container8',
				start: 'top top-=55%',
				end: '+=15%',
			}
		});

	} else {

		// Fade main illustration in
		gsap.to('#grooming-section #grooming-container2 img', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#grooming-section',
				start: 'top center',
				end: 'top top+=10%',
			}
		});

		// Fade main illustration in
		gsap.to('#grooming-section #grooming-container6 img', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#grooming-section #grooming-container6',
				start: 'bottom bottom',
				end: 'top top+=10%',
			}
		});

		// Slide down stats and graph
		gsap.to('#grooming-section .chart-container', {
			scrollTrigger: {
				trigger: '#grooming-section .chart-container',
				start: 'top top+=130',
				end: '+=100%',
				pin: '#grooming-section .chart-container',
				pinSpacing: true,
			}
		});

		// Slide out graph 1
		gsap.to('#grooming-section #grooming-container8 #manipulation-chart1', {
			xPercent: -100,
			scrollTrigger: {
				trigger: '#grooming-container8 .stat-container',
				start: 'bottom top-=10%',
				end: '+=15%',
			}
		});

		// Slide in graph 2
		gsap.set('#grooming-section #grooming-container8 #manipulation-chart2', { xPercent: 100 });
		gsap.to('#grooming-section #grooming-container8 #manipulation-chart2', {
			xPercent: 0,
			scrollTrigger: {
				trigger: '#grooming-container8 .stat-container',
				start: 'bottom top-=13%',
				end: '+=15%',
			}
		});

		// Slide out graph 2
		gsap.to('#grooming-section #grooming-container8 #manipulation-chart2', {
			xPercent: -100,
			scrollTrigger: {
				trigger: '#grooming-container8 .stat-container',
				start: 'bottom top-=45%',
				end: '+=15%',
			}
		});

		// Slide in graph 3
		gsap.set('#grooming-section #grooming-container8 #manipulation-chart3', { xPercent: 100 });
		gsap.to('#grooming-section #grooming-container8 #manipulation-chart3', {
			xPercent: 0,
			scrollTrigger: {
				trigger: '#grooming-container8 .stat-container',
				start: 'bottom top-=49%',
				end: '+=15%',
			}
		});
	}

	gsap.to('#grooming-section #neighborhood-2-illustration #inset', {
		opacity: 1,
		scrollTrigger: {
			trigger: '#grooming-section #grooming-container9',
			start: function() {
				if (mediaQuery.matches) {
					return 'center center-=25%';
				} else {
					return 'center center-=10%';
				}
			},
			end: '+=18%',
		}
	});

	gsap.set('#grooming-section #neighborhood-2-illustration .warning-bubble', { scale: 0 });
	gsap.to('#grooming-section #neighborhood-2-illustration .warning-bubble', {
		scale: 1,
		stagger: 1.6,
		transformOrigin: 'right bottom',
		scrollTrigger: {
			trigger: '#grooming-section #grooming-container9',
			start: function() {
				if (mediaQuery.matches) {
					return 'top middle+=17%';
				} else {
					return 'center center-=2%';
				}
			},
			end: '+=30%',
		}
	});
}

function initSextortionSection(mediaQuery) {

	var triggerContainer = $('#sextortion-section');

	if(mediaQuery.matches) {

		// Slide group of kids down
		gsap.to('#sextortion-container2', {
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=30%',
				end: 'top bottom-=7%',
				endTrigger: '#sextortion-container7',
				pin: '#sextortion-container2',
				pinSpacing: false,
			}
		});

		// Fade out group svg
		gsap.to('#group-at-cafe-illustration #base-group', {
			opacity: 0.3,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=37%',
				end: '+=20%',
			}
		});

		// Transform out group svg
		gsap.to('#group-at-cafe-illustration #base-group', {
			scale: 1.2,
			yPercent: -15,
			opacity: 0,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=108%',
				end: '+=16%',
			}
		});

		// Fade/transform in girl in chair
		gsap.to('#group-at-cafe-illustration #girl-in-chair', {
			scale: 1.2,
			xPercent: 26,
			yPercent: -20,
			opacity: 1,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=108%',
				end: '+=16%',
			}
		});

		// Transform silhouette
		gsap.to('#group-at-cafe-illustration #silhouette', {
			scale: 1.2,
			xPercent: 26,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=105%',
				end: '+=16%',
			}
		});

		// Fade out girl in chair
		gsap.to('#group-at-cafe-illustration #girl-in-chair', {
			opacity: 0.3,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=145%',
				end: '+=15%',
			}
		});

		// Fade out girl in chair
		gsap.to('#group-at-cafe-illustration #girl-in-chair', {
			opacity: 0,
			scale: 2,
			yPercent: 3,
			transformOrigin: 'right top',
			scrollTrigger: {
				trigger: '#sextortion-container7',
				start: 'top bottom+=10%',
				end: '+=17%',
			}
		});

		// Fade in silhouette
		gsap.to('#group-at-cafe-illustration #silhouette', {
			opacity: 1,
			scale: 2.8,
			yPercent: function() {
				if ($(window).height() > 860) {
					console.log($(window).height());
					return 30;
				} else {
					return 0;
				}
			},
			transformOrigin: 'right top',
			scrollTrigger: {
				trigger: '#sextortion-container7',
				start: 'top bottom+=10%',
				end: '+=17%',
			}
		});

	} else {

		// Fade in group of kids
		gsap.to('#sextortion-section #sextortion-container2 img', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sextortion-section',
				start: 'top center',
				end: 'top top+=10%',
			}
		});

		// Fade in girl alone
		gsap.to('#sextortion-section #sextortion-container4 img', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sextortion-section #sextortion-container4',
				start: 'bottom bottom',
				end: 'top top+=10%',
			}
		});

		// Fade in silhouette
		gsap.to('#sextortion-section #sextortion-container6 img', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sextortion-section #sextortion-container6',
				start: 'top center+=20%',
				end: 'top top+=20%',
			}
		});

		// Fade/slide down stat
		gsap.set('#sextortion-section #sextortion-container6 > div:last-of-type', { yPercent: -100 });
		gsap.to('#sextortion-section #sextortion-container6 > div:last-of-type', {
			yPercent: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '#sextortion-section #sextortion-container6',
				start: 'top center+=15%',
				end: 'top top+=15%',
			}
		});
	}
}

function initAISection(mediaQuery) {

	var triggerContainer = $('#ai-section');

	if(mediaQuery.matches) {

		// Slide man at computer down and zoom in on monitor
		gsap.to('#adult_at_screen_illustration', {
			xPercent: -20,
			yPercent: -7,
			scale: 1.4,
			transformOrigin: 'center',
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=30%',
				end: '+=75%',
				pin: '#adult_at_screen_illustration',
			}
		});

		// Fade out office
		gsap.to('#ai-container2 #clipping-mask', {
			opacity: 1,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=35%',
				end: '+=35%',
			}
		});

		// Fade in screen
		gsap.to('#ai-container2 #computer-screen-bright', {
			opacity: 0.6,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=45%',
				end: '+=45%',
			}
		});

		// Slide computer monitor down
		gsap.to('#ai-container4 #computer-ai-photos-illustration', {
			scrollTrigger: {
				trigger: '#ai-container3 #polaroid-caption',
				start: 'top top+=5%',
				end: '+=170%',
				pin: '#computer-ai-photos-illustration',
			}
		});

		// Slide text down
		gsap.to('#ai-container3 #polaroid-caption', {
			scrollTrigger: {
				trigger: '#ai-container3 #polaroid-caption',
				start: 'top top+=5%',
				end: '+=170%',
				pin: '#ai-container3 #polaroid-caption',
				pinSpacing: false,
			}
		});

		// Fade in first picture
		gsap.to('#ai-container4 #computer-ai-photos-illustration #main-picture', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#ai-container3 #polaroid-caption',
				start: 'top top+=5%',
				end: '+=10%',
			}
		});

		// Fade in computer windows
		gsap.utils.toArray('#ai-container4 #computer-ai-photos-illustration .picture').forEach(function (elem, i) {
			gsap.fromTo(elem, {
				opacity: 0,
				yPercent: -2,
			}, {
				opacity: 1,
				yPercent: 2,
				scrollTrigger: {
						trigger: '#ai-container4',
					start: function() {
						var dynamicTrigger = '+=' + i * 7.2 + '%';

						if (i == 0) {
							dynamicTrigger = '+=5%';
						// } else if (i == 1) {
						// 	dynamicTrigger = '+=100%';
						}

						return dynamicTrigger;
					},
					end: '+=15%',
				}
			});
		});
	} else {

		// Slide man at computer down and zoom in on monitor
		gsap.to('#adult_at_screen_illustration', {
			xPercent: -25,
			yPercent: -10,
			scale: 2,
			transformOrigin: 'center',
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top',
				end: '+=55%',
				pin: '#adult_at_screen_illustration',
			}
		});

		// Fade out office
		gsap.to('#ai-container2 #clipping-mask', {
			opacity: 1,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=3%',
				end: '+=25%',
			}
		});

		// Fade in screen
		gsap.to('#ai-container2 #computer-screen-bright', {
			opacity: 0.6,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=10%',
				end: '+=35%',
			}
		});

		// Slide computer monitor down
		gsap.to('#ai-container4 #computer-ai-photos-illustration', {
			scrollTrigger: {
				trigger: '#ai-container3 #polaroid-caption',
				start: 'bottom top+=120',
				end: '+=50%',
				pin: '#computer-ai-photos-illustration',
			}
		});

		// Fade in first picture
		gsap.to('#ai-container4 #computer-ai-photos-illustration #main-picture', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#ai-container3 #polaroid-caption',
				start: 'top top+=125',
				end: '+=10%',
			}
		});

		// Fade in computer windows
		gsap.utils.toArray('#ai-container4 #computer-ai-photos-illustration .picture').forEach(function (elem, i) {
			gsap.fromTo(elem, {
				opacity: 0,
				yPercent: -2,
			}, {
				opacity: 1,
				yPercent: 2,
				scrollTrigger: {
					trigger: '#ai-container3 #polaroid-caption',
					start: function() {
						var dynamicTrigger = (i + 1) * 3;
						return 'top top-=' + dynamicTrigger + '%';
					},
					end: '+=15%',
				}
			});
		});
	}
}

function initSextingSection(mediaQuery) {

	var triggerContainer = $('#sexting-section');

	if(mediaQuery.matches) {

		// Slide group of kids down
		gsap.to('#sexting-container2 #kids-at-school-illustration', {
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=25%',
				end: '+=235%',
				pin: '#sexting-container2 #kids-at-school-illustration',
				pinSpacing: false,
			}
		});

		// Fade out group of kids
		gsap.to('#sexting-container2 #young-kids, #sexting-container2 #high-school-kids, #sexting-container2 #line', {
			opacity: .3,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=35%',
				end: '+=25%',
			}
		});

		// Slide young kids out
		gsap.to('#sexting-container2 #kids-at-school-illustration #young-kids', {
			xPercent: 50,
			opacity: 0,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=71%',
				end: '+=45%',
			}
		});

		// Fade out dividing line
		gsap.to('#sexting-container2 #kids-at-school-illustration #line', {
			scaleY: 0,
			transformOrigin: 'center top',
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=71%',
				end: '+=15%',
			}
		});

		// Slide older kids to center
		gsap.to('#sexting-container2 #kids-at-school-illustration #high-school-kids', {
			xPercent: 30,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=78%',
				end: '+=35%',
			}
		});

		// Fade out older kids
		gsap.to('#sexting-container2 #high-school-kids .fade-cover-shape', {
			opacity: .9,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=103%',
				end: '+=20%',
			}
		});

		// Fade in single older kid
		gsap.to('#sexting-container2 #high-school-kids', {
			opacity: 1,
			transformOrigin: 'center top',
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=108%',
				end: '+=23%',
			}
		});

		// Lock first stat
		gsap.to('#sexting-container4', {
			scrollTrigger: {
				trigger: '#sexting-container4',
				start: 'center center',
				end: '+=37%',
				pin: '#sexting-container4',
			}
		});

		// Slide older kids to left
		gsap.to('#sexting-container2 #kids-at-school-illustration #high-school-kids', {
			xPercent: 0,
			opacity: 0.1,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=154%',
				end: '+=45%',
			}
		});

		// Fade out older kids
		gsap.to('#sexting-container2 #kids-at-school-illustration #high-school-kids .fade-cover-shape', {
			opacity: 0,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=154%',
				end: '+=45%',
			}
		});

		// Slide young kids in
		gsap.to('#sexting-container2 #kids-at-school-illustration #young-kids', {
			xPercent: 0,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=172%',
				end: '+=20%',
			}
		});

		// Fade young kids in
		gsap.to('#sexting-container2 #kids-at-school-illustration #young-kids', {
			opacity: 1,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=180%',
				end: '+=30%',
			}
		});

		// Fade out young kids
		gsap.to('#sexting-container2 #kids-at-school-illustration #young-kids .fade-cover-shape', {
			opacity: .9,
			scrollTrigger: {
				trigger: triggerContainer,
				start: 'top top-=200%',
				end: '+=20%',
			}
		});

		// Lock second stat
		gsap.to('#sexting-container5', {
			scrollTrigger: {
				trigger: '#sexting-container5',
				start: 'center center',
				// end: '+=35%',
				endTrigger: triggerContainer,
				end: 'top top-=260%',
				pin: '#sexting-container5',
			}
		});

		// Lock bleachers
		gsap.to('#sexting-container6 .inner-container', {
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top+=15%',
				end: '+=150%',
				pin: '#sexting-container6 .inner-container',
			}
		});

		// Fade out all kids on bleachers
		gsap.set('#sexting-container6 #kids-all', { opacity: 1 });
		gsap.to('#sexting-container6 #kids-all', {
			opacity: 0,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=25%',
				end: '+=30%',
			}
		});

		// Fade in 47% kids
		gsap.to('#sexting-container6 #kids-47', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=25%',
				end: '+=30%',
			}
		});

		// Fade and slide in stat
		gsap.set('#sexting-container6 #stat-1', { xPercent: -30 });
		gsap.to('#sexting-container6 #stat-1', {
			opacity: 1,
			xPercent: 0,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=22%',
				end: '+=20%',
			}
		});

		// Fade out 47% kids
		gsap.to('#sexting-container6 #kids-47', {
			opacity: 0,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=70%',
				end: '+=30%',
			}
		});

		// Fade in 36% kids
		gsap.to('#sexting-container6 #kids-36', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=70%',
				end: '+=30%',
			}
		});

		// Fade out first text
		gsap.set('#sexting-container6 .second-text', { yPercent: -100 });
		gsap.to('#sexting-container6 .first-text', {
			opacity: 0,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=65%',
				end: '+=20%',
			}
		});

		// Fade in second text
		gsap.to('#sexting-container6 .second-text', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=65%',
				end: '+=20%',
			}
		});

		gsap.to('#sexting-container6 #stat-1', {
			opacity: 0,
			xPercent: -30,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=65%',
				end: '+=20%',
			}
		});

		// Fade and slide out stat
		gsap.set('#sexting-container6 #stat-2', { xPercent: -120 });
		gsap.to('#sexting-container6 #stat-2', {
			opacity: 1,
			xPercent: -100,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=65%',
				end: '+=30%',
			}
		});

	} else {

		// Fade in group of kids
		gsap.to('#sexting-container2 img', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sexting-section',
				start: 'top center-=20%',
				end: 'top top+=10%',
			}
		});

		// Slide in first stat
		gsap.set('#sexting-container4', { opacity: 0, xPercent: -100 });
		gsap.to('#sexting-container4', {
			opacity: 1,
			xPercent: 0,
			scrollTrigger: {
				trigger: '#sexting-container4',
				start: 'top center+=15%',
				end: '+=25%',
			}
		});

		// Slide in second stat
		gsap.set('#sexting-container5', { opacity: 0, xPercent: 100 });
		gsap.to('#sexting-container5', {
			opacity: 1,
			xPercent: 0,
			scrollTrigger: {
				trigger: '#sexting-container5',
				start: 'top center+=15%',
				end: '+=25%',
			}
		});

		// Lock bleachers
		gsap.to('#sexting-container6 .inner-container', {
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top+=80',
				end: '+=145%',
				pin: '#sexting-container6 .inner-container',
			}
		});

		// Fade out all kids on bleachers
		gsap.set('#sexting-container6 #kids-all', { opacity: 1 });
		gsap.to('#sexting-container6 #kids-all', {
			opacity: 0,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=18%',
				end: '+=20%',
			}
		});

		// Fade in 47% kids
		gsap.to('#sexting-container6 #kids-47', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=18%',
				end: '+=20%',
			}
		});

		// Fade in stat
		gsap.to('#sexting-container6 #stat-1', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=10%',
				end: '+=20%',
			}
		});

		// Fade out 47% kids
		gsap.to('#sexting-container6 #kids-47', {
			opacity: 0,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=68%',
				end: '+=20%',
			}
		});

		// Fade in 36% kids
		gsap.to('#sexting-container6 #kids-36', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=68%',
				end: '+=20%',
			}
		});

		// Fade out first text
		gsap.set('#sexting-container6 .second-text', { yPercent: -100 });
		gsap.to('#sexting-container6 .first-text', {
			opacity: 0,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=70%',
				end: '+=20%',
			}
		});

		// Fade in second text
		gsap.to('#sexting-container6 .second-text', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=70%',
				end: '+=20%',
			}
		});

		gsap.to('#sexting-container6 #stat-1', {
			opacity: 0,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=70%',
				end: '+=20%',
			}
		});

		// Fade in stat
		gsap.set('#sexting-container6 #stat-2', { yPercent: -86 });
		gsap.to('#sexting-container6 #stat-2', {
			opacity: 1,
			scrollTrigger: {
				trigger: '#sexting-container6',
				start: 'top top-=70%',
				end: '+=20%',
			}
		});
	}
}

function initStatChart() {

	var chartContainer = document.getElementById('csam').getContext('2d');

	Chart.register('chartjs-plugin-annotation');

	var width, height, gradient;
	function getGradient(ctx, chartArea) {
		var chartWidth = chartArea.right - chartArea.left;
		var chartHeight = chartArea.bottom - chartArea.top;
		if (!gradient || width !== chartWidth || height !== chartHeight) {
			width = chartWidth;
			height = chartHeight;
			gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
			gradient.addColorStop(0, '#ffffff');
			gradient.addColorStop(0.9, '#f87b5e');
			gradient.addColorStop(1, '#f87b5e');
		}

		return gradient;
	}

	csamChart = new Chart(chartContainer, {
		type: 'line',
		data: {
			labels: ['2004', '', '', '', '2017', '2018', '2019', '2020', '2021', '2022'],
			datasets: [{
				data: [450000, 5000000, 9500000, 14500000, 20600000, 45800000, 69200000, 65500000, 85000000, 88300000],
				pointRadius: [10, 0, 0, 0, 0, 0, 0, 0, 0, 10],
				borderColor: function(context) {
					var chart = context.chart;
					var {ctx, chartArea} = chart;

					if (!chartArea) {
						return;
					}

					return getGradient(ctx, chartArea);
				},
				pointBackgroundColor: function(context) {
					var chart = context.chart;
					var {ctx, chartArea} = chart;

					if (!chartArea) {
						return;
					}

					return getGradient(ctx, chartArea);
				},
			}],
		},
		options: {
			scales: {
				x: {
					display: true,
					grid: {
						drawOnChartArea: false,
						color: '#ffffff',
						borderColor: '#ffffff',
						lineWidth: 3,
						tickColor: '#ffffff',
						tickLength: 10,
						tickWidth: function(context) {
							if (context.index >=1 && context.index <= 3) {
								return 0;
							} else {
								return 3;
							}
						},
					},
					offset: true,
					clip: false,
					ticks: {
						color: '#ffffff',
						padding: 8,
						font: {
							family: 'Rubik',
							size: 16,
						},
					},
				},
				y: {
					display: false,
					min: -2500000,
					max: 110000000,
					offset: true,
				},
			
			},
			borderWidth: 20,
			pointHoverRadius: 10,
			pointBorderWidth: 0,
			maintainAspectRatio: false,
			aspectRatio: .5,
			elements: {
				line: {
					fill: false,
					tension: 0.1,
				}
			},
			layout: {
				padding: {
					left: 20,
					right: 20,
					top: 100,
					bottom: 20,
				},
			},
			plugins: {
				legend:{
					display: false,
				},
				tooltip: {
					 enabled: false,
				},
				title: {
					display: false,
				},
				annotation: {
					annotations: {
						label1: {
							type: 'label',
							xValue: 0,
							yValue: 450000,
							xAdjust: 0,
							yAdjust: -80,
							position: function() {
								if ($(window).width() < 1080) {
									return 'start';
								} else {
									return 'center';
								}
							},
							backgroundColor: 'transparent',
							borderWidth: 2,
							borderColor: '#2c4550',
							content: '450,000',
							color: '#ffffff',
							padding: 0,
							font: {
								size: '20px',
								family: 'Rubik',
							},
							callout: {
								position: function() {
									if ($(window).width() < 1080) {
										return 'bottom';
									} else {
										return 'auto';
									}
								},
								display: true,
								borderColor: '#ffffff',
								borderDash: [5, 5],
								borderWidth: 2,
								side: 1,
								margin: 0,
							},
						},
						label2: {
							display: function() {
								if ($(window).width() < 1080) {
									return false;
								} else {
									return true;
								}
							},
							type: 'label',
							xValue: 4,
							yValue: 20600000,
							xAdjust: 0,
							yAdjust: -100,	
							backgroundColor: 'transparent',
							borderWidth: 2,
							borderColor: '#2c4550',
							content: '20.6 Million',
							color: '#ffffff',
							padding: 0,
							font: {
								size: '20px',
								family: 'Rubik',
							},
							callout: {
								display: true,
								borderColor: '#ffffff',
								borderDash: [5, 5],
								borderWidth: 2,
								position: 'bottom',
								side: 1,
								margin: 0,
							},
						},
						label3: {
							display: function() {
								if ($(window).width() < 1080) {
									return false;
								} else {
									return true;
								}
							},
							type: 'label',
							xValue: 5,
							yValue: 45800000,
							xAdjust: 0,
							yAdjust: 100,	
							backgroundColor: 'transparent',
							borderWidth: 2,
							borderColor: '#2c4550',
							content: '45.8 Million',
							color: '#ffffff',
							padding: 0,
							font: {
								size: '20px',
								family: 'Rubik',
							},
							callout: {
								display: true,
								borderColor: '#ffffff',
								borderDash: [5, 5],
								borderWidth: 2,
								position: 'top',
								side: 1,
								margin: 0,
							},
						},
						label4: {
							display: function() {
								if ($(window).width() < 1080) {
									return false;
								} else {
									return true;
								}
							},
							type: 'label',
							xValue: 6,
							yValue: 69200000,
							xAdjust: 0,
							yAdjust: 100,	
							backgroundColor: 'transparent',
							borderWidth: 2,
							borderColor: '#2c4550',
							content: '69.2 Million',
							color: '#ffffff',
							padding: 0,
							font: {
								size: '20px',
								family: 'Rubik',
							},
							callout: {
								display: true,
								borderColor: '#ffffff',
								borderDash: [5, 5],
								borderWidth: 2,
								position: 'top',
								side: 1,
								margin: 0,
							},
						},
						label5: {
							display: function() {
								if ($(window).width() < 1080) {
									return false;
								} else {
									return true;
								}
							},
							type: 'label',
							xValue: 7,
							yValue: 65500000,
							xAdjust: 0,
							yAdjust: 100,	
							backgroundColor: 'transparent',
							borderWidth: 2,
							borderColor: '#2c4550',
							content: '65.5 Million',
							color: '#ffffff',
							padding: 0,
							font: {
								size: '20px',
								family: 'Rubik',
							},
							callout: {
								display: true,
								borderColor: '#ffffff',
								borderDash: [5, 5],
								borderWidth: 2,
								position: 'top',
								side: 1,
								margin: 0,
							},
						},
						label6: {
							display: function() {
								if ($(window).width() < 1080) {
									return false;
								} else {
									return true;
								}
							},
							type: 'label',
							xValue: 8,
							yValue: 85000000,
							xAdjust: 0,
							yAdjust: -80,
							backgroundColor: 'transparent',
							borderWidth: 2,
							borderColor: '#2c4550',
							content: '85 Million',
							color: '#ffffff',
							padding: 0,
							font: {
								size: '20px',
								family: 'Rubik',
							},
							callout: {
								display: true,
								borderColor: '#ffffff',
								borderDash: [5, 5],
								borderWidth: 2,
								side: 1,
								margin: 0,
							},
						},
						label7: {
							type: 'label',
							xValue: 9,
							yValue: 88300000,
							xAdjust: 0,
							yAdjust: function() {
								if ($(window).width() < 1080) {
									return -50;
								} else {
									return -80;
								}
							},
							position: function() {
								if ($(window).width() < 1080) {
									return 'end';
								} else {
									return 'center';
								}
							},
							backgroundColor: 'transparent',
							borderWidth: 2,
							borderColor: '#2c4550',
							content: '87 Million',
							color: '#F87B5E',
							// padding: 0,
							padding: function() {
								if ($(window).width() < 1080) {
									return 5;
								} else {
									return 0;
								}
							},
							font: {
								size: '24px',
								family: 'Rubik',
							},
							callout: {
								position: function() {
									if ($(window).width() < 1080) {
										return 'bottom';
									} else {
										return 'auto';
									}
								},
								display: true,
								borderColor: '#ffffff',
								borderDash: [5, 5],
								borderWidth: 2,
								side: 1,
								margin: 0,
							},
						},
					},
				},
			},
		},
	});
}

function initGroomingChart() {

	Chart.register({
	    id: 'doughnut-centertext',
      	beforeDraw: function(chart) {
	        if (chart.config.options.elements.center) {
	            // Get ctx from string
	            var ctx = chart.ctx;

	            // Get options from the center object in options
	            var centerConfig = chart.config.options.elements.center;
	            var fontStyle = centerConfig.fontStyle;
	            var txt = centerConfig.text;
	            var color = centerConfig.color;
	            var maxFontSize = centerConfig.maxFontSize;
	            var sidePadding = centerConfig.sidePadding;
	            var sidePaddingCalculated = (sidePadding / 100) * (chart._metasets[chart._metasets.length-1].data[0].innerRadius * 2)
	            ctx.font = '20px ' + fontStyle;

	            // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
	            var stringWidth = ctx.measureText(txt).width;
	            var elementWidth = (chart._metasets[chart._metasets.length-1].data[0].innerRadius * 2) - sidePaddingCalculated;            

	            // Find out how much the font can grow in width.
	            var widthRatio = elementWidth / stringWidth;
	            var newFontSize = Math.floor(30 * widthRatio);
	            var elementHeight = (chart._metasets[chart._metasets.length-1].data[0].innerRadius * 2);

	            // Pick a new font size so it will not be larger than the height of label.
	            var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
	            var minFontSize = centerConfig.minFontSize;
	            var lineHeight = centerConfig.lineHeight || 25;
	            var wrapText = false;

	            if (minFontSize === undefined) {
	                minFontSize = 20;
	            }

	            if (minFontSize && fontSizeToUse < minFontSize) {
	                fontSizeToUse = minFontSize;
	                wrapText = true;
	            }

	            // Set font settings to draw it correctly.
	            ctx.textAlign = 'center';
	            ctx.textBaseline = 'middle';
	            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
	            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
	            ctx.font = fontSizeToUse + "px " + fontStyle;
	            ctx.fillStyle = color;

	            if (!wrapText) {
	                ctx.fillText(txt, centerX, centerY);
	                return;
	            }

	            var words = txt.split(' ');
	            var line = '';
	            var lines = [];

	            // Break words up into multiple lines if necessary
	            for (var n = 0; n < words.length; n++) {
	                var testLine = line + words[n] + ' ';
	                var metrics = ctx.measureText(testLine);
	                var testWidth = metrics.width;
	                if (testWidth > elementWidth && n > 0) {
	                    lines.push(line);
	                    line = words[n] + ' ';
	                } else {
	                    line = testLine;
	                }
	            }

	            // Move the center up depending on line height and number of lines
	            centerY -= (lines.length / 2) * lineHeight;

	            for (var n = 0; n < lines.length; n++) {
	                ctx.fillText(lines[n], centerX, centerY);
	                centerY += lineHeight;
	            }
	            //Draw text in center
	            ctx.fillText(line, centerX, centerY);
	        }
	    }
    });

	var chartContainer1 = document.getElementById('manipulation-chart1').getContext('2d');
	var chartContainer2 = document.getElementById('manipulation-chart2').getContext('2d');
	var chartContainer3 = document.getElementById('manipulation-chart3').getContext('2d');

	var groomingChart = new Chart(chartContainer1, {
		type: 'doughnut',
		data: {
			labels: ['', ''],
			datasets: [{
				data: [40, 60],
				backgroundColor: ['#f87b5e', '#ffffff'],
				borderWidth: 0,
			}],
		},
		options: {
			cutout: '70%',
			radius: '90%',
			layout: {
				padding: {
					left: 20,
					right: 20,
					top: 20,
					bottom: 0,
				},
			},
			elements: {
				center: {
					text: '40%',
					color: '#ffffff', // Default is #000000
					fontStyle: 'Rubik', // Default is Arial
					sidePadding: 10,
					maxFontSize: 40,
				}
			},
			plugins: {
				legend:{
					display: false,
				},
				tooltip: {
					 enabled: false,
				},
				title: {
					display: true,
					text: 'All Minors',
					color: '#ffffff',
					padding: {
						top: 0,
						bottom: 5,
					},
					font: {
						family: 'Rubik',
						size: 22,
						weight: 'bold',
					},
				},
			},
		},
	});

	var groomingChart2 = new Chart(chartContainer2, {
		type: 'doughnut',
		data: {
			labels: ['', ''],
			datasets: [{
				data: [40, 60],
				backgroundColor: ['#7255C9', '#ffffff'],
				borderWidth: 0,
			}],
		},
		options: {
			cutout: '70%',
			radius: '90%',
			layout: {
				padding: {
					left: 20,
					right: 20,
					top: 20,
					bottom: 0,
				},
			},
			elements: {
				center: {
					text: '29%',
					color: '#ffffff', // Default is #000000
					fontStyle: 'Rubik', // Default is Arial
					sidePadding: 10,
					maxFontSize: 40,
				}
			},
			plugins: {
				legend:{
					display: false,
				},
				tooltip: {
					 enabled: false,
				},
				title: {
					display: true,
					text: 'Ages 9-12',
					color: '#ffffff',
					padding: {
						top: 0,
						bottom: 5,
					},
					font: {
						family: 'Rubik',
						size: 22,
						weight: 'bold',
					},
				},
			},
		},
	});

	var groomingChart3 = new Chart(chartContainer3, {
		type: 'doughnut',
		data: {
			labels: ['', ''],
			datasets: [{
				data: [40, 60],
				backgroundColor: ['#FFD69E', '#ffffff'],
				borderWidth: 0,
			}],
		},
		options: {
			cutout: '70%',
			radius: '90%',
			layout: {
				padding: {
					left: 20,
					right: 20,
					top: 20,
					bottom: 0,
				},
			},
			elements: {
				center: {
					text: '48%',
					color: '#ffffff', // Default is #000000
					fontStyle: 'Rubik', // Default is Arial
					sidePadding: 10,
					maxFontSize: 40,
				}
			},
			plugins: {
				legend:{
					display: false,
				},
				tooltip: {
					 enabled: false,
				},
				title: {
					display: true,
					text: 'Ages 13-17',
					color: '#ffffff',
					padding: {
						top: 0,
						bottom: 5,
					},
					font: {
						family: 'Rubik',
						size: 22,
						weight: 'bold',
					},
				},
			},
		},
	});
}

function initSextortionChart() {

	var chartContainer = document.getElementById('sextortion-chart').getContext('2d');

	Chart.register('chartjs-plugin-annotation');

	var sextortionChart = new Chart(chartContainer, {
		type: 'line',
		data: {
			labels: ['2021', '2022', '2023'],
			datasets: [{
				data: [44155, 80524, 186819],
				pointRadius: 10,
				borderColor: '#f87b5e',
				pointBackgroundColor: '#f87b5e',
			}],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			aspectRatio: .7,
			scales: {
				x: {
					display: true,
					grid: {
						drawOnChartArea: false,
						color: '#ffffff',
						borderColor: '#ffffff',
						lineWidth: 3,
						tickColor: '#ffffff',
						tickLength: 10,
						tickWidth: 3,
					},
					offset: true,
					ticks: {
						color: '#ffffff',
						padding: 8,
						font: {
							family: 'Rubik',
							size: 16,
						},
					},
				},
				y: {
					display: false,
					min: 20000,
					max: 200000,
					offset: true,
				},
			
			},
			borderWidth: 10,
			pointHoverRadius: 10,
			pointBorderWidth: 0,
			elements: {
				line: {
					fill: false,
					tension: 0.1,
				}
			},
			layout: {
				padding: {
					left: 20,
					right: 20,
					top: 0,
					bottom: 0,
				},
			},
			plugins: {
				legend:{
					display: false,
				},
				tooltip: {
					 enabled: false,
				},
				title: {
					display: false,
				},
				annotation: {
					annotations: {
						label1: {
							type: 'label',
							xValue: 0,
							yValue: 44155,
							xAdjust: 0,
							yAdjust: -80,
							position: 'center',	
							backgroundColor: 'transparent',
							borderWidth: 2,
							borderColor: '#2c4550',
							content: '44,155 reports',
							color: '#ffffff',
							padding: 0,
							font: {
								size: '16px',
								family: 'Rubik',
							},
							callout: {
								display: true,
								borderColor: '#ffffff',
								borderDash: [5, 5],
								borderWidth: 2,
								side: 1,
								margin: 0,
							},
						},
						label2: {
							display: function() {
								if ($(window).width() < 1080) {
									return false;
								} else {
									return true;
								}
							},
							type: 'label',
							xValue: 1,
							yValue: 80524,
							xAdjust: 0,
							yAdjust: -80,
							position: 'center',	
							backgroundColor: 'transparent',
							borderWidth: 2,
							borderColor: '#2c4550',
							content: '80,524 reports',
							color: '#ffffff',
							padding: 0,
							font: {
								size: '16px',
								family: 'Rubik',
							},
							callout: {
								display: true,
								borderColor: '#ffffff',
								borderDash: [5, 5],
								borderWidth: 2,
								side: 1,
								margin: 0,
							},
						},
						label3: {
							type: 'label',
							xValue: 2,
							yValue: 186819,
							yAdjust: 150,
							xAdjust: 0,
							position: 'center',	
							backgroundColor: 'transparent',
							borderWidth: 2,
							borderColor: '#2c4550',
							content: function() {
								if ($(window).width() < 1080) {
									return ['186,819', 'reports'];
								} else {
									return '186,819 reports';
								}
							},
							color: '#f87b5e',
							padding: 0,
							font: {
								size: '20px',
								family: 'Rubik',
							},
							callout: {
								display: true,
								borderColor: '#ffffff',
								borderDash: [5, 5],
								borderWidth: 2,
								side: 1,
								margin: 0,
							},
						},
					},
				},
			},
		},
	});
}
//# sourceMappingURL=issue.js.map