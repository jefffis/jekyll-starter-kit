module.exports= function(grunt){
  
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
                files: {
                    'stylesheets/<%= pkg.file_name %>.css': 'css/sass/*.scss'
                }
            }
    },

    'min': {
     'dist': {
       'options': {
         'report': false
       },
       'files': [{
         'src': ['javascripts/echo.js','js/app.js'],
         'dest': 'javascripts/<%= pkg.file_name %>.min.js'
       }]
     }
    },

    'cssmin': {
      'dist': {
        'options': {
          'report': false
        },
        'files': [{
          'src': 'css/<%= pkg.file_name %>.css',
          'dest': '_includes/<%= pkg.file_name %>.min.css'
        }]
      }
    },

    watch: {
      scripts: {
                files: [
                    'css/sass/*.scss'
                ],
                tasks: ['sass','cssmin']
            }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-yui-compressor');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('w',['watch']);
  grunt.registerTask('default', ['sass','cssmin']);

}