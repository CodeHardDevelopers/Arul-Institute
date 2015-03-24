angular.module('ArulInstitute')

.directive('cyclePlugin', function () {


	return {
	   restrict: 'AC',
      link: function (scope, element, attrs) {		
        console.log('came inside cycle plugin');
        setTimeout(function () {
         element.cycle();
        }, 0);
	  }
	};
});