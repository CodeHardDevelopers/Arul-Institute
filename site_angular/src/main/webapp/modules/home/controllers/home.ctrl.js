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

    var slides = $scope.slides = [];



    slides.push({
      image: 'images/classroom.jpg',
      text: '@rul institute'
    });

    slides.push({
      image: 'images/abdulkalam.jpg',
      text: 'Confidence & hard work is the best medicine to kill the disease called failure'
    });

    slides.push({
      image: 'images/einstein.jpg',
      text: 'Education is not the learning of facts, but the training of the mind to think'
    });

    console.log('HomeCtrl: came inside home controller');


    function scrollToPageIfNeeded(){
        console.log("came inside scroll to page");
        $.fn.fullpage.moveTo(2);
    }

}