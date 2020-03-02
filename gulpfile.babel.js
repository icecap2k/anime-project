'use strict'

/*
 * Dependencies and variables
 */
import gulp from 'gulp'
import postcss from 'gulp-postcss'
import plumber from 'gulp-plumber'
import cssnano from 'gulp-cssnano'
import autoprefixer from 'autoprefixer'
import gulpSass from 'gulp-sass'

/*
 * Compile, minimize and prefix .scss files
 */
const sass = () => {
  const processors = [
    autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10'],
      cascade: false
    })
  ]
  return (
    gulp
      .src(['scss/**/*.scss'])
      .pipe(plumber())
      .pipe(
        gulpSass({
          outputStyle: 'compressed'
        }).on('error', gulpSass.logError)
      )
      .pipe(
        cssnano({
          zindex: false
        })
      )
      .pipe(postcss(processors))
      // .pipe(browser.stream())
      .pipe(gulp.dest('css'))
  )
}

/*
 * Define the task execution sequences
 */

gulp.task('sass', sass)
