// eslint-disable-next-line no-undef
const { src, dest, watch } = require("gulp");
// eslint-disable-next-line no-undef
const sass = require("gulp-sass")(require("sass"));

const css = (done) => {
  src("src/scss/App.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(dest("main-css/css"));
  done();
};

const dev = () => {
  watch("src/scss");
};

// eslint-disable-next-line no-undef
exports.default = css;
