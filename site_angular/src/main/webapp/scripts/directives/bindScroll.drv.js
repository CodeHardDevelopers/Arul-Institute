angular.module('ArulInstitute')

.directive('bindScroll', function ($window, $rootScope) {
	return {
	   restrict: 'A',
      link: function (scope, element, attrs) {	      	
        console.log('came inside bindScroll plugin');
        angular.element($window).bind("scroll", function(event) {
        	var scrollValue = $(this).scrollTop();

        	if($rootScope.currentState == 'app.home'){
        		if (scrollValue > 100) {
			        element.addClass('highlight');
			    } else {
			        element.removeClass('highlight');
			    }                      	
        	}
        	   
        });
	  }
	};
});