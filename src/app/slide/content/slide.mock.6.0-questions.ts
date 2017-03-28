import {Slide, ImageFragment, SubTitleFragment} from "../slide.model";

export const SLIDE_6_0: Slide = new Slide();

let img1 = new ImageFragment();
img1.content = '/src/images/question.png';
img1.className = 'question';
SLIDE_6_0.pushFragments(img1);

let subTitle1 = new SubTitleFragment();
subTitle1.content='Questions';
subTitle1.className = 'text-question';
SLIDE_6_0.pushFragments(subTitle1);

let img2 = new ImageFragment();
img2.content = '/src/images/angular.svg';
img2.className = 'logo-question';
SLIDE_6_0.pushFragments(img2);
