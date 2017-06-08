import {Slide, SubTitleFragment, ImageFragment, ListFragment} from "../slide.model";

export const SLIDE_0_1_1: Slide = new Slide();

let subTitle1 = new SubTitleFragment();
subTitle1.content=`Le contexte`;
subTitle1.hideOnStep= 1;
SLIDE_0_1_1.pushFragments(subTitle1);

let list1 = new ListFragment();
list1.className='context no-list-style-type';
list1.pushContent('11 ans d\'expérience sur Java EE');
list1.pushContent('Veille technologique notamment sur Angular et un peu sur React');
list1.pushContent('Réaliser un <strong>diaporama qui est une application Web Angular en version 4</strong> !');
list1.pushContent('Apporter une vision sur l\'écosystème Angular');
list1.hideOnStep=1;
SLIDE_0_1_1.pushFragments(list1);
