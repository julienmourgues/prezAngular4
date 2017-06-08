import {Slide, SubTitleFragment, ListFragment, HTMLFragment} from "../slide.model";
import {TITRE6} from "../slide.constantes";

export const SLIDE_5_3: Slide = new Slide();
SLIDE_5_3.title = TITRE6;

let subTitle = new SubTitleFragment();
subTitle.content = 'Conclusion';
SLIDE_5_3.pushFragments(subTitle);

let list1 = new ListFragment();
list1.pushContent('Nouveaux concepts instructifs (Components)');
list1.pushContent('Framework qui s\'impose dans le panorama des frameworks JS avec React');
list1.pushContent('Forte attente des partenaires');
list1.pushContent('<u>Conseil</u> : Avant de vendre une migration Angular JS vers Angular, pensez au POC !');
SLIDE_5_3.pushFragments(list1);

let html = new HTMLFragment();
html.innerClassName = 'alert alert-info';
html.content = 'Les sources de cette présentation sont sous mon Github : <a href="https://github.com/julienmourgues/prezAngular4">https://github.com/julienmourgues/prezAngular4</a>';
html.stepNumber = 1;
SLIDE_5_3.pushFragments(html);

