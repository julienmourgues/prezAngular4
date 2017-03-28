import {Slide, OrderedListFragment} from "../slide.model";
import {TITRE1, TITRE2, TITRE3, TITRE4, TITRE5, TITRE6} from "../slide.constantes";

export const SLIDE_0_2: Slide = new Slide();
SLIDE_0_2.title = 'Plan';

let list1 = new OrderedListFragment();
list1.pushContent(TITRE1);
list1.pushContent(TITRE2);
list1.pushContent(TITRE3);
list1.pushContent(TITRE4);
list1.pushContent(TITRE5);
list1.pushContent(TITRE6);
list1.className='plan vertical-center';
SLIDE_0_2.pushFragments(list1);
