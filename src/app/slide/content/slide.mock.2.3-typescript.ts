import {Slide, SubTitleFragment, ListFragment, HTMLFragment, Speaker} from "../slide.model";
import {TITRE3} from "../slide.constantes";

export const SLIDE_2_3: Slide = new Slide();
SLIDE_2_3.title = TITRE3;

let subTitle = new SubTitleFragment();
subTitle.content='Typescript';
SLIDE_2_3.pushFragments(subTitle);

let list1 = new ListFragment();
list1.pushContent('Créé par Microsoft en 2012');
list1.pushContent('Approche objet complète: Interfaces, classes abstraites, namespaces...');
list1.pushContent('Typage');
list1.pushContent('Annotations (Décorateur) : apporté par la collaboration entre Microsoft et Google');
list1.pushContent('Nécessite transpilation TS => ES6 / ES5');
SLIDE_2_3.pushFragments(list1);

let html = new HTMLFragment();
html.innerClassName = 'alert alert-info';
html.content = 'Proche du langage Google Dart';
html.stepNumber = 1;
SLIDE_2_3.pushFragments(html)