module.exports = function (grunt) {

// Do grunt related things in here
		grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 8000,
					base: '.',
					livereload: true
				}
			}
		},
		
		uglify: {
			options: {
				banner: '/*! I am Ugly! */\n',
				compress: true,
				mangle: true,
				sourceMap: true
			},
			target: {
				src: 'src/js/main.js',
				dest: 'dist/js/main.min.js'
			}
		},

		jshint: {
			options: {
        // Search for a .jshintrc file as usual
        jshintrc: true
        // Or, setup a specific path to the file
				// jshintrc: 'src/.jshintrc'
				// Or, setup inline settings
				// eqeqeq: true,
				// curly: true,
				// undef: true
			},
			target: {
				src: 'src/js/main.js'
			}
		},
		
		watch: {
		  scripts: {
			files: ['index.html', 'css/main.css','js/main.js','js/plugins.js'],
			tasks: [],
			options: {
			  livereload: true
			},
		  },
		},
		
		validation: {
			options: {
				reset: grunt.option('reset') || false,
				stoponerror: false,
				relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors 
			},
			files: {
				src: ['<%= yeoman.app %>/*.html',
						]
			}
		},

		htmlangular: {
	    	options: {
	      		// Task-specific options go here. 
	    	},
	    your_target: {
	    	  // Target-specific file lists and/or options go here. 
	    	},
	  	}
					
	});
	//load grunt-contrib-uglify
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//make it default
	grunt.registerTask('default', ['uglify']);
	// Load the plugin that provides the "jshint" task.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//load server
	grunt.loadNpmTasks('grunt-contrib-connect');
	//watcher
	grunt.loadNpmTasks('grunt-contrib-watch');
	//html
	grunt.loadNpmTasks('grunt-html-validation');
	//angular
	grunt.loadNpmTasks('grunt-html-angular-validate');

	
	// Default tasks.
	grunt.registerTask('default', ['jshint','connect:server', 'watch','validation']);
	


	
	
	
};