(function ($) {
	"use strict";

    jQuery(document).ready(function($){



		// destinations-isotop
		$('.destinations-list').isotope({
			// set itemSelector so .grid-sizer is not used in layout
			itemSelector: '.destination-box',
			percentPosition: true,
			masonry: {
			// use element for option
			columnWidth: '.destination-box'
			}
		});

		// Fleet flying Area Carousel
        $("#fleet-flying-carousel").owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 17,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            }
        });

    	// Slicknav
		$('#main-menu').slicknav({
	        closeOnClick: true,
	        label: '',
	        appendTo:'.mobile-menu',
	    });

		// Booking Form Date Picker
	    $('#datePicker').datetimepicker({
            timepicker:false,
            format:'d.m.Y'
        });


	    // Booking Form Passenger Plus Minus
        function incrementValue(e) {
		  e.preventDefault();
		  var fieldName = $(e.target).data('field');
		  var parent = $(e.target).closest('div');
		  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

		  if (!isNaN(currentVal)) {
		    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
		  } else {
		    parent.find('input[name=' + fieldName + ']').val(0);
		  }
		}

		function decrementValue(e) {
		  e.preventDefault();
		  var fieldName = $(e.target).data('field');
		  var parent = $(e.target).closest('div');
		  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

		  if (!isNaN(currentVal) && currentVal > 0) {
		    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
		  } else {
		    parent.find('input[name=' + fieldName + ']').val(0);
		  }
		}

		$('.input-group').on('click', '.button-plus', function(e) {
		  incrementValue(e);
		});

		$('.input-group').on('click', '.button-minus', function(e) {
		  decrementValue(e);
		});


		// Booking Form From/To Dropdown
		$('.booking-form-box .primary-inputs .select-primary-toggle').on('click',function(){
			$(this).next('.select-primary-dropdown').toggle();
		});

		$(document).mouseup(function(e) 
		{
		    var container = $('.booking-form-box .primary-inputs .select-primary-dropdown');

		    // if the target of the click isn't the container nor a descendant of the container
		    if (!container.is(e.target) && container.has(e.target).length === 0) 
		    {
		        container.hide();
		    }
		});


		$('.booking-form-box .primary-inputs .select-primary-dropdown').find('a').click(function(e) {
	        e.preventDefault();
	        var cat = $(this).attr("data-code");
	        $(this).parents('.input-item').find('.select-primary-label').text(cat);
	        $(this).parents('.input-item').find('.select-primary-input').val(cat);
	        $(this).parents('.select-primary-dropdown').hide();
	    });

		// Booking Form Country Code Dropdown
		$('.booking-form-box .details-box .select-primary-dropdown').find('a').click(function(e) {
	        e.preventDefault();
	        var cat = $(this).attr("data-code");
	        $(this).parents('.input-group').find('.select-primary-label').text(cat);
	        var catInput = '+' + cat;
	        $(this).parents('.input-group').find('.select-primary-input').val(catInput);
	    });


	    // Featured Drawer Show/Hide
	    $('#featured-section .featured-drawer-btn').on('click',function(){
	    	$('.featured-drawer').removeClass('active');
	    	$('#drawer-'+$(this).attr('data-index')).addClass('active');
	    	$('body').addClass('overlay');
	    });

	    $('.featured-drawer .cross').on('click',function(e){
	    	e.preventDefault();
	    	$(this).parents('.featured-drawer').removeClass('active');
	    	$('body').removeClass('overlay');
	    });

        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	