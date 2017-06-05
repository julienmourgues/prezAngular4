import {
    Slide, SubTitleFragment, QuoteFragment, ImageFragment, CodeFragment, HTMLFragment,
    Speaker
} from "../slide.model";
import {TITRE5} from "../slide.constantes";

export const SLIDE_4_4: Slide = new Slide();
SLIDE_4_4.title = TITRE5;

let subTitle = new SubTitleFragment();
subTitle.content = 'Angular CLI - Génération de squelette d\'application';
subTitle.hideOnStep = 2;
SLIDE_4_4.pushFragments(subTitle);

let img1 = new ImageFragment();
img1.content = '/src/images/demo_time.png';
SLIDE_4_4.pushFragments(img1);
