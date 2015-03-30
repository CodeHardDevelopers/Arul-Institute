(function() {
    'use strict';

    angular
        .module("ArulInstitute.courses")
        .directive("courseList", CoursesList)       

    function CoursesList() {
        var directive = {
            restrict: 'E',
            replace: 'true',            
        };

        return directive;
    }    
})();