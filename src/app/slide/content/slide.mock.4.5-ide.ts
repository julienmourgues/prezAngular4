import {Slide, SubTitleFragment, HTMLFragment, ListFragment, ImageFragment} from "../slide.model";
import {TITRE5} from "../slide.constantes";

export const SLIDE_4_5: Slide = new Slide();
SLIDE_4_5.title = TITRE5;

let subTitle = new SubTitleFragment();
subTitle.content = 'Editeurs de code';
SLIDE_4_5.pushFragments(subTitle);

let list1 = new ListFragment();
list1.className='no-list-style-type';
list1.pushContent('Visual Studio Code (gratuit)');
list1.pushContent('<a href="https://blog.jetbrains.com/webstorm/2016/04/angular-2-workflow-in-webstorm/">WebStorm</a> (payant)');
list1.pushContent('Eclipse Neon + plugins pour Angular (gratuit)');
list1.pushContent('NetBeans + plugins pour Angular (gratuit)');
list1.hideOnStep=1;
SLIDE_4_5.pushFragments(list1);

let list2 = new ListFragment();
list2.className='no-list-style-type';
list2.pushContent('Exemple Eclipse Neon + plugin Eclipse Angular');
list2.stepNumber=1;
list2.hideOnStep=2;
SLIDE_4_5.pushFragments(list2);

let img1 = new ImageFragment();
img1.content = '/src/images/ide.png';
img1.className = 'ide-vsc';
img1.stepNumber=1;
img1.hideOnStep=2;
SLIDE_4_5.pushFragments(img1);

let list3 = new ListFragment();
list3.className='no-list-style-type';
list3.pushContent('Exemple Visual Studio Code');
list3.stepNumber=2;
list3.hideOnStep=3;
SLIDE_4_5.pushFragments(list3);

let img2 = new ImageFragment();
img2.content = '/src/images/ide_visual_code.png';
img2.className = 'ide-vsc';
img2.stepNumber=2;
img2.hideOnStep=3;
SLIDE_4_5.pushFragments(img2);
