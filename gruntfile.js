module.exports = function(grunt) {
	'use strict';

	// Load all grunt packages
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
						'dist/css/style.css': [
							'src/scss/style.scss',
							'src/scss/*/*.scss',
							'src/scss/*/*/*.scss',
							'src/scss/*/*/*/*.scss'
						]
				}
			}
		},
		uglify: {
				options: {
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %> */ \n'
				},
			targets: {
				files: {
					'dist/js/custom.min.js' : 'dist/js/custom.js',
				} //Files
			}
		},
		concat: {
				options: {
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %> */ \n'
				},
			targets: {
				files: {
					'dist/js/custom.js' : ['src/js/*/*/*.js', 'src/js/*/*.js', 'src/js/custom.js'],
				} //Files
			}
		}, //concat
		cssmin: {
			files: {
					expand: true,
					cwd: 'dist/css/',
					src: ['*.css', '!*.min.css'], // 1
					dest: 'dist/css/',
					ext: '.min.css'
			}
		},
		copy_mate: {
			boostrap_fonts : {
				options: {
					type: "single"
				},
				src: 'node_modules/bootstrap-sass/assets/fonts/',
				destDir: 'dist/fonts'
			},
			bootstrap_images : {
				options: {
					type: "single"
				},
				src: 'node_modules/bootstrap-sass/assets/images/',
				destDir: 'dist/images'
			}
	  },
		watch : {
			scripts: {
			    files: ['src/js/**/*.js'],
			    tasks: ['concat']
				}, //scripts
				sass: {
				    files: [
	              'src/scss/*.scss',
				        'src/scss/*/*.scss',
				        'src/scss/*/*/*.scss'
				    ],
				   	tasks: ['sass']
				}
		}
	}); //initConfig
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('init', ['copy_mate', 'concat', 'uglify', 'sass', 'cssmin']);
	grunt.registerTask('build', ['concat', 'uglify', 'sass', 'cssmin']);
} //exports
