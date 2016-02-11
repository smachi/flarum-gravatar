var flarum = require('flarum-gulp');

flarum({
  modules: {
    'smachi/gravatar': [
      'src/**/*.js'
    ]
  }
});
