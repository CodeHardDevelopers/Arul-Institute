angular.module('ArulInstitute')

.directive('bindScroll', function ($window) {


	return {
	   restrict: 'A',
      link: function (scope, element, attrs) {	      	
        console.log('came inside bindScroll plugin');
        angular.element($window).bind("scroll", function(event) {
        	var scrollValue = $(this).scrollTop();


        	if (scrollValue > 100) {
		        $(".header-content").addClass('highlight');
		    } else {
		        $(".header-content").removeClass('highlight');
		    }                         
        });
	  }
	};
});