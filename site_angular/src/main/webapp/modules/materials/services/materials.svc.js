'use strict';
angular.module('ArulInstitute.materials')
.factory('Materials', Materials);


//####################################
//####################################
//  MATERIALS SERVICE
//####################################
//####################################

/**
 * @ngdoc service
 * @name Materials
 * @description
 * Service for retrieving all the materials list
 */

function Materials($http,$q) {
    
    var service = {
        getMaterials: getMaterials,
        materials: {
          nodes:[],
          leafs: [],
          name: 'Downloads',
          isFullyLoaded:false
        },
        GCS_URL:'https://www.googleapis.com/storage/v1/b/arul_inst_storage_bucket/o?key=AIzaSyCBpSg9oAAkiQ2yxGz60hHBfcsFb2lbA9A'
    };

    return service;

//#############################################
//  GET MATERIALS
//#############################################

    

    function getMaterials () {
      var getUrl = service.GCS_URL;

      return $http({
        method: 'GET',
        cache: true,
        url: getUrl
      }).then(function(response){
        
        if(response.data){
          var objectList = response.data.items;
          objectList.forEach(function(object){            
            var dirs;
            if(isDirectory(object.contentType)){
              //this is a directory
              dirs = object.name.split('/').slice(0,-1);              
            } else {
              //this is a file
              dirs = object.name.split('/');              
            }

            //console.log(dirs);
            createOrPushDir(dirs,service.materials,object);
          });
        }           
        //console.log("this is result",service.materials);

        return service.materials;
      })
    }

    function createOrPushDir(dirs, root, object){
      var currentSubDirName = dirs[0];
      var rootNodes = root.nodes;
      var nodeFound = false;

      rootNodes.forEach(function(rootNode){
        if(rootNode.name == currentSubDirName){
          //call recursion
          if(dirs.length > 1){
            //sub directory already exists so go recursively
            dirs.splice(0,1);
            createOrPushDir(dirs,rootNode,object);
          }
          //if length of dirs is 1 dont call recursion just update the object
          nodeFound = true;
        }
      });

      if(!nodeFound){
        if(dirs.length == 1){
          //this is the end node and needs to be pushed          
          if(isDirectory(object.contentType)){
            rootNodes.push({name:currentSubDirName, nodes:[], leafs: [], object:object, parent:root});
          } else {
            //this is a file name (which is a leaf)
            root.leafs.push({object:object, name:currentSubDirName});
          }          
        } else {          
          //sub directory doesnt exist so create one (this shouldnt happen mostly)
          var newNode = {name: currentSubDirName, nodes:[], leafs:[], parent:root};
          rootNodes.push(newNode);
          dirs.splice(0,1);
          createOrPushDir(dirs,newNode,object);
        }        
      }
    }

    function isDirectory(contentType){
      if(contentType === 'application/x-www-form-urlencoded;charset=UTF-8'){
        return true;
      } else {        
        return false
      }
    }
}