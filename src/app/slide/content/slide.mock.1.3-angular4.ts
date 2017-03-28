import {Slide, TextFragment, ListFragment, Speaker, HTMLFragment} from "../slide.model";
import {TITRE1} from "../slide.constantes";

export const SLIDE_1_3: Slide = new Slide();
SLIDE_1_3.title = TITRE1;

let html1 = new HTMLFragment();
html1.content=`Comparé à Angular 2, Angular 4 apporte les les nouveautés suivantes :`;
SLIDE_1_3.pushFragments(html1);



let list1 = new ListFragment();
list1.pushContent('Code généré réduit de 60% donc plus léger et plus rapide');
list1.pushContent('Compatibilité avec Typescript 2.1 et 2.2');
list1.pushContent('Améliorations des NgIf et NgFor');
list1.pushContent('Validator Email');
list1.stepNumber = 1;
list1.hideOnStep = 2;
SLIDE_1_3.pushFragments(list1);


