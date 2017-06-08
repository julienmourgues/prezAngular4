import {Slide, SubTitleFragment, ListFragment, HTMLFragment, Speaker, QuoteFragment} from "../slide.model";
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

let quote1 = new QuoteFragment();
quote1.content = `
<strong>At ng-conf 2017, Brad Green, Engineering Director at Google, indicated that TypeScript is now an official language at Google. 
For developers worrying about Dart status, he clarified that both Dart and TypeScript will be in the same category.</strong>`;
SLIDE_2_3.pushFragments(quote1);

