/*angular.module('app', ['ui.router']);



angular.module('app').config(function($stateProvider){
    $stateProvider

            //Home Page
            .state('home', {
                url: '/home',
                templateUrl: 'modules/home/templates/home.html',
                controller: 'HomeCtrl'
            })
});




angular.module('app').controller('HeaderController', ['$rootScope', '$timeout', '$location', function ($rootScope, $timeout, $location) {
    var self = this;
    self.navigated = false;
    self.navigators = [{
        index: 1,
        page: "Home",
        highlight: false,
        selected: false
    },
    {
        index: 2,
        page: "About",
        highlight: false,
        selected: false
    },
    {
        index: 3,
        page: "Course",
        highlight: false,
        selected: false
    },
    {
        index: 4,
        page: "Instructions",
        highlight: false,
        selected: false
    },
    {
        index: 5,
        page: "Materials",
        highlight: false,
        selected: false
    },
    {
        index: 6,
        page: "Contact",
        highlight: true,
        selected: false
    }];

}]).controller('PageController', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope, $timeout) {
    $scope.selectedPage = 0;
    $scope.prevPage = 0;

}]).directive('wrapper', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'C',
        controller: 'PageController',
        controllerAs: 'pCtrl',
        scope: {
            beforeMove: '&',
            afterMove: '&',
        },
        link: function (scope, element, attrs) {
        /*
            scope.$watch("selectedPage", function (a, b) {
                if (a != b) {
                    $(element).moveTo(a);
                }
            });

            $(element).onepage_scroll({
                sectionContainer: "section",
                loop: false,
                updateURL: false,
                beforeMove: scope.beforeMove,
                afterMove: scope.afterMove,
            });

            angular.element(document).ready(function(){
                $(element).fullpage({
                    sectionSelector: '.pages',
                    menu: '#menu',
                    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage']
                });
            });


        }
    };
}]);

*/

$(document).ready(function(){
                $("#parentNode").fullpage({
                    sectionSelector: '.pages',
                    menu: '#menu',
                    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage']
                });
            });