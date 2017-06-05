import {
    Slide, SubTitleFragment, QuoteFragment, ImageFragment, CodeFragment, HTMLFragment,
    Speaker
} from "../slide.model";
import {TITRE5} from "../slide.constantes";

export const SLIDE_4_3: Slide = new Slide();
SLIDE_4_3.title = TITRE5;

let subTitle = new SubTitleFragment();
subTitle.content = 'Webpack';
subTitle.hideOnStep = 2;
SLIDE_4_3.pushFragments(subTitle);

let quote1 = new QuoteFragment();
quote1.content = `
Webpack is a powerful <strong>module bundler</strong>. A bundle is a JavaScript file that incorporate assets that belong together and should be served to the client in a response to a single file request. A bundle can include JavaScript, CSS styles, HTML, and almost any other kind of file.
<strong>Webpack roams over your application source code, looking for import statements, building a dependency graph, and emitting one (or more) bundles</strong>. <strong>With plugin</strong> "loaders" Webpack can preprocess and minify different non-JavaScript files such as TypeScript, SASS, and LESS files.
`;
quote1.hideOnStep=1;
SLIDE_4_3.pushFragments(quote1);

let img1 = new ImageFragment();
img1.content = '/src/images/webpack.png';
img1.stepNumber=1;
img1.hideOnStep=2;
SLIDE_4_3.pushFragments(img1);


let subTitleLibExt = new SubTitleFragment();
subTitleLibExt.content = 'Webpack - Chargement librairies';
SLIDE_4_3.pushFragments(subTitleLibExt);
subTitleLibExt.stepNumber=2;
subTitleLibExt.hideOnStep=3;

let code1 = new CodeFragment();
code1.content = `
<pre>
    <code class="typescript highlight">// src/vendor.ts
// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
// RxJS
import 'rxjs';
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
//Dépendances Boostrap
import 'jquery/dist/jquery.js';


//Bootstrap
import 'bootstrap/dist/js/bootstrap.js';

//Font Awesome (icônes)
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css'
    </code>
</pre>
`;
code1.stepNumber=2;
code1.hideOnStep=3;
SLIDE_4_3.pushFragments(code1);

let subTitle2 = new SubTitleFragment();
subTitle2.content = 'Webpack';
subTitle2.stepNumber = 3;
SLIDE_4_3.pushFragments(subTitle2);

let html1 = new HTMLFragment();
html1.content = `<p>Webpack, étendu par des plugins peut :</p>
<ul>
    <li>Transpiler Typescript vers Javascript</li>
    <li>Minifier / Offusquer les ressources statiques</li>
</ul>
<p>Aller plus loin : <a href="https://angular.io/docs/ts/latest/guide/webpack.html">WEBPACK: AN INTRODUCTION</a></p>`;
html1.stepNumber=3;
SLIDE_4_3.pushFragments(html1);

