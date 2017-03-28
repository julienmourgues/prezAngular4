import {Slide, SubTitleFragment, HTMLFragment, CodeFragment, Speaker, ListFragment} from "../slide.model";
import {TITRE5} from "../slide.constantes";

export const SLIDE_4_1: Slide = new Slide();
SLIDE_4_1.title = TITRE5;

let subTitle = new SubTitleFragment();
subTitle.content = 'NPM';
subTitle.hideOnStep = 1;
SLIDE_4_1.pushFragments(subTitle);

let list = new ListFragment();
list.pushContent('Point d\'entrée');
list.pushContent('Gestionnaire de dépendances');
list.pushContent('Lanceur de tâches');
list.hideOnStep = 1;
SLIDE_4_1.pushFragments(list);




let subTitle2 = new SubTitleFragment();
subTitle2.content = 'NPM - Gestionnaire de dépendances (Alternative : YARN)';
subTitle2.stepNumber = 1;
subTitle2.hideOnStep = 2;
SLIDE_4_1.pushFragments(subTitle2);

let code1 = new CodeFragment();
code1.content = `
<pre>
    <code class="javascript highlight">//package.json
{
    "dependencies": {
    "@angular/common": "4.0.0",
    "@angular/compiler": "4.0.0",
    "@angular/core": "4.0.0",
    "@angular/forms": "4.0.0",
    "@angular/http": "4.0.0",
    "@angular/platform-browser": "4.0.0",
    "@angular/platform-browser-dynamic": "4.0.0",
    "@angular/router": "4.0.0",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.3",
    "rxjs": "^5.0.1",
    "typescript": "^2.2.1",
    "zone.js": "^0.6.23"
  },
  "devDependencies": {
    "lite-server": "^2.2.2",
    "typescript": "^2.0.2",
    "typings":"^1.3.2"
  }}</code>
</pre>`;
code1.stepNumber = 1;
code1.hideOnStep = 2;
SLIDE_4_1.pushFragments(code1);

let subTitle3 = new SubTitleFragment();
subTitle3.content = 'NPM - Lanceur de tâches';
subTitle3.stepNumber = 2;
SLIDE_4_1.pushFragments(subTitle3);

let code2 = new CodeFragment();
code2.content = `
<pre>
    <code class="javascript highlight">//package.json (suite)
{
  "scripts": {
    "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" ",
    "lite": "lite-server",
    "postinstall": "typings install",
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "typings": "typings"
}</code>
</pre>
`;
code2.stepNumber = 2;
SLIDE_4_1.pushFragments(code2);

