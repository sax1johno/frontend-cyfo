import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import {programsDirective} from './program.directive.js';

export const programs = angular.module('programs', [uiRouter, ngMaterial])
  .config(function($stateProvider) {

      $stateProvider.state('programs', {
        url: '/programs',
        template: '<programs></programs>'
      });
    })
    .directive('programs', programsDirective);