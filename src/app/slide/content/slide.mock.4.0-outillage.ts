import {Slide, SubTitleFragment, HTMLFragment, ListFragment} from "../slide.model";
import {TITRE5} from "../slide.constantes";

export const SLIDE_4_0: Slide = new Slide();
SLIDE_4_0.title = TITRE5;

let subTitle = new SubTitleFragment();
subTitle.content = 'Développement';
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
list.hideOnStep = 1;
SLIDE_4_0.pushFragments(list);



let subTitlePackaging = new SubTitleFragment();
subTitlePackaging.content = 'Packaging / Intégration continue';
subTitlePackaging.stepNumber = 1;
SLIDE_4_0.pushFragments(subTitlePackaging);

let listPackaging = new ListFragment();
listPackaging.pushContent('Chargement des modules');
listPackaging.pushContent('Gestionnaire de dépendances');
listPackaging.pushContent('Agrégation des ressources');
listPackaging.pushContent('Minification');
listPackaging.pushContent('Génération du livrable');
listPackaging.pushContent('Tests unitaires');
listPackaging.pushContent('Tests d\'intégration');
listPackaging.stepNumber = 1;
SLIDE_4_0.pushFragments(listPackaging);
