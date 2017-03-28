import {Slide, SubTitleFragment, ListFragment, HTMLFragment} from "../slide.model";
import {TITRE6} from "../slide.constantes";

export const SLIDE_5_3: Slide = new Slide();
SLIDE_5_3.title = TITRE6;

let subTitle = new SubTitleFragment();
subTitle.content = 'Conclusion';
SLIDE_5_3.pushFragments(subTitle);

let list1 = new ListFragment();
list1.pushContent('Nouveaux concepts instructifs');
list1.pushContent('Framework ambitieux qui s\'impose dans le panorama des frameworks JS');
list1.pushContent('Forte attente des partenaires');
list1.pushContent('<u>Conseil</u> : Avant de vendre une migration, pensez au POC !');
SLIDE_5_3.pushFragments(list1);

let html = new HTMLFragment();
html.innerClassName = 'alert alert-info';
html.content = 'Les sources de cette présentation seront partagées pour celles/ceux qui sont intéressé(e)s, contactez nous ;)';
html.stepNumber = 1;
SLIDE_5_3.pushFragments(html)

