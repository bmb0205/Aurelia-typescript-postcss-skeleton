import * as gulp from 'gulp';
import * as changedInPlace from 'gulp-changed-in-place';
import * as each from 'gulp-each';
import * as cheerio from 'cheerio';
import * as project from '../aurelia.json';
import { build } from 'aurelia-cli';

export default function processMarkup() {
  return gulp.src(project.markupProcessor.source)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(each((content, file, callback) => {

      let filename = file.history[0],
        cssJsonPath = filename.replace(".html", ".css.json"),
        cssModules = require(cssJsonPath),
        $ = cheerio.load(content);

      $("*[class]").each((i, elem) => {
        let classList = $(elem).attr("class"),
          classListArray = classList.split(' '),
          changed = false;

        for (let idx = 0; idx < classListArray.length; idx++) {
          let classItem = classListArray[idx];
          if (cssModules[classItem] !== undefined) {
            classListArray[idx] = cssModules[classItem];
            changed = true;
          }
        }

        if (changed) {
          $(elem).attr("class", classListArray.join(' '));
        }
      });
      callback(null, $.html());
    }))
    .pipe(build.bundle());
}
