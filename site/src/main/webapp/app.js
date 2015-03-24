var app = app || {};
app.updateHeaderHandler = updateHeader;
$(window).on('scroll', OnWindowScroll);

function OnWindowScroll(event) {
    app.updateHeaderHandler($(this).scrollTop());
}

function updateHeader(scrollValue) {
    if (scrollValue > 100) {
        $(".header-content").addClass('highlight');
    } else {
        $(".header-content").removeClass('highlight');
    }
}

angular.module('app', []);
angular.module('app').controller('HeaderController', ['$rootScope', '$timeout', '$location',
    function($rootScope, $timeout, $location) {
        var self = this;
        self.navigated = false;
        self.navigators = [{
            index: 1,
            page: "Home",
            highlight: false,
            selected: false
        }, {
            index: 2,
            page: "About",
            highlight: false,
            selected: false
        }, {
            index: 3,
            page: "Course",
            highlight: false,
            selected: false
        }, {
            index: 4,
            page: "Instructions",
            highlight: false,
            selected: false
        }, {
            index: 5,
            page: "Materials",
            highlight: false,
            selected: false
        }, {
            index: 6,
            page: "Contact",
            highlight: true,
            selected: false
        }];        
    }
]);
