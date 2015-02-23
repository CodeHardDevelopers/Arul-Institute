'use strict';


angular.module('ArulInstitute.materials',[])

    .controller('MaterialsCtrl', MaterialsCtrl);

//####################################
//####################################
//  Materials CONTROLLER
//####################################
//####################################

/**
 * @ngdoc function
 * @name MaterialsCtrl
 * @description
 * The controller for materials section
 */

function MaterialsCtrl ($scope, $state, $stateParams, Materials) {
	
    //####################################
    //  SCOPE VARIABLES
    //####################################
    

	//####################################
    //  SCOPE FUNCTIONS
    //####################################


    $scope.oneAtATime = true;  

    $scope.callMe = function(data, $event){
    	console.log("came inside call me");
    	if(data.leaf){
    		$event.preventDefault();
    	}
    }

  	Materials.getMaterials().then(function(materials){      
      $scope.object = materials;
    }).finally(function(){
      $scope.gotResponse = true;
    });


    console.log('MaterialsCtrl: came inside materials controller');
}