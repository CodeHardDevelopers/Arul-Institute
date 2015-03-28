'use strict';

/**
 * @ngdoc overview
 * @name ArulInstitute
 * @description
 * The main module for this app
 */

angular.module('ArulInstitute', ['ngResource',    
    'ui.router',
    'ui.bootstrap',
    'ArulInstitute.home',
    'ArulInstitute.aboutus',
    'ArulInstitute.courses',
    'ArulInstitute.instructions',
    'ArulInstitute.materials',
    'ArulInstitute.contact',
    'ArulInstitute.toppers',
    'ArulInstitute.testimonials'
    ])

    .config(config);

/**
 * @ngdoc function
 * @name config
 * @description
 * Main app configuration and routing
 */


function config($stateProvider, $urlRouterProvider) {
	
    $stateProvider

        //Home Page
        .state('home', {
            url: '/home',            
            views: {                
                'mainContent': {
                    templateUrl: 'modules/home/templates/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })

        //About us Page
        .state('aboutus', {
            url: '/aboutus',            
            views: {                
                'mainContent': {
                    templateUrl: 'modules/aboutus/templates/aboutus.html',
                    controller: 'AboutUsCtrl'
                }
            }
        })

        //Courses Page
        .state('courses', {
            url: '/courses',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/courses/templates/courses.html',
                    controller: 'CoursesCtrl'          
                }
            }            
        })


        //Instructions Page
        .state('instructions', {
            url: '/instructions',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/instructions/templates/instructions.html',
                    controller: 'InstructionsCtrl'          
                }
            }            
        })

        //Materials        
        .state('materials', {
            url: '/materials',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/materials/templates/materials.html',
                    controller: 'MaterialsCtrl'
                }
            }             
        })


        //Testimonials        
        .state('testimonials', {
            url: '/testimonials',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/testimonials/templates/testimonials.html',
                    controller: 'TestimonialsCtrl'
                }
            }             
        })


        //Toppers        
        .state('toppers', {
            url: '/toppers',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/toppers/templates/toppers.html',
                    controller: 'ToppersCtrl'
                }
            }             
        })

        //Contact Page
        .state('contact', {
            url: '/contact',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/contact/templates/contact.html',
                    controller: 'ContactCtrl'
                }
            }            
        })
        ;



    $urlRouterProvider.otherwise('/home');
}



