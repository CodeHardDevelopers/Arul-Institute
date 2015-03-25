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


    console.log('HomeCtrl: came inside home controller',$state);

    $rootScope.currentState = $state.current.name;

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
    	$rootScope.currentState = toState.name;
    });

}