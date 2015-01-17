$j(window).load(function(){
	setTimeout(function(){
		$j("#panel").animate({marginLeft: "0px"});
		$j("a.open").addClass('opened');
		$j("#panel").addClass('opened-panel');
	},1000);
});

var tooltip1 = '<div class="tooltip tooltip1"><a href="#" class="tooltip_marker"></a> \
									<div class="popup_tooltip popup_tooltip1"> \
										<div class="popup_tooltip_inner"><i class="fa fa-times"></i> \
											<div class="tooltip_row clearfix"> \
													<h5 class="tooltip_title">Header Options</h5> \
													<p>Elision theme comes with an amazing new Qode functionality - choose main menu colors from slide to slide and from page to page. Combine it with dark/light header backgrounds to create beautiful contrasts between pages. </p> \
													<h5>Try a different style</h5> \
													<img class="tooltip_image_1" src="http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_1.jpg" alt="&nbsp;" /> \
													<a class="qbutton tiny tooltip_link_1" href="#">Change</a> \
											</div> \
										</div> \
									</div> \
								</div>\
								';
var tooltip2 = '<div class="tooltip tooltip2"><a href="#" class="tooltip_marker"></a> \
									<div class="popup_tooltip popup_tooltip2"> \
										<div class="popup_tooltip_inner"><i class="fa fa-times"></i> \
											<div class="tooltip_row clearfix"> \
													<h5 class="tooltip_title">Footer Options</h5> \
													<p>Completely control all colors and styles on Elision theme and easily customize it in any way you want. </p> \
													<h5>Try a different style</h5> \
													<img class="tooltip_image_2" src="http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_2.jpg" alt="&nbsp;" /> \
													<a class="qbutton tiny tooltip_link_2" href="#">Change</a> \
											</div> \
										</div> \
									</div> \
								</div>\
								';
								
var tooltip3 = '<div class="tooltip tooltip3"><a href="#" class="tooltip_marker"></a> \
									<div class="popup_tooltip popup_tooltip3"> \
										<div class="popup_tooltip_inner"><i class="fa fa-times"></i> \
											<div class="tooltip_row clearfix"> \
													<h5 class="tooltip_title">Sticky Header Options</h5> \
													<p>All menus are completely customizable and can be as simple or as complex as you want. Try our two favorite combinations. </p> \
													<h5>Try a different style</h5> \
													<img class="tooltip_image_3" src="http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_3.jpg" alt="&nbsp;" /> \
													<a class="qbutton tiny tooltip_link_3" href="#">Change</a> \
											</div> \
										</div> \
									</div> \
								</div>\
								';
$j(window).load(function(){
	$j('header .header_bottom .container_inner').append(tooltip1);
	$j('footer .container_inner').append(tooltip2);
	$j('header .header_bottom .container_inner').append(tooltip3);
});
									
$j(document).ready(function() {
	
	$j(document).on( "click", ".tooltip .tooltip_marker", function(){
		$j(".popup_tooltip").hide(300);
		var $this = $j(this);
		
		if ($this.next(".popup_tooltip").is(":visible")){           
			$this.next(".popup_tooltip").find(".popup_tooltip_inner").animate({opacity:0},100);
			$this.next(".popup_tooltip").hide(300);
    }
    else{      
			$this.next(".popup_tooltip").show(300, function(){
				$this.next(".popup_tooltip").find(".popup_tooltip_inner").animate({opacity:1},600);
			});
    }
    return false;
	});
	
	$j(document).on( "click", ".tooltip .popup_tooltip_inner i", function(){
		$j(".popup_tooltip").hide(300);
		
		$j(this).closest(".popup_tooltip").find(".popup_tooltip_inner").animate({opacity:0},100);
		$j(this).closest(".popup_tooltip").hide(300);  
		
    return false;
	});
	
	$j(document).on( "click", ".tooltip_link_1", function(e){
		e.preventDefault();
		if(!$j(this).hasClass('clicked')){
			$j(this).addClass('clicked');
			$j('html').addClass('white_header');
			$j('.tooltip_image_1').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_1_reverse.jpg');
		}else{
			$j(this).removeClass('clicked');
			$j('html').removeClass('white_header');
			$j('.tooltip_image_1').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_1.jpg');
		}
	});
	
	$j(document).on( "click", ".tooltip_link_2", function(e){
		e.preventDefault();
		if(!$j(this).hasClass('clicked')){
			$j(this).addClass('clicked');
			$j('footer').addClass('white_footer');
			$j('.tooltip_image_2').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_2_reverse.jpg');
			$j('footer .column1 img').attr('src','http://demo.qodeinteractive.com/elision/wp-content/themes/elision/img/logo_black.png');
			
		}else{
			$j(this).removeClass('clicked');
			$j('footer').removeClass('white_footer');
			$j('.tooltip_image_2').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_2.jpg');
			$j('footer .column1 img').attr('src','http://demo.qodeinteractive.com/elision/wp-content/themes/elision/img/logo.png');
		}
	});
	
	$j(document).on( "click", ".tooltip_link_3", function(e){
		e.preventDefault();
		if(!$j(this).hasClass('clicked')){
			$j(this).addClass('clicked');
			$j('html').addClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_3_reverse.jpg');
			
			
		}else{
			$j(this).removeClass('clicked');
			$j('html').removeClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_3.jpg');
			
		}
	});
	
	$j('ul#tootlbar_header_color li').click(function(e){
		e.preventDefault();
		if($j(this).attr("data-value") != "transparent"){
			$j('.tooltip_link_1').addClass('clicked');
			$j('html').addClass('white_header');
			$j('.tooltip_image_1').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_1_reverse.jpg');
		}else{
			$j('.tooltip_link_1').removeClass('clicked');
			$j('html').removeClass('white_header');
			$j('.tooltip_image_1').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_1.jpg');
		}
	});
	
	$j('ul#tootlbar_header_sticky_color li').click(function(e){
		e.preventDefault();
		if($j(this).attr("data-value") != "white"){
			$j('.tooltip_link_3').addClass('clicked');
			$j('html').addClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_3_reverse.jpg');
		}else{
			$j('.tooltip_link_3').removeClass('clicked');
			$j('html').removeClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_3.jpg');
		}
	});
	
	$j('ul#tootlbar_header_footer_color li').click(function(e){
		e.preventDefault();
		if($j(this).attr("data-value") != "dark"){
			$j('.tooltip_link_2').addClass('clicked');
			$j('footer').addClass('white_footer');
			$j('.tooltip_image_2').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_2_reverse.jpg');
			$j('footer .column1 img').attr('src','http://demo.qodeinteractive.com/elision/wp-content/themes/elision/img/logo_black.png');
		}else{
			$j('.tooltip_link_2').removeClass('clicked');
			$j('footer').removeClass('white_footer');
			$j('.tooltip_image_2').attr('src','http://demo.qodeinteractive.com/elision/demo_images/tooltip_image_2.jpg');
			$j('footer .column1 img').attr('src','http://demo.qodeinteractive.com/elision/wp-content/themes/elision/img/logo.png');
		}
	});
	
	
	$j("#panel a.open").click(function(e){
		e.preventDefault();
		var margin_left = $j("#panel").css("margin-left");
		if (margin_left == "-201px"){
			$j("#panel").animate({marginLeft: "0px"});
			$j("#panel").addClass('opened-panel');
			$j(this).addClass('opened');
		}
		else{
			$j("#panel").animate({marginLeft: "-201px"});
			$j(this).removeClass('opened');
			$j("#panel").removeClass('opened-panel');
		}
		return false;
	});
	
	$j(".accordion_toolbar").accordion({
		animate: "swing",
		collapsible: true,
		active: 6,
		icons: "",
		heightStyle: "content"
	});
	
	$j('ul#tootlbar_header_top li').click(function(){
		if($j(this).attr("data-value") != ""){
			
    	$j.post(qode_root+'updatesession.php', {elision_header_top : $j(this).attr("data-value")}, function(data){
				location.reload();
			});
		}
	});
	
	$j('ul#tootlbar_smooth_scroll li').click(function(){
		if($j(this).attr("data-value") != ""){
    	$j.post(qode_root+'updatesession.php', {elision_smooth : $j(this).attr("data-value")}, function(data){
				location.reload();
			});
		}
	});
	
	$j('ul#tootlbar_pattern li').click(function(){

		$j('body.boxed .wrapper').removeClass('toolbar_clicked');
		jQuery('#tootlbar_pattern_css').remove();
		
		if($j(this).attr("data-value") != "no"){
			//$j('#tootlbar_boxed').getSetSSValue('boxed');
			//$j('#tootlbar_background').getSetSSValue('no');
			$j('body').addClass('boxed');
			newSkin ="body.boxed .wrapper { \
									background-image: url('http://demo.qodeinteractive.com/river/demo_images/"+$j(this).attr("data-value")+".png'); \
									background-position: 0px 0px; \
									background-repeat: repeat; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_pattern_css" type="text/css">'+newSkin+'</style>'); 
			
		}else{
			newSkin ="body { \
									background-image: none; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_pattern_css" type="text/css">'+newSkin+'</style>'); 
		}
	});
	
	$j('ul#tootlbar_background li').click(function(){
	
	$j('body.boxed .wrapper').removeClass('toolbar_clicked');
	jQuery('#tootlbar_background_css').remove();
		if($j(this).attr("data-value") != "no"){
			//$j('#tootlbar_boxed').getSetSSValue('boxed');
			//$j('#tootlbar_pattern').getSetSSValue('no');
			$j('body').addClass('boxed');
			newSkin ="body.boxed .wrapper { \
									background-image: url('http://demo.qodeinteractive.com/river/demo_images/"+$j(this).attr("data-value")+".jpg'); \
									background-position: 0px 0px; \
									background-repeat: repeat; \
									background-attachment: fixed; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_background_css" type="text/css">'+newSkin+'</style>'); 
			
		}else{
			newSkin ="body { \
									background-image: none; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_background_css" type="text/css">'+newSkin+'</style>'); 
		}
	});
	
	$j('ul#tootlbar_boxed li').click(function(){
	
		$j('body').removeClass('boxed');
		$j('body').addClass($j(this).attr("data-value"));

		$j('body.boxed .wrapper').addClass('toolbar_clicked');
		
		if($j(this).attr("data-value") != "boxed"){
			$j('#tootlbar_pattern').getSetSSValue('no');
			$j('#tootlbar_background').getSetSSValue('no');
		}
	});	
	
	$j('ul#tootlbar_tooltips li').click(function(){
		if($j(this).attr("data-value") != "yes"){
			$j('.tooltip').css('visibility','hidden');
		}else{
			$j('.tooltip').css('visibility','visible');
		}
	});
	
	$j('#tootlbar_colors .color').each(function(){
		$j(this).on('click',function(){
			$j('#tootlbar_colors .color').removeClass('active');
			$j(this).addClass('active');
			var color = $j(this).data('color');
			
			if($j(this).hasClass('color1')){
				var social_share = "social_share_magenta";
				var circle_list = "list_circle_magenta";
			}else if($j(this).hasClass('color2')){
				var social_share = "social_share_blue";
				var circle_list = "list_circle_blue";
			}else if($j(this).hasClass('color3')){
				var social_share = "social_share_gold";
				var circle_list = "list_circle_gold";
			}else if($j(this).hasClass('color4')){
				var social_share = "social_share_green";
				var circle_list = "list_circle_green";
			}else if($j(this).hasClass('color5')){
				var social_share = "social_share_yellow";
				var circle_list = "list_circle_yellow";
			}else if($j(this).hasClass('color6')){
				var social_share = "social_share_gray";
				var circle_list = "list_circle_gray";
			}else{
				var social_share = "social_share_magenta";
				var circle_list = "list_circle_magenta";
			}
			
			if ($j("#toolbar_colors_css").length > 0){
				$j("#toolbar_colors_css").remove();
			}
			
			newSkin =".title .title_on_bottom_wrap .title_on_bottom_holder .title_on_bottom_holder_inner, \
					.q_progress_bar .progress_content, \
					.q_progress_bars_vertical .progress_content_outer .progress_content, \
					.qbutton, \
					.load_more a, \
					#submit_comment, \
					.drop_down .wide .second ul li .qbutton, \
					.drop_down .wide .second ul li ul li .qbutton, \
					.call_to_action.elegant .cta_button, \
					.portfolio_gallery a .gallery_text_holder, \
					.filter_holder ul li.active span, \
					.filter_holder ul li:hover span, \
					.q_tabs .tabs-nav li.active a, \
					.q_tabs .tabs-nav li a:hover, \
					.q_accordion_holder.accordion .ui-accordion-header.ui-state-hover .accordion_mark, \
					.highlight, \
					.testimonials .testimonial_nav li.active a, \
					.gallery_holder ul li .gallery_hover, \
					.q_progress_bars_icons_inner.square .bar.active .bar_noactive, \
					.q_progress_bars_icons_inner.square .bar.active .bar_active, \
					.social_share_dropdown ul li.share_title, \
					.widget.widget_search form input[type='submit']:hover, \
					.widget .tagcloud a, \
					.q_steps_holder .circle_small span, \
					.vc_text_separator.full div, \
					.mejs-controls .mejs-time-rail .mejs-time-current, \
					.mejs-controls .mejs-time-rail .mejs-time-handle, \
					.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current, \
					.q_pie_graf_legend ul li .color_holder, \
					.q_line_graf_legend ul li .color_holder, \
					.circle_item .circle:hover, \
					.single_tags a, \
					.pagination ul li span, \
					.pagination ul li a:hover, \
					.portfolio_navigation .portfolio_prev a:hover, \
					.portfolio_navigation .portfolio_next a:hover, \
					.single_links_pages span, \
					.single_links_pages a:hover span, \
					.q_box_holder.with_icon, \
					.title .title_on_bottom_wrap.show_title_on_bottom .title_on_bottom_holder .title_on_bottom_holder_inner, \
					.shopping_cart_header .header_cart span, \
					.woocommerce div.message, \
					.woocommerce .woocommerce-message, \
					.woocommerce .woocommerce-error, \
					.woocommerce .woocommerce-info, \
					.woocommerce .button, \
					.woocommerce-page .button, \
					.woocommerce-page input[type='submit'], \
					.woocommerce input[type='submit'], \
					.woocommerce ul.products li.product .added_to_cart, \
					.woocommerce .product .onsale, \
					.woocommerce .product .single-onsale, \
					.woocommerce-pagination ul.page-numbers li span.current, \
					.woocommerce-pagination ul.page-numbers li a:hover, \
					.woocommerce .quantity .minus:hover, \
					.woocommerce #content .quantity .minus:hover, \
					.woocommerce-page .quantity .minus:hover, \
					.woocommerce-page #content .quantity .minus:hover, \
					.woocommerce .quantity .plus:hover, \
					.woocommerce #content .quantity .plus:hover, \
					.woocommerce-page .quantity .plus:hover, \
					.woocommerce-page #content .quantity .plus:hover, \
					.woocommerce .quantity input[type='button']:hover, \
					.woocommerce #content .quantity input[type='button']:hover, \
					.woocommerce-page .quantity input[type='button']:hover, \
					.woocommerce-page #content .quantity input[type='button']:hover, \
					.woocommerce .quantity input[type='button']:active, \
					.woocommerce #content .quantity input[type='button']:active, \
					.woocommerce-page .quantity input[type='button']:active, \
					.woocommerce-page #content .quantity input[type='button']:active, \
					.woocommerce .widget_price_filter .price_slider_wrapper .ui-widget-content, \
					.woocommerce-page .widget_price_filter .price_slider_wrapper .ui-widget-content, \
					.woocommerce .widget_price_filter .ui-slider .ui-slider-handle, \
					.woocommerce-page .widget_price_filter .ui-slider .ui-slider-handle{ \
					background-color: "+color+"; \
					} \
					.q_icon_with_title.boxed .icon_holder .fa-stack:hover, \
					.q_social_icon_holder .fa-stack:hover, \
					.qode_call_to_action .qbutton, \
					.q_toolbar_background_color .q_social_icon_holder .fa-stack, \
					.q_toolbar_dropcaps .q_dropcap.circle{ \
						background-color: "+color+" !important; \
					} \
					.portfolio_gallery a .gallery_text_holder, \
					.gallery_holder ul li .gallery_hover{ \
						background-color: rgba("+hexToRgb(color).r+","+hexToRgb(color).g+","+hexToRgb(color).b+", 0.9); \
					} \
					a:hover, \
					p a:hover, \
					.box_image_holder .box_icon .fa-stack i.fa-stack-base, \
					.q_icon_list i, \
					.q_progress_bars_vertical .progress_number, \
					.q_counter_holder span.counter, \
					.box_holder_icon .fa-stack i, \
					.q_percentage_with_icon, \
					.portfolio_like a.liked i, \
					.portfolio_like a:hover i, \
					.portfolio_single .portfolio_like a.liked i, \
					.portfolio_single .portfolio_like a:hover i, \
					.q_tabs.boxed .tabs-nav li.active a, \
					.q_tabs.boxed .tabs-nav li a:hover, \
					.q_tabs.vertical .tabs-nav li.active a, \
					.q_tabs.vertical .tabs-nav li a:hover, \
					.q_accordion_holder.accordion.with_icon .ui-accordion-header i, \
					.q_accordion_holder.accordion .ui-accordion-header:hover span.tab-title, \
					.testimonial_text_inner .testimonial_name .author_desc, \
					.q_message.with_icon > i, \
					.q_icon_with_title .icon_holder i, \
					.q_font_awsome_icon_square i, \
					.q_font_awsome_icon_stack i, \
					.q_icon_with_title .icon_with_title_link, \
					.q_font_awsome_icon i, \
					.q_progress_bars_icons_inner.normal .bar.active i, \
					.q_progress_bars_icons_inner .bar.active i.fa-circle, \
					.q_list.number.circle_number ul>li:before, \
					.q_list.number ul>li:before, \
					.blog_holder article .post_description a:hover, \
					.blog_holder article .post_description .post_author:hover, \
					.blog_holder article .post_description .post_comments:hover, \
					.blog_like a:hover i, \
					.blog_like a.liked i, \
					.blog_like a:hover span, \
					.social_share_dropdown ul li:hover .share_text, \
					.social_share_dropdown ul li :hover i, \
					#back_to_top:hover, \
					aside .widget #lang_sel ul ul a:hover, \
					aside .widget #lang_sel_click ul ul a:hover, \
					aside .widget #lang_sel_list li a.lang_sel_sel, \
					aside .widget #lang_sel_list li a:hover, \
					.portfolio_navigation .portfolio_button a:hover i, \
					.q_dropcap, \
					.woocommerce del, \
					.woocommerce-page del, \
					.woocommerce del .amount, .woocommerce-page del .amount, \
					.woocommerce .select2-results li.select2-highlighted, \
					.woocommerce-page .select2-results li.select2-highlighted, \
					.woocommerce-checkout .chzn-container .chzn-results li.active-result.highlighted, \
					.woocommerce div.product p[itemprop='price'] span.amount, \
					.woocommerce ul.tabs li a:hover, \
					.woocommerce ul.tabs li.active a, \
					.woocommerce div.cart-collaterals div.cart_totals table tr.total strong span.amount, \
					.woocommerce-page div.cart-collaterals div.cart_totals table tr.total strong span.amount, \
					.woocommerce div.cart-collaterals div.cart_totals table tr.total strong, \
					.woocommerce .checkout-opener-text a, \
					.woocommerce form.checkout table.shop_table tfoot tr.total th strong, \
					.woocommerce form.checkout table.shop_table tfoot tr.total td span.amount, \
					.woocommerce aside .widget ul.product-categories a:hover, \
					.woocommerce-page aside .widget ul.product-categories a:hover{ \
						color: "+color+"; \
					} \
					.q_icon_with_title.circle .icon_holder .fa-stack:hover i.fa-circle, \
					.q_font_awsome_icon_stack:hover .fa-circle, \
					.q_toolbar_color{ \
						color: "+color+" !important; \
					} \
					.ajax_loader_html, \
					.box_image_with_border:hover, \
					.q_progress_bars_icons_inner.square .bar.active .bar_noactive, \
					.q_progress_bars_icons_inner.square .bar.active .bar_active, \
					.portfolio_slider .flex-control-paging li a:hover, \
					.qode_carousels.gray .flex-control-paging li a:hover, \
					.testimonials .testimonial_nav li.active a, \
					.portfolio_slider .flex-control-paging li a.flex-active, \
					.qode_carousels.gray .flex-control-paging li a.flex-active, \
					.widget #searchform.form_focus, \
					.woocommerce .widget_price_filter .ui-slider .ui-slider-handle,  \
					.woocommerce-page .widget_price_filter .ui-slider .ui-slider-handle{ \
						border-color: "+color+"; \
					} \
					.q_toolbar_border_color .q_message{ \
						border-color: "+color+" !important; \
					} \
					.social_share_holder:hover .social_share_icon{\
						background-image: url('http://demo.qodeinteractive.com/elision/demo_images/"+social_share+".png');\
					}\
					@media only screen and (-webkit-min-device-pixel-ratio:1.5), only screen and (min--moz-device-pixel-ratio:1.5), only screen and (-o-min-device-pixel-ratio:150/100), only screen and (min-device-pixel-ratio:1.5), only screen and (min-resolution:160dpi) {\
						.social_share_holder:hover .social_share_icon{\
							background-image: url('http://demo.qodeinteractive.com/elision/demo_images/"+social_share+"@1_5x.png');\
						}\
					}\
					@media only screen and (-webkit-min-device-pixel-ratio:2.0), only screen and (min--moz-device-pixel-ratio:2.0), only screen and (-o-min-device-pixel-ratio:200/100), only screen and (min-device-pixel-ratio:2.0), only screen and (min-resolution:210dpi) {\
						.social_share_holder:hover .social_share_icon{\
							background-image: url('http://demo.qodeinteractive.com/elision/demo_images/"+social_share+"@2x.png');\
						}\
					}\
					.q_list.circle ul>li{\
						background-image: url('http://demo.qodeinteractive.com/elision/demo_images/"+circle_list+".png');\
					}\
					";
				jQuery('body').append('<style id="toolbar_colors_css" type="text/css">'+newSkin+'</style>');
		});
	});
}); 

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

$j.fn.inlineStyle = function (prop) {
	 var styles = this.attr("style"),
		 value;
	 styles && styles.split(";").forEach(function (e) {
		 var style = e.split(":");
		 if ($j.trim(style[0]) === prop) {
			 value = style[1];           
		 }                    
	 });   
	 return value;
};