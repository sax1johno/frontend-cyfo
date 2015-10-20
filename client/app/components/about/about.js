import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import {aboutDirective} from './about.directive';

export const about = angular.module('about', [uiRouter, ngMaterial])
  .config(function($stateProvider) {

      $stateProvider.state('about', {
        url: '/about',
        template: '<about></about>'
      });
    })
    .directive('about', aboutDirective);