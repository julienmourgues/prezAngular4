import {Slide, SubTitleFragment, HTMLFragment, CodeFragment, Speaker, ListFragment} from "../slide.model";
import {TITRE5} from "../slide.constantes";

export const SLIDE_4_1: Slide = new Slide();
SLIDE_4_1.title = TITRE5;

let subTitle = new SubTitleFragment();
subTitle.content = 'NPM';
subTitle.hideOnStep = 1;
SLIDE_4_1.pushFragments(subTitle);

let list = new ListFragment();
list.pushContent('Point d\'entrée');
list.pushContent('Gestionnaire de dépendances');
list.pushContent('Lanceur de tâches');
list.pushContent('Alternative : YARN');
list.hideOnStep = 1;
SLIDE_4_1.pushFragments(list);
