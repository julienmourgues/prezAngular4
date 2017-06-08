import {Slide, SubTitleFragment, HTMLFragment, ListFragment} from "../slide.model";
import {TITRE5} from "../slide.constantes";

export const SLIDE_4_0: Slide = new Slide();
SLIDE_4_0.title = TITRE5;

let subTitle = new SubTitleFragment();
subTitle.content = 'Développement / IC';
subTitle.hideOnStep = 1;
SLIDE_4_0.pushFragments(subTitle);

let list = new ListFragment();
list.pushContent('Création de squelette d\'application');
list.pushContent('Chargement des modules');
list.pushContent('Gestionnaire de dépendances');
list.pushContent('Lancement serveur lite');
list.pushContent('Watch sources + Transpilation + autoreload');
list.pushContent('Editeur de code');
list.pushContent('Debug');
list.pushContent('Tests unitaires');
list.pushContent('Tests d\'intégration');
list.pushContent('Minification');
list.pushContent('Génération du livrable');
list.hideOnStep = 1;
SLIDE_4_0.pushFragments(list);

