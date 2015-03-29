'use strict';
angular.module('ArulInstitute')

    .controller('AppCtrl', AppCtrl);


//####################################
//####################################
//  APP CONTROLLER
//####################################
//####################################

/**
 * @ngdoc function
 * @name AppCtrl
 * @description
 * The main controller for the site
 */


function AppCtrl($rootScope, $document, $timeout, $scope, $state) {

    console.log('AppCtrl: Load');

    //####################################
    //  ROOT SCOPE VARIABLES
    //####################################

    $rootScope.currentState;
    
    //####################################
    //  ROOT SCOPE FUNCTIONS
    //####################################

    

    //####################################
    //  SCOPE VARIABLES
    //####################################



    //####################################
    //  SCOPE FUNCTIONS
    //####################################



    //####################################
    //  CONTROLLER FUNCTIONS
    //####################################


    /**
     * @ngdoc function
     * @name init
     * @description
     * Initialize the app controller
     */
    function init() {
        console.log('AppCtrl: Init');  
        $rootScope.currentState = $state.current.name;      
    }


    //####################################
    //  EVENT BINDINGS
    //####################################

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
        $rootScope.currentState = toState.name;
    });
    

    //####################################
    //  INIT
    //####################################

    init();

}


