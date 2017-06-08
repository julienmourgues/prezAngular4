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

let html1 = new HTMLFragment();
html1.content = `<p>Aller plus loin : <a href="https://angular.io/docs/ts/latest/guide/webpack.html">WEBPACK: AN INTRODUCTION</a></p>`;
SLIDE_4_3.pushFragments(html1);


