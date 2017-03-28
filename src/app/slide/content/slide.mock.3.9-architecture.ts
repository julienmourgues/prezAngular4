import {Slide, SubTitleFragment, ImageFragment, Speaker} from "../slide.model";
import {TITRE4} from "../slide.constantes";

export const SLIDE_3_9: Slide = new Slide();
SLIDE_3_9.title = TITRE4;

let subTitle = new SubTitleFragment();
subTitle.content='Architecture';
SLIDE_3_9.pushFragments(subTitle);

let img1 = new ImageFragment();
img1.content='/src/images/overview.png';
SLIDE_3_9.pushFragments(img1);
