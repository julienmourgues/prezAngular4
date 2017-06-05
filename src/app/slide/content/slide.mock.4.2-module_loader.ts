import {Slide, SubTitleFragment, QuoteFragment, ListFragment, TextFragment} from "../slide.model";
import {TITRE5} from "../slide.constantes";

export const SLIDE_4_2: Slide = new Slide();
SLIDE_4_2.title = TITRE5;

let subTitle = new SubTitleFragment();
subTitle.content = 'A quoi sert un Module loader ?';
SLIDE_4_2.pushFragments(subTitle);

let list = new ListFragment();
list.pushContent('Parcours des imports à partir du bootstrap de l\'application');
list.pushContent('Chargement des scripts applicatifs');
list.pushContent('Chargement des librairies extérieures');
SLIDE_4_2.pushFragments(list);

