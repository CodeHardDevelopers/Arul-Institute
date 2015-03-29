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

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        //Home Page
        .state('app.home', {
            url: '/home',            
            views: {                
                'mainContent': {
                    templateUrl: 'modules/home/templates/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })

        //About us Page
        .state('app.aboutus', {
            url: '/aboutus',            
            views: {                
                'mainContent': {
                    templateUrl: 'modules/aboutus/templates/aboutus.html',
                    controller: 'AboutUsCtrl'
                }
            }
        })

        //Courses Page
        .state('app.courses', {
            url: '/courses',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/courses/templates/courses.html',
                    controller: 'CoursesCtrl'          
                }
            }            
        })


        //Instructions Page
        .state('app.instructions', {
            url: '/instructions',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/instructions/templates/instructions.html',
                    controller: 'InstructionsCtrl'          
                }
            }            
        })

        //Materials        
        .state('app.materials', {
            url: '/materials',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/materials/templates/materials.html',
                    controller: 'MaterialsCtrl'
                }
            }             
        })


        //Testimonials        
        .state('app.testimonials', {
            url: '/testimonials',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/testimonials/templates/testimonials.html',
                    controller: 'TestimonialsCtrl'
                }
            }             
        })


        //Toppers        
        .state('app.toppers', {
            url: '/toppers',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/toppers/templates/toppers.html',
                    controller: 'ToppersCtrl'
                }
            }             
        })

        //Contact Page
        .state('app.contact', {
            url: '/contact',
            views: {                
                'mainContent': {
                    templateUrl: 'modules/contact/templates/contact.html',
                    controller: 'ContactCtrl'
                }
            }            
        })
        ;



    $urlRouterProvider.otherwise('/app/home');
}



