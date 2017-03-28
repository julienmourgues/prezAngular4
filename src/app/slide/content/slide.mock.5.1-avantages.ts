import {Slide, SubTitleFragment, ListFragment} from "../slide.model";
import {TITRE6} from "../slide.constantes";

export const SLIDE_5_1: Slide = new Slide();
SLIDE_5_1.title = TITRE6;

let subTitle = new SubTitleFragment();
subTitle.content = 'Avantages';
SLIDE_5_1.pushFragments(subTitle);

let list1 = new ListFragment();
list1.pushContent('Clarté du code');
list1.pushContent('Fonctionnalités du framework');
list1.pushContent('Typage (Typescript)');
list1.pushContent('Outils de développement');
list1.pushContent('Performances');
list1.pushContent('Documentation, styleguide, cookbook');
SLIDE_5_1.pushFragments(list1);
