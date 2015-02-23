'use strict';
/**
 * @ngdoc overview
 * @name ChanelInspire.config
 * @description
 * The config module: responsible for all configuration, constants, etc. used by the application
 */

angular.module('ChanelInspire.config')

    .constant('$ionicLoadingConfig', {
        templateUrl: 'templates/loading.html',
        keychainServiceName: 'ChanelMobile',
        keychainKey: 'cocogramkey'
    });
