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
    
    $scope.oneAtATime = true; 
    $scope.breadcrumbStack = [];
    $scope.tabs = []
    $scope.currentNode; 


	//####################################
    //  SCOPE FUNCTIONS
    //####################################

    $scope.navigateToNode = navigateToNode;
    $scope.navigateBackToNode = navigateBackToNode;
    $scope.switchToTab = switchToTab;


    function navigateToNode(node, parentNode){
        $scope.currentNode = node;
        console.log(node, parentNode);
        $scope.breadcrumbStack.push(node);
    }


    function navigateBackToNode(node,index){
        //no of nodes to be removed
        console.log($scope.breadcrumbStack)
        var removeCount = $scope.breadcrumbStack.length - index - 1;
        $scope.breadcrumbStack.splice(index+1, removeCount);
        console.log(index+1,removeCount)
        $scope.currentNode = node;
    }

    function switchToTab(node){
        $scope.currentNode = node;
    }

    $scope.callMe = function(data, $event){
    	console.log("came inside call me");
    	if(data.leaf){
    		$event.preventDefault();
    	}
    }

  	Materials.getMaterials().then(function(materials){   
      console.log(materials, materials.nodes[1]);
      $scope.currentNode = materials;
      $scope.tabs = materials.nodes;
      $scope.breadcrumbStack.push(materials);
      $scope.object = materials;
    }).finally(function(){
      $scope.gotResponse = true;
    });


    console.log('MaterialsCtrl: came inside materials controller');
}