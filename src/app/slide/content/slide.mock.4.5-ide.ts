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

