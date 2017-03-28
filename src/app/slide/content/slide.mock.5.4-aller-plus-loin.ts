import {Slide, SubTitleFragment, ListFragment, ImageFragment} from "../slide.model";
import {TITRE6} from "../slide.constantes";

export const SLIDE_5_4: Slide = new Slide();
SLIDE_5_4.title = TITRE6;

let subTitle = new SubTitleFragment();
subTitle.content = 'Aller plus loin';
SLIDE_5_4.pushFragments(subTitle);

let list1 = new ListFragment();
list1.pushContent('<a href="http://angular.io">Documentation</a>');
list1.pushContent('<a href="http://angularconnect.com">Angular Connect</a>');
SLIDE_5_4.pushFragments(list1);

let acImg = new ImageFragment();
acImg.content= '/src/images/angularconnect-shield.png';
SLIDE_5_4.pushFragments(acImg);
