import {Slide, SubTitleFragment, ImageFragment, ListFragment} from "../slide.model";

export const SLIDE_0_1_1: Slide = new Slide();

let subTitle1 = new SubTitleFragment();
subTitle1.content=`Le contexte`;
subTitle1.hideOnStep= 1;
SLIDE_0_1_1.pushFragments(subTitle1);

let list1 = new ListFragment();
list1.className='context no-list-style-type';
list1.pushContent('Dans une autre vie, participation aux développements d\' une battle de code sur Angular JS');
list1.pushContent('Veille technologique notamment sur Angular X et React');
list1.pushContent('Réaliser un <strong>diaporama qui est une application Web Angular 4</strong> !');
list1.pushContent('Constat qu\'il n\'y a pas d\'âge pour être développeur FullStack JS !!!');
list1.hideOnStep=1;
SLIDE_0_1_1.pushFragments(list1);
