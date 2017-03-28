import {Slide, TextFragment, ListFragment, Speaker, HTMLFragment} from "../slide.model";
import {TITRE1} from "../slide.constantes";

export const SLIDE_1_2: Slide = new Slide();
SLIDE_1_2.title = TITRE1;


let html1 = new HTMLFragment();
html1.content=`Un framework Javascript de COMPOSANTS pour réaliser des applications Web dynamiques.`;
SLIDE_1_2.pushFragments(html1);



let list1 = new ListFragment();
list1.pushContent('Directives / Components');
list1.pushContent('Data binding / Events / Change detection');
list1.pushContent('Templates');
list1.pushContent('Pipes');
list1.pushContent('Metadata');
list1.pushContent('Services / Dependency injection');
list1.pushContent('Modules');
list1.pushContent('Router');
list1.pushContent('Testing');
list1.stepNumber = 1;
list1.hideOnStep = 2;
SLIDE_1_2.pushFragments(list1);



let list2 = new ListFragment();
list2.pushContent('Animations');
list2.pushContent('Forms');
list2.pushContent('HTTP');
list2.pushContent('Lifecycle hooks');
list2.stepNumber=2;
SLIDE_1_2.pushFragments(list2);
