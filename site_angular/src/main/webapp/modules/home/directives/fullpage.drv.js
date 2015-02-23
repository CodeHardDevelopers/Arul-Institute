angular.module('ArulInstitute.home')

.directive('fullpage', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
    return {

        scope: {
            scroll: '&'
        },
        link: function (scope, element, attrs) {
            console.log("came inside fullpage directive", $(element));
            $(element).fullpage();

            console.log(scope);
            scope.scroll();
        }
    };
}]);