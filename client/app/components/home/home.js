import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import {homeDirective} from './home.directive';

export const home = angular.module('home', [uiRouter, angularMaterial])
  .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('home', {
        url: '/',
        template: '<home></home>'
      });
  })
    .directive('home', homeDirective);