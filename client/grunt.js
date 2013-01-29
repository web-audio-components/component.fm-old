module.exports = function(grunt) {
  
  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'build/site.css' : 'app/styles/*.styl'
        }
      }
    },
    less: {
      compile: {
        files: {
          'build/bootstrap.css' : 'vendor/styles/bootstrap/bootstrap.less'
        }
      }
    },
    component: {
      components: {
        output: 'build',
        config: 'component.json',
        styles: true
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'app.templates',
          processName: function ( name ) {
            return name.split('/').pop().match(/^(.*)\.hbs$/)[1];
          }
        },
        files: {
          'build/templates.js' : 'app/templates/*.hbs'
        }
      }
    },
    concat: {
      js: {
        src: [
          'vendor/scripts/jquery.js',
          'vendor/scripts/underscore.js',
          'vendor/scripts/backbone.js',
          'vendor/scripts/handlebars.js',
          'build/components.js',
          'app/setup.js',
          'build/templates.js',
          'app/models/*.js',
          'app/collections/*.js',
          'app/routes/*.js',
          'app/views/View.js',
          'app/views/*.js',
          'app/application.js'
        ],
        dest: 'public/js/app.js'
      },
      css: {
        src: [
          'build/components.css',
          'build/bootstrap.css',
          'build/site.css'
        ],
        dest: 'public/css/app.css'
      }
    },
    min: {
      js: {
        src: 'public/js/app.js',
        dest: 'production/js/app.min.js'
      }
    },
    mincss: {
      compress: {
        files: {
          'production/css/app.min.css' : 'public/css/app.css'
        }
      }
    },
    copy: {
      main: {
        files: [{
          src: 'build/web-audio-components-rack/*',
          dest: 'public/css/web-audio-components-rack/'
        }, {
          src: 'build/web-audio-components-rack/*',
          dest: 'production/css/web-audio-components-rack/'
        }]
      }
    },
    watch: {
      scripts: {
        files: [
          'app/*.js',
          'app/models/*.js',
          'app/collections/*.js',
          'app/routes/*.js',
          'app/views/*.js',
          'app/templates/*.hbs',
          'app/styles/*.styl'
        ],
        tasks: 'less stylus handlebars component concat mincss copy min'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-component-build');
  grunt.registerTask('default', 'less stylus handlebars component concat mincss copy min');

};
