module.exports = function (grunt) {
  // Configure grunt
  grunt.initConfig({
      'http-server': {
          'dev': {
              port: 9999,
              host: "0.0.0.0",
              cache: 10,
              showDir : true,
              autoIndex: true,
              ext: "html",
              runInBackground: true,
              logFn: function(req, res, error) { },
              openBrowser : true
          }
      },
      coffee: {
        compile: {
          expand: true,
          flatten: true,
          cwd: 'js/',
          src: ['*.coffee'],
          dest: 'js/',
          ext: '.js'
        }
      },
      compass: {
        dist: {
          options: {
            sassDir: 'scss',
            cssDir: 'css',
          }
        }
      },
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'css',
            src: ['*.css', '!*.min.css'],
            dest: 'css',
            ext: '.min.css'
          }]
        }
      },
      uglify: {
        min: {
          files: [{
              expand: true,
              cwd: 'js/',
              src: ['*.js'],
              dest: 'js/dist/',
              ext: '.min.js'
          }]
        }
      },
      watch: {
          options: {
              livereload: false,
          },
          html: {
              files: ['*.html']
          },
          css: {
              files: 'scss/*.scss',
              tasks: ['compass','cssmin']
          },
          coffee: {
              files: 'js/*.coffee',
              tasks: ['coffee']
          },
          js: {
              files: 'js/*.js',
              tasks: ['uglify']
          }
      }
  });

  grunt.registerTask('init-server', ['http-server:dev', 'watch']);
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
