(function() {
    'use strict';
    angular
        .module('ArulInstitute.courses', [])
        .controller('CoursesCtrl', CoursesCtrl);

    //####################################
    //####################################
    //  Courses CONTROLLER
    //####################################
    //####################################

    /**
     * @ngdoc function
     * @name CoursesCtrl
     * @description
     * The controller for  courses section
     */

    CoursesCtrl.$inject = ["$scope", "$state", "$stateParams", "Courses"];

    function CoursesCtrl($scope, $state, $stateParams, Courses) {

        //####################################
        //  SCOPE VARIABLES
        //####################################

        var self = this;
        self.gotResponse = false;
        self.courses = [];

        //####################################
        //  SCOPE FUNCTIONS
        //####################################

        initialize();

        function initialize() {
            self.courses = Courses.getCourses();
            self.gotResponse = true;
        }

        console.log('CoursesCtrl: came inside courses controller');
    }
})();