import {Slide, SubTitleFragment, ImageFragment, Speaker} from "../slide.model";
import {TITRE4} from "../slide.constantes";

export const SLIDE_3_2: Slide = new Slide();
SLIDE_3_2.title = TITRE4;

let subTitle = new SubTitleFragment();
subTitle.content = 'Imbrication de composants';
SLIDE_3_2.pushFragments(subTitle);

let img1 = new ImageFragment();
img1.content = '/src/images/component-tree.png';
SLIDE_3_2.pushFragments(img1);