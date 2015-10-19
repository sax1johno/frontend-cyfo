import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import {appDirective} from './app.directive';


import {home} from './components/home/home';
import {about} from './components/about/about';

angular.module('app', [
  uiRouter,
  ngMaterial,
  home.name,
  about.name
])
.directive('app', appDirective);