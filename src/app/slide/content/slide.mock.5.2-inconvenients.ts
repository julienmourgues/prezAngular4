import {Slide, SubTitleFragment, ListFragment} from "../slide.model";
import {TITRE6} from "../slide.constantes";

export const SLIDE_5_2: Slide = new Slide();
SLIDE_5_2.title = TITRE6;

let subTitle = new SubTitleFragment();
subTitle.content = 'Inconvénients';
SLIDE_5_2.pushFragments(subTitle);

let list1 = new ListFragment();
list1.pushContent('Courbe d\'apprentissage');
list1.pushContent('Debug des erreurs');
list1.pushContent('Croissance progressive de sujets sur StackOverflow');
SLIDE_5_2.pushFragments(list1);
