import {Slide, SubTitleFragment, TextFragment, ImageFragment, CodeFragment, DemoFragment, Speaker} from "../slide.model";
import {TITRE4} from "../slide.constantes";

export const SLIDE_3_5: Slide = new Slide();
SLIDE_3_5.title = TITRE4;

let subTitle = new SubTitleFragment();
subTitle.content = 'Metadata';
subTitle.hideOnStep = 1;
SLIDE_3_5.pushFragments(subTitle);

let text1 = new TextFragment();
text1.content = 'Annotations permettant de faire les liens entre les composants.';
text1.hideOnStep = 1;
SLIDE_3_5.pushFragments(text1);

let img1 = new ImageFragment();
img1.content = '/src/images/template-metadata-component.png';
img1.hideOnStep = 1;
SLIDE_3_5.pushFragments(img1);
