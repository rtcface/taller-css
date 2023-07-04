# **Taller-css con gulp, sass, en react**

- [**Taller-css con gulp, sass, en react**](#taller-css-con-gulp-sass-en-react)
  - [Creación del proyecto](#creación-del-proyecto)
  - [Instalación de dependencias Gulp y Sass](#instalación-de-dependencias-gulp-y-sass)
  - [Creación del archivo gulp](#creación-del-archivo-gulp)
  - [Compilar el gulpfile](#compilar-el-gulpfile)
  - [Mapear el css compilado](#mapear-el-css-compilado)
  - [Agregar un watch](#agregar-un-watch)
  - [Agregar Autoprefixer y postcss](#agregar-autoprefixer-y-postcss)
  - [Tareas por default ( **series, parallel** )](#tareas-por-default--series-parallel-)
  - [Organizar nuestro codigo por carpetas en sass](#organizar-nuestro-codigo-por-carpetas-en-sass)
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

1. Permiten hacer compatible nuestro css con navegadores que no soportan nuevas caracteristicas de css.

2. Agregar dependencias

    ```bash
    yarn add -D autoprefixer gulp-postcss     
    ```

3. Para usarlo se debe de agregar al src el siguiente pipe.

    ```js
    // eslint-disable-next-line no-undef
    const postcss = require("gulp-postcss");
    // eslint-disable-next-line no-undef
    const autoprefixer = require("autoprefixer");

    .pipe(postcss([autoprefixer()]))
    ```

4. Modificar el packjson y agregar la siguientes lineas:

    ```json
    "browserslist":[
        "last 1 version",
        "> 1%"
    ]
    ```

    Esto perimite  crear codigo de css compatible con todos los navegadores que como minimo se usen un 1% sobre su ultima version.

---

## Tareas por default ( **series, parallel** )

1. Nospermite ejecutar multiples tareas en serie o paralelo y se declaran alfinal del gulpfile de la siguiente manera:

    ```js
    // eslint-disable-next-line no-undef
    const { src, dest, watch, series, parallel } = require("gulp");

    // eslint-disable-next-line no-undef
    exports.default = series(css, dev);
    ```

   nota [^1]: Siempre deja al final la tarea que tiene el watch alfinal para que se ejecuten todas las tareas

---

## Organizar nuestro codigo por carpetas en sass

1. En Sass podemos crear por cada componente una carpeta y dentro de ella los archivos sass que necesitemos para dicho componente solo agregado al nombre del archivo un guion bajo al inicio para que pueda ser incluido dentro de otro por ejemplo: _header.scss y en el archivo principal para incluir dichas hojas debemos incluir lo siguiente:

    ```css
    @use 'header/header'; /* 'Aca va la ruta de la hoja.scss' */
    ```

2. Modificar nuestro gulpfile en la funcion del watch para que contemple todos los cambios en las hojas scss

    ```js
    const dev = () => {
        watch("src/scss/**/*.scss", css);
    };
    ```

---

## Incorporar los elementos basicos

---
