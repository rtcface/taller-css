// eslint-disable-next-line no-undef
const { src, dest, watch, series } = require("gulp");
// eslint-disable-next-line no-undef
const sass = require("gulp-sass")(require("sass"));
// eslint-disable-next-line no-undef
const postcss = require("gulp-postcss");
// eslint-disable-next-line no-undef
const autoprefixer = require("autoprefixer");

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

const dev = () => {
  watch("src/scss/**/*.scss", css);
};

// eslint-disable-next-line no-undef
exports.default = series(css, dev);
