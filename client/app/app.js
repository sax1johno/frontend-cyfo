import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import {appDirective} from './app.directive';


import {home} from './components/home/home';

angular.module('app', [
  uiRouter,
  ngMaterial,
  home.name
])
.directive('app', appDirective);