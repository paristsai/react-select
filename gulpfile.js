var gulp = require('gulp'),
    initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

	component: {
		name: 'Select',
		less: {
			path: 'less',
			entry: 'default.less'
		}
	},

	example: {
		src: 'examples/src',
		dist: 'examples/dist',
		standalone: true,
		files: [
			'index.html',
			'standalone.html',
			'.gitignore'
		],
		scripts: [
			'app.js'
		],
		less: [
			'example.less'
		]
	}

};

//deploy pages to gh-pages branch
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('examples/dist/*')
    .pipe(ghPages());
});

initGulpTasks(gulp, taskConfig);
