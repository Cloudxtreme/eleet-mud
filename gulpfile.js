var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')();

var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");

gulp.task('sass', function() {
  gulp.src('app/css/main.scss')
    .pipe(plugins.sass())
    .pipe(gulp.dest('public/'))
});

gulp.task('webpack', function(done) {
 webpack({
    entry: {
      app: webpackConfig.entry.app,
      vendor: webpackConfig.entry.vendor
    },
    output: {
      path: webpackConfig.output.path,
      filename: webpackConfig.output.filename
    },
    module: {
      loaders: webpackConfig.module.loaders
    },
    devtool: webpackConfig.devtool,
    plugins: webpackConfig.plugins
  }, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    //gutil.log("[webpack]", stats.toString({}));
    done();
  });
});

gulp.task('build', ['webpack']);
gulp.task('dev', plugins.shell.task(['webpack-dev-server --content-base public/ --inline']));
