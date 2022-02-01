/***************************************************************************************************************
||||||||||||||||||||||||||||         CUSTOM SCRIPT FOR CAR WORKSHOP         ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
1. revolutionSliderActiver
2. accrodion
3. GalleryFancyboxActivator
4. selectMenu
5. serviceCarousel
6. teamCarousel
7. clientCarousel
8. CounterNumberChanger
9. gMap
10. contactFormValidation
11. stickyHeader
12. fleetGallery
13. typed
14. mobileNavToggler
15. testimonialCarousel
16. testimonialsCarosuleTwo
17. specialCheckbox
18. datePicker
19. thmSpinner
****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/


"use strict"; // Start of use strict

// 1. revolutionSliderActiver
function revolutionSliderActiver() {
	if ($('.rev_slider_wrapper #slider1').length) {
		jQuery("#slider1").revolution({
			sliderType: "standard",
			sliderLayout: "auto",
			delay: 5000,
			navigation: {
				arrows: { enable: true }
			},
			gridwidth: 1920,
			gridheight: 730
		});
	};
}
// 2. accrodion
function accrodion() {
	if ($('.accrodion-grp').length) {

		$('.accrodion-grp').each(function () {
			var accrodionName = $(this).data('grp-name');
			var Self = $(this);
			Self.addClass(accrodionName);
			Self.find('.accrodion .accrodion-content').hide();
			Self.find('.accrodion.active').find('.accrodion-content').show();
			Self.find('.accrodion').each(function () {
				$(this).find('.accrodion-title').on('click', function () {
					if ($(this).parent().hasClass('active') === false) {
						$('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
						$('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
						$(this).parent().addClass('active');
						$(this).parent().find('.accrodion-content').slideDown();
					};
				});
			});
		});

	};
}
// 3. GalleryFancyboxActivator
function GalleryFancyboxActivator() {
	var galleryFcb = $('.fancybox');
	if (galleryFcb.length) {
		galleryFcb.fancybox({
			openEffect: 'elastic',
			closeEffect: 'elastic',
			helpers: {
				media: {}
			}
		});
	}
}
// 4. selectMenu
function selectMenu() {
	if ($('.select-menu').length) {
		$('.select-menu').selectmenu();
	};
}
// 5. serviceCarousel
function serviceCarousel() {
	if ($('.services-section.with-carousel').length) {
		$('.services-section.with-carousel .owl-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			dots: false,
			autoWidth: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			navText: [
				'<i class="fa fa-long-arrow-left"></i>',
				'<i class="fa fa-long-arrow-right"></i>'
			],
			responsive: {
				0: {
					items: 1,
					autoWidth: false
				},
				480: {
					items: 1,
					autoWidth: false
				},
				600: {
					items: 2,
					autoWidth: false
				},
				1000: {
					items: 3,
					autoWidth: false
				}
			}
		});
	};
}
// 6. teamCarousel
function teamCarousel() {
	if ($('.team-section.with-carousel').length) {
		$('.team-section.with-carousel .owl-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			dots: false,
			autoWidth: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			navText: [
				'<i class="fa fa-long-arrow-left"></i>',
				'<i class="fa fa-long-arrow-right"></i>'
			],
			responsive: {
				0: {
					items: 1,
					autoWidth: false
				},
				480: {
					items: 1,
					autoWidth: false
				},
				600: {
					items: 3,
					autoWidth: false
				},
				1000: {
					items: 4,
					autoWidth: false
				}
			}
		});
	};
}
// 7. clientCarousel
function clientCarousel() {
	if ($('.client-carousel').length) {
		$('.client-carousel .owl-carousel').owlCarousel({
			loop: true,
			margin: 27,
			nav: false,
			dots: false,
			autoWidth: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 1,
					autoWidth: false
				},
				480: {
					items: 2,
					autoWidth: false
				},
				600: {
					items: 3,
					autoWidth: false
				},
				1000: {
					items: 6,
					autoWidth: false
				}
			}
		});
	};
}
// 8. CounterNumberChanger
function CounterNumberChanger() {
	var timer = $('.timer');
	if (timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}
}
// 9. gMap
function gMap() {
	if ($('.google-map').length) {
		$('.google-map').each(function () {
			// getting options from html 
			var mapName = $(this).attr('id');
			var mapLat = $(this).data('map-lat');
			var mapLng = $(this).data('map-lng');
			var iconPath = $(this).data('icon-path');
			var mapZoom = $(this).data('map-zoom');
			var mapTitle = $(this).data('map-title');

			// if zoom not defined the zoom value will be 15;
			if (!mapZoom) {
				var mapZoom = 15;
			};
			// init map
			var map;
			map = new GMaps({
				div: '#' + mapName,
				scrollwheel: false,
				lat: mapLat,
				lng: mapLng,
				zoom: mapZoom
			});
			// if icon path setted then show marker
			if (iconPath) {
				map.addMarker({
					icon: iconPath,
					lat: mapLat,
					lng: mapLng,
					title: mapTitle
				});
			}
		});
	};
}

// 11. stickyHeader
function stickyHeader() {

	if ($('.stricky').length && $(window).width() >= 500) {
		var strickyScrollPos = 100;
		var currentTop = $(window).scrollTop();
		if (currentTop > strickyScrollPos) {
			$('.stricky').removeClass('fadeIn animated');
			$('.stricky').addClass('stricky-fixed fadeInDown animated');
		}
		else {
			{
				$('.stricky').removeClass('stricky-fixed fadeInDown animated');
				$('.stricky').addClass('slideIn animated');
			}
		};
	}
}
	// 12. fleetGallery
	function fleetGallery() {
		if ($('.fleet-gallery').length) {
			$('.fleet-gallery').mixItUp();
		};
	}
	// 13. typed									
	function typed() {
		if ($(".typed").length) {
			$(".typed").typed({
				stringsElement: $('.typed-strings'),
				typeSpeed: 200,
				backDelay: 1500,
				loop: true,
				contentType: 'html', // or text
				// defaults to false for infinite loop
				loopCount: false,
				callback: function () { null; },
				resetCallback: function () { newTyped(); }
			});
		};
	}
	// 14. mobileNavToggler
	function mobileNavToggler() {
		if ($('.nav-holder').length) {
			$('.nav-holder .nav-header .menu-expander button').on('click', function () {
				$('.nav-holder .nav-footer').slideToggle();
				return false;
			});
			$('.nav-holder li.has-submenu').children('a').append(function () {
				return '<button class="dropdown-expander"><i class="fa fa-bars"></i></button>';
			});
			$('.nav-holder .nav-footer .dropdown-expander').on('click', function () {
				$(this).parent().parent().children('.submenu').slideToggle();
				return false;
			});

		}

		// window.onclick=()=>{
		// 	$('.nav-holder .nav-footer').slideToggle();

		// }
	}


	// 15. testimonialCarousel
	function testimonialCarousel() {
		if ($('.testimonial-content-box').length && $('.testimonail-thumbnail-box').length) {

			var $sync1 = $(".testimonial-content-box"),
				$sync2 = $(".testimonail-thumbnail-box"),
				flag = false,
				duration = 1000;

			$sync1
				.owlCarousel({
					items: 1,
					margin: 0,
					nav: false,
					dots: false
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;
						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync2
				.owlCarousel({
					margin: 60,
					items: 3,
					nav: false,
					dots: false,

					center: true,
					responsive: {
						0: {
							items: 1,
							autoWidth: false
						},
						480: {
							items: 2,
							center: false,
							autoWidth: false
						},
						600: {
							items: 3,
							autoWidth: false
						},
						1000: {
							items: 3,
							autoWidth: false
						}
					},
				})
				.on('click', '.owl-item', function () {
					$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;
						$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

		};
	}
	// 16. testimonialsCarosuleTwo
	function testimonialsCarosuleTwo() {
		if ($('.testimonials-carousel .owl-carousel').length) {
			$('.testimonials-carousel .owl-carousel').owlCarousel({
				loop: true,
				margin: 0,
				nav: true,
				dots: false,
				autoplay: true,
				navText: [
					'<i class="fa fa-angle-left"></i>',
					'<i class="fa fa-angle-right"></i>'
				],
				autoplayHoverPause: true,
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 1
					}
				}
			});
		}
	}
	// 17. specialCheckbox
	function specialCheckbox() {
		if ($('ul.special-checkbox').length) {
			$('ul.special-checkbox').find('li').on('click', function () {
				$(this).toggleClass('active');
				$(this).find('input[type=checkbox]').prop('checked', function () {
					return !this.checked;
				});
			});
			// $('ul.special-checkbox').find('li .input-checker input[type="checkbox"]').prop('checked', true);
			// $('ul.special-checkbox').find('.active .input-checker input[type="checkbox"]').prop('checked', true);

		};
	}
	// 18. datePicker
	function datePicker() {
		if ($('.date-picker').length) {
			$('.date-picker').datepicker();
		};
	}
	// 19. thmSpinner
	function thmSpinner() {
		if ($('.thm-spinner').length) {
			var spinnerMin = $('.thm-spinner').data('min-value');
			var spinnerMax = $('.thm-spinner').data('max-value');
			var spinnerDefault = $('.thm-spinner').data('default-value');
			$('.thm-spinner').slider({
				range: 'min',
				min: spinnerMin,
				max: spinnerMax,
				value: spinnerDefault,
				slide: function (event, ui) {
					$('.vehicle-year-input').val(ui.value);
				}
			});
			$('.vehicle-year-input').val($('.thm-spinner').slider('value'));
		};
	}





	// instance of fuction while Window Scroll event
	jQuery(window).on('scroll', function () {
		stickyHeader();
	});
	// instance of fuction while Window Resize event
	jQuery(window).on('resize', function () {
		stickyHeader();
	});

	function initCarTop() {
		var $window = $(window);
		var $scrolltop = $('.car-top');

		$scrolltop.on('click', function () {
			$('html,body').animate({
				scrollTop: 0
			}, 800);
			$(this).addClass("car-run");
			setTimeout(function () { $scrolltop.removeClass('car-run'); }, 1000);
			return false;
		});
		$window.on('scroll', function () {
			if ($window.scrollTop() >= 200) {
				$scrolltop.addClass("show");
				$scrolltop.addClass("car-down");
			} else {
				$scrolltop.removeClass("show");
				setTimeout(function () { $scrolltop.removeClass('car-down'); }, 300);
			}
		});
	}

	function callFunctions() {

		// revolutionSliderActiver();
		// accrodion();
		// selectMenu();
		// clientCarousel();
		// CounterNumberChanger();
		// gMap();
		// fleetGallery();
		// GalleryFancyboxActivator();
		// typed();
		mobileNavToggler();
		// serviceCarousel();
		// testimonialCarousel();
		// testimonialsCarosuleTwo();
		// specialCheckbox();
		// datePicker();
		// thmSpinner();
		// teamCarousel();
		initCarTop();

	}


	function drawMap() {
		var contact = { "lat": "32.373875", "lon": "15.0698468" }; //Change a map coordinate here!

		try {
			var mapContainer = $('#map');
			mapContainer.gmap3({
				action: 'addMarker',
				marker: {
					options: {
						icon: new google.maps.MarkerImage('/assets/front-end/images/marker.png')
					}
				},
				latLng: [contact.lat, contact.lon],
				map: {
					center: [contact.lat, contact.lon],
					zoom: 16
				},
			},
				{ action: 'setOptions', args: [{ scrollwheel: false }] }
			);
		} catch (err) {
			console.log(err);
		}
	}
