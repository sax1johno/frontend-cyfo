import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {appDirective} from './app.directive';
import angularMaterial from 'angular-material';


import {home} from './components/home/home';

angular.module('app', [
  uiRouter,
  angularMaterial,
  home.name
])
.directive('app', appDirective);