// eslint-disable-next-line no-undef
const { src, dest, watch } = require("gulp");
// eslint-disable-next-line no-undef
const sass = require("gulp-sass")(require("sass"));

const css = (done) => {
  src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(dest("src/main-css/css"));
  done();
};

const dev = () => {
  watch("src/scss/app.scss", css);
};

// eslint-disable-next-line no-undef
exports.default = dev;
