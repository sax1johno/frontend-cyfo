import 'normalize.css';
import {appDirective} from './app.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {home} from './components/home/home';

angular.module('app', [
  uiRouter,
  home.name
])
.directive('app', appDirective);