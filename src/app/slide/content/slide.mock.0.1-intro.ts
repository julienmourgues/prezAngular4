import {Slide, ImageFragment, HTMLFragment} from "../slide.model";

export const SLIDE_0_1: Slide = new Slide();
SLIDE_0_1.title = 'Angular';

let img1 = new ImageFragment();
img1.content = '/src/images/angular.svg';
img1.className = 'logo-angular';
SLIDE_0_1.pushFragments(img1);

let speaker1 = new HTMLFragment();
speaker1.content = `<p>Julien MOURGUES</p> <a href="mailto:julien.mourgues@mythalesgroup.com">julien.mourgues@mythalesgroup.com</a>`;

speaker1.className = 'speaker';
SLIDE_0_1.pushFragments(speaker1);



