import {home} from './home';
import {homeDirective} from './home.directive';
import template from './home.html';
import {HomeController} from './home.controller';

describe('Home', () => {

  let $rootScope;
  let makeController;

  beforeEach(window.module(home.name));
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomeController();
    };
  }));

  describe('module', () => {
    it('should have an appropriate name', () => {
      expect(home.name).to.equal('home');
      expect(home.name).to.not.equal('wizard');
    });
  });

  describe('directive', () => {
    let directive;
    beforeEach(()=> {
      directive = homeDirective();
    });

    it('should have the right template', () => {
      expect(directive.template).to.equal(template);
    });

    it('should have the right controller', () => {
      expect(directive.controller).to.equal(HomeController);
    });

    it('should have an isolate scope', () => {
      expect(directive.scope).to.be.an('object');
    });

    it('should use controllerAs', () => {
      expect(directive.controllerAs).to.be.a('string');
    });
  });

  describe('controller', () => {
    it('should have a title', () => {
      const controller = makeController();
      expect(controller.title).to.be.a('string');
      expect(controller.title).to.equal('Propel Your Future');
    });
  });

});