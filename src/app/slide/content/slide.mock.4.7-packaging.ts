import {Slide, SubTitleFragment, HTMLFragment, ListFragment, QuoteFragment} from "../slide.model";
import {TITRE5} from "../slide.constantes";

export const SLIDE_4_7: Slide = new Slide();
SLIDE_4_7.title = TITRE5;

let subTitle = new SubTitleFragment();
subTitle.content = 'Implémentations Packaging';
subTitle.hideOnStep = 1;
SLIDE_4_7.pushFragments(subTitle);

let list = new ListFragment();
list.pushContent('NPM + Webpack');
list.pushContent('NPM (+ Bower) + SystemJS + Grunt ou Gulp');
list.hideOnStep = 1;
SLIDE_4_7.pushFragments(list);


let subTitleTesting = new SubTitleFragment();
subTitleTesting.content = 'Implémentations Testing';
subTitleTesting.stepNumber = 1;
SLIDE_4_7.pushFragments(subTitleTesting);

let listTesting = new ListFragment();
listTesting.pushContent('Karma => lanceur de tests');
listTesting.pushContent('Jasmine => Ecriture des tests (Assertions, Mocks, Spies...)');
listTesting.pushContent('Protractor => Tests d\'intégrations');
listTesting.pushContent('Angular Testing Platform => helper Angular 2');
listTesting.pushContent('<a href="https://angular.io/docs/ts/latest/guide/testing.html">Mise en place documentée</a>');
listTesting.stepNumber = 1;
SLIDE_4_7.pushFragments(listTesting);


let quote1 = new QuoteFragment();
quote1.content = `
Angular Testing Platform (ATP) which consists of the TestBed class and some <strong>helper functions</strong>.
<br>
The TestBed creates an <strong>Angular testing module</strong> — an @NgModule class — that you configure to produce the module environment for the class you want to test.
`;
quote1.stepNumber = 1;
SLIDE_4_7.pushFragments(quote1);


