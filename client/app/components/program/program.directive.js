import './program.styl';
import template from './program.html';
import {ProgramsController as controller} from './program.controller.js';

export const programsDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    scope: {},
    replace: true
  };
};