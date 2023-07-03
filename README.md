# **Taller-css con gulp, sass, en react**

- [**Taller-css con gulp, sass, en react**](#taller-css-con-gulp-sass-en-react)
  - [Creación del proyecto](#creación-del-proyecto)
  - [Instalación de dependencias Gulp y Sass](#instalación-de-dependencias-gulp-y-sass)
  - [Creación del archivo gulp](#creación-del-archivo-gulp)
  - [Compilar el gulpfile](#compilar-el-gulpfile)
  - [Mapear el css compilado](#mapear-el-css-compilado)
  - [Agregar un watch](#agregar-un-watch)
  - [Agregar Autoprefixer y postcss](#agregar-autoprefixer-y-postcss)
  - [Incorporar los elementos basicos](#incorporar-los-elementos-basicos)
  
---

## Creación del proyecto

1. Utilizamos vite para dicho proceso

    ```console
    yarn create vite 
    ```

2. Entramos a la carpeta del proyecto creado e instalamos dependecias iniciales

    ```console
    cd proyecto && yarn
    ```

3. Ejecutamos el proyecto

    ```console
    yarn dev
    ```

---

## Instalación de dependencias Gulp y Sass

1. Instalacion global de Gulp.

    ```console
    npm install --global gulp-cli
    ```

2. Instalaremos todo lo necesario para compilar sass y usar gulp

    ```console
    yarn add -D gulp sass gulp-sass
    ```

---

## Creación del archivo gulp

1. Crearemos el archivo desde la consola con:

    ```console
    touch gulpfile.cjs
    ```

2. Ejemplo basico (Pegar en el archivo 'gulpfile.cjs' )

    ```js
    // eslint-disable-next-line no-undef
    const { src, dest } = require("gulp");
    // eslint-disable-next-line no-undef
    const sass = require("gulp-sass")(require("sass"));

    const css = (done) => {
    src("src/scss/app.scss")
        .pipe(
        sass({
            outputStyle: "expanded",
        })
        )
        .pipe(dest("main-css/css"));
    done();
    };

    // eslint-disable-next-line no-undef
    exports.default = css;
    ```

---

## Compilar el gulpfile

- Opcion 1:

    ```console
    gulp css
    ```

- Opcion 2:

    ```console
    gulp -f gulpfile.cjs    
    ```

---

## Mapear el css compilado

1. En el archivo main.jsx se tiene que agregar la ruta del css compilado por gulp.

    ```js
    import './src/main-css/css/app.css'
    ```

---

## Agregar un watch

- Agregar un watch ejemplo basico

    ```js
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

    ```

---

## Agregar Autoprefixer y postcss

1. Agregar dependencias

    ```bash
    yarn add -D autoprefixer gulp-postcss     
    ```

---

## Incorporar los elementos basicos

---
