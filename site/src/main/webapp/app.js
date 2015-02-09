angular.module('app', []);
angular.module('app').controller('HeaderController', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
    var self = this;
    self.navigated = false;
    self.navigators = [{
        index: 1,
        page: "Home",
        highlight: false,
        selected: true
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

    $rootScope.$on("page:beforeMove", function (event, args) {
        self.navigated = args > 1;
        
        angular.forEach(self.navigators, function(nav) {
            nav.selected = nav.index == args;
        });
    });

    self.moveTo = function (nav) {
        $rootScope.$broadcast("page:moveTo", nav.index);        
    };
}]).controller('PageController', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope, $timeout) {
    $scope.selectedPage = 1;

    $scope.beforeMove = function (index) {
        $timeout(function () {
            $rootScope.$broadcast("page:beforeMove", index);
        });
    };

    $scope.afterMove = function (index) {};

    $rootScope.$on("page:moveTo", function (event, args) {
        $scope.selectedPage = args;
    });
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
        }
    };
}]);