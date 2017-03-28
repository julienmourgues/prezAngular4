import {Slide, SubTitleFragment, HTMLFragment, ListFragment, ImageFragment} from "../slide.model";
import {TITRE5} from "../slide.constantes";

export const SLIDE_4_5: Slide = new Slide();
SLIDE_4_5.title = TITRE5;

let subTitle = new SubTitleFragment();
subTitle.content = 'Editeurs de code';
SLIDE_4_5.pushFragments(subTitle);

let list1 = new ListFragment();
list1.className='no-list-style-type';
list1.pushContent('Eclipse Neon + plugin Eclipse Angular 2');
list1.hideOnStep=1;
SLIDE_4_5.pushFragments(list1);

let img1 = new ImageFragment();
img1.content = '/src/images/ide.png';
img1.className = 'ide-vsc';
img1.hideOnStep=1;
SLIDE_4_5.pushFragments(img1);

let list2 = new ListFragment();
list2.className='no-list-style-type';
list2.pushContent('Eclipse Neon + plugin Eclipse Angular 2');
list2.pushContent(`<ul> 
    <li>Compilation automatique à chaque modification</li>
    <li>Import de projets existant Angular 2</li>
    <li>Auto-completion</li>
    <li><strong>GRATUIT</strong></li>
</ul>`);
list2.stepNumber=1;
list2.hideOnStep=2;
SLIDE_4_5.pushFragments(list2);

let list3 = new ListFragment();
list3.className='no-list-style-type';
list3.pushContent('Eclipse Neon + plugin Eclipse Angular 2 (gratuit)');
list3.pushContent('NetBeans (gratuit)');
list3.pushContent('Visual Studio Code (gratuit)');
list3.pushContent('<a href="https://blog.jetbrains.com/webstorm/2016/04/angular-2-workflow-in-webstorm/">WebStorm</a> (payant)');
list3.stepNumber=2;
SLIDE_4_5.pushFragments(list3);