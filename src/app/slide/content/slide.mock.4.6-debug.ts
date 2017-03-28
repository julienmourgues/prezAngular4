import {Slide, SubTitleFragment, HTMLFragment, ImageFragment, Speaker} from "../slide.model";
import {TITRE5} from "../slide.constantes";

export const SLIDE_4_6: Slide = new Slide();
SLIDE_4_6.title = TITRE5;

let subTitle = new SubTitleFragment();
subTitle.content = 'Debug';
SLIDE_4_6.pushFragments(subTitle);

let html1 = new HTMLFragment();
html1.content = `
<p>Debug typescript dans Chrome</p>
`;
SLIDE_4_6.pushFragments(html1);

let img1 = new ImageFragment();
img1.content = '/src/images/debug.png';
SLIDE_4_6.pushFragments(img1);
