
function ajaxSubmitCommentForm(){
	"use strict";

	var options = { 
		success: function(){
			$j("#commentform textarea").val("");
			$j("#commentform .success p").text("Comment has been sent!");
		}
	}; 
	
	$j('#commentform').submit(function() {
		$j(this).find('input[type="submit"]').next('.success').remove();
		$j(this).find('input[type="submit"]').after('<div class="success"><p></p></div>');
		$j(this).ajaxSubmit(options); 
		return false; 
	}); 
}
var header_height = 90;
var min_header_height = 45;
var scroll_amount_for_sticky = 90;

var logo_height = 51; // elision logo height
var logo_width = 177; // elision logo width
	logo_height = 51;
	logo_width = 177;
	

/*
**	Init placeholder for search widget
*/
function addPlaceholderSearchWidget(){
	"use strict";
	
	$j('.widget.widget_search form input:text, .header_top .searchform input:text').each(
		function(i,el) {
		if (!el.value || el.value === '') {
			el.placeholder = 'Search Here';
		}
	});
}


var geocoder;
var map;

function initialize() {
	"use strict";
  // Create an array of styles.
  var mapStyles = [
    {
      stylers: [
				{hue: "#324156" },
				{saturation: -60},
				{lightness: -20},
				{gamma: 1.51}
			]
    }
  ];
  var qodeMapType = new google.maps.StyledMapType(mapStyles,
    {name: "Qode Map"});

	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(-34.397, 150.644);
	var myOptions = {
		zoom: 12,
				scrollwheel: false,
				center: latlng,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		scaleControl: false,
			scaleControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		streetViewControl: false,
			streetViewControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		panControl: false,
		panControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		mapTypeControl: false,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'qode_style'],
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.LEFT_CENTER
		},
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	}

function codeAddress(data) {
	"use strict";
	
	if (data === '')
		return;

	var contentString = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<div id="bodyContent">'+
	'<p>'+data+'</p>'+
	'</div>'+
	'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	geocoder.geocode( { 'address': data}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map, 
				position: results[0].geometry.location,
								icon:  'http://demo.qodeinteractive.com/elision/wp-content/themes/elision/img/pin.png',
								title: data['store_title']
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
			//infowindow.open(map,marker);
		}
	});
}

var $j = jQuery.noConflict();

$j(document).ready(function() {
	"use strict";

	showContactMap();
});

function showContactMap() {
	"use strict";

	if($j("#map_canvas").length > 0){
		initialize();
		codeAddress("");
		codeAddress("");
		codeAddress("");
		codeAddress("");
		codeAddress("San Francisco, USA");
	}
}

var no_ajax_pages = [];
var qode_root = 'http://demo.qodeinteractive.com/elision/';
var theme_root = 'http://demo.qodeinteractive.com/elision/wp-content/themes/elision/';
var parallax_speed = 0.5;
var header_style_admin = "dark";

			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/sport-watch/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/mens-coat/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/beauty-set/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/womens-jacket/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/sport-shoes/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/designer-dress/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/boots-black/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/elegant-mens-pants/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/casual-leather-bag/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/short-womens-jacket/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/eye-contour-concentrate/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/elegant-silk-tie/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/mens-sport-watch/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/womens-moto-jacket/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/colored-glassware-set/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/casual-leather-shoes/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/product/total-brightening-serum/');	
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/shop/');
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/cart/');
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/checkout/');
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/checkout/pay/');
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/checkout/order-received/');
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/my-account/');
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/my-account/edit-address/');
			no_ajax_pages.push('http://demo.qodeinteractive.com/elision/my-account/view-order/');
				

		no_ajax_pages.push('http://demo.qodeinteractive.com/elision/page-transition-off/');
		no_ajax_pages.push('');
