import './about.styl';
import template from './about.html';
import {AboutController as controller} from './about.controller';

export const aboutDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    scope: {},
    replace: true
  };
};