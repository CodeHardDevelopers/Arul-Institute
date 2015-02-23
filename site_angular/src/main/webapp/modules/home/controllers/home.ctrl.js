'use strict';


angular.module('ArulInstitute.home',[])

    .controller('HomeCtrl', HomeCtrl);

//####################################
//####################################
//  HOME CONTROLLER
//####################################
//####################################

/**
 * @ngdoc function
 * @name HomeCtrl
 * @description
 * The main countries controller home section
 */

function HomeCtrl ($scope, $state, $stateParams, $rootScope) {
	
    //####################################
    //  SCOPE VARIABLES
    //####################################
    

	//####################################
    //  SCOPE FUNCTIONS
    //####################################

    $scope.scrollToPageIfNeeded = scrollToPageIfNeeded;

    console.log('HomeCtrl: came inside home controller');


    function scrollToPageIfNeeded(){
        console.log("came inside scroll to page");
        $.fn.fullpage.moveTo(2);
    }

}