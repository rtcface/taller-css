// eslint-disable-next-line no-undef
const { src, dest, watch, series } = require("gulp");
// eslint-disable-next-line no-undef
const sass = require("gulp-sass")(require("sass"));
// eslint-disable-next-line no-undef
const postcss = require("gulp-postcss");
// eslint-disable-next-line no-undef
const autoprefixer = require("autoprefixer");
// eslint-disable-next-line no-undef
const imagemin = require("gulp-imagemin");

const css = (done) => {
  src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("src/main-css/css"));
  done();
};

const img = (done) => {
  src("src/assets/img/**/*")
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest("src/main-css/img"));
  done();
};

const dev = () => {
  watch("src/scss/**/*.scss", css);
  watch("src/assets/img/**/*", img);
};

// eslint-disable-next-line no-undef
exports.default = series(css, img, dev);
