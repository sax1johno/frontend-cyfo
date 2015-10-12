import _ from 'lodash';

class HomeController {
  constructor() {
    this.title = "Propel Your Future";
    this.badges = _.times(4, i => {
        return {
          title: `Badge ${i + 1}`,
          badgeImg: 'http://placehold.it/350x150',
          badgeText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis nulla, tempus vitae nunc molestie, faucibus accumsan nulla. Maecenas nibh ex, sollicitudin vitae risus id, ultrices consequat libero"
        };
      });

  }
}

export {HomeController};