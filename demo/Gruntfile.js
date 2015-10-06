module.exports = function (grunt) {

  // configuration
  grunt.initConfig({


    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: ['test/coverage/**/*.js']
      },
      files: {
        src: ['*.js', 'test/*.js']
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },

    shell: {
      test: {
        command: 'node_modules/.bin/istanbul cover --report lcov --dir test/reports/unit node_modules/.bin/_mocha test/ -- --reporter xunit-file',
        options : {
          stdout : true,
          failOnError : true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-env');

  grunt.registerTask('test', ['jshint', 'shell:test'] );

};
