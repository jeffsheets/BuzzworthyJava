module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      pre: ['dist'],
      post: ['dist/temp'],
    },

    less:{
      app:{
        options: {
          paths: ["src/assets/less"]
        },
        files : {
          'dist/temp/style.css': 'src/assets/less/style.less'
        }
      }
    },

    cssmin :{
      combine : {
        files : {
          "dist/assets/css/style.css":[
          "dist/temp/style.css",
          "src/assets/js/components/reveal.js/css/reveal.css",
          "src/assets/js/components/reveal.js/lib/css/zenburn.css"
          ]
        }
      }
    },

    concat:{
      dist : {
        src : [
          // Reveal.js
          'src/assets/js/components/reveal.js/js/reveal.js',
        ],

        dest: "dist/temp/app.js"
      }
    },

    uglify : {
      dist : {
        files: {
          "dist/assets/js/app.js" : ["dist/temp/app.js"]
        }
      }
    },

    jade: {
      options : {
        pretty: true
      },
      index: {
        options: {
          data: {
            debug: true
          }
        },
        files: {
          'dist/index.html' : ['src/views/index.jade']
        }
      }
    },

    watch : {
      options : {
        livereload: true
      },
      src: {
        files: [
          'src/**/*'
        ],
        tasks: ['assemble']
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'dist'
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");

  // Default task(s).
  grunt.registerTask('default', ['assemble']);
  grunt.registerTask('assemble', ['clean:pre', 'less', 'cssmin', 'concat', 'uglify', 'jade', 'clean:post']);
  grunt.registerTask('run', ['connect', 'watch']);

};
