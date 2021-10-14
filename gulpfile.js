var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var sass = require('gulp-sass')(require('sass'));
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var pug = require("gulp-pug");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

const paths = {
    src: {
      pug: "src/pug/*.pug",
    },
    public: {
      html: "dest/html/",
    },
  };

  const pugOptions = {
    pretty: true,
  };

  gulp.task("pug", done => {
    gulp
      .src(paths.src.pug)
      .pipe(
        plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
      )
      .pipe(pug(pugOptions))
      .pipe(gulp.dest(paths.public.html));
    done();
  });

gulp.task("scripts", function(done) {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('./dest/js'));
        done();
});
gulp.task('sass', function(done){
     gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./dest//css/'));
        done();
});
gulp.task("watch", function() {
    gulp.watch('./src/js/*.js', gulp.task('scripts'));
    gulp.watch('./src/sass/*.scss', gulp.task('sass'));
    gulp.watch(paths.src.pug, gulp.task("pug"));
});
