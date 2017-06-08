import {Slide, ImageFragment, ListFragment, Speaker} from "../slide.model";
import {TITRE1} from "../slide.constantes";

export const SLIDE_1_1: Slide = new Slide();
SLIDE_1_1.title = TITRE1;

let list1 = new ListFragment();
list1.className='historique vertical-center no-list-style-type';
list1.pushContent('<div class="row"><div class="col-sm-4">14 Septembre 2014</div><div class="col-sm-8">Initial Commit Angular 2</div></div>');
list1.pushContent('<div class="row"><div class="col-sm-4">02 Mai 2016</div><div class="col-sm-8">Première Release Candidate Angular 2</div></div>');
list1.pushContent('<div class="row"><div class="col-sm-4">14 Septembre 2016</div><div class="col-sm-8">Version stable Angular 2.0 (2.0.0)</div></div>');
list1.pushContent('<div class="row"><div class="col-sm-4">15 Décembre 2016</div><div class="col-sm-8">Version stable Angular 2.3 (2.3.1)</div></div>');
list1.pushContent('<div class="row"><div class="col-sm-4">15 Décembre 2016</div><div class="col-sm-8">Première version bêta Angular 4 (4.0.0-beta.0)</div></div>');
list1.pushContent('<div class="row"><div class="col-sm-4">17 Mars 2017</div><div class="col-sm-8">Version stable Angular 2.4 (2.4.10)</div></div>');
list1.pushContent('<div class="row"><div class="col-sm-4">23 Mars 2017</div><div class="col-sm-8">Version stable Angular 4.0 (4.0.0)</div></div>');
list1.pushContent('<div class="row"><div class="col-sm-4">17 Mai 2017</div><div class="col-sm-8">Version stable Angular 4.1 (4.1.3)</div></div>');
list1.hideOnStep=1;
SLIDE_1_1.pushFragments(list1);

let tendance = new ImageFragment();
tendance.className='tendance vertical-center';
tendance.content='/src/images/tendance.png';
tendance.stepNumber=1;
SLIDE_1_1.pushFragments(tendance);
