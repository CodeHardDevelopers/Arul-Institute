angular.module('app', []);
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

    function init() {
        var page = $location.path().split('/')[1];
        if (page === undefined) {
            self.navigators[0].selected = true;
        } else {
            angular.forEach(self.navigators, function (nav) {
                if (nav.page == page) {
                    self.moveTo(nav);
                }
            });
        }
    }

    $rootScope.$on("page:changed", function (event, args) {
        self.navigated = args > 1;

        angular.forEach(self.navigators, function (nav) {
            nav.selected = nav.index == args;

            if (nav.selected) $location.path(nav.page);
        });
    });

    self.moveTo = function (nav) {
        $timeout(function () {
            $rootScope.$broadcast("page:moveTo", nav.index);
        });
    };

    init();
}]).controller('PageController', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope, $timeout) {
    $scope.selectedPage = 0;
    $scope.prevPage = 0;

    function action(index) {
        $timeout(function () {
            $rootScope.$broadcast("page:changed", index);
        });
    }

    $scope.beforeMove = function (index) {
        if ($scope.prevPage < index) {
            action(index);
        }
    };

    $scope.afterMove = function (index) {
        if ($scope.prevPage > index) {
            action(index);
        }
    };

    $rootScope.$on("page:moveTo", function (event, args) {
        $scope.prevPage = $scope.selectedPage;
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