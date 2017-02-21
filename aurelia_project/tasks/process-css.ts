import * as postcssNested from 'postcss-nested';
import * as postcssSimpleVars from 'postcss-simple-vars';
import * as postcssImport from 'postcss-import';
import * as autoprefixer from 'autoprefixer';
import * as gulp from 'gulp';
import * as changedInPlace from 'gulp-changed-in-place';
import * as sourcemaps from 'gulp-sourcemaps';
import * as postcss from 'gulp-postcss';
import * as project from '../aurelia.json';
import { build } from 'aurelia-cli';

export default function processCSS() {
  let processors = [
    postcssImport(),
    postcssNested(),
    postcssSimpleVars(),
    autoprefixer({ browsers: ['last 1 version'] })
  ];

  // excludes imported files in bundle and fixes watch flag to reload imported css file changes
  return gulp.src(project.cssProcessor.source, "!src/**/_*.css")
    // .pipe(changedInPlace({ firstPass: true }))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(build.bundle());
};
