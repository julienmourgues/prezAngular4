import {Slide, SubTitleFragment, ListFragment, ImageFragment, Speaker} from "../slide.model";
import {TITRE2} from "../slide.constantes";

export const SLIDE_2_1: Slide = new Slide();
SLIDE_2_1.title = TITRE2;

let subTitle1 = new SubTitleFragment();
subTitle1.content='Doit-on oublier tout ce que l\'on sait d\'AngularJS ?';
subTitle1.hideOnStep= 1;
SLIDE_2_1.pushFragments(subTitle1);

let img1 = new ImageFragment();
img1.content = '/src/images/Men-in-Black.jpg';
img1.className = 'men-in-black';
img1.hideOnStep= 1;
SLIDE_2_1.pushFragments(img1);



let list1 = new ListFragment();
list1.className='no-list-style-type';
list1.pushContent('<h1>Angular = Réécriture totale du framework<h1>');
list1.pushContent('Conservation des notions mais <strong>implémentation différente</strong>');
list1.pushContent('Changement du langage de développement');
list1.pushContent('Pas de rétrocompatibilité (ou presque; cf: <a href="https://angular.io/docs/ts/latest/api/upgrade/index/UpgradeAdapter-class.html">upgradeAdapter</a>)');
list1.pushContent(`<ul> 
    <li><a href="https://angular.io/docs/ts/latest/guide/upgrade.html">Guide sur le site officiel</a></li>
</ul>`);
list1.pushContent('Les questions à se poser'); 
list1.pushContent(`<ul> 
    <li>A-t-on vraiment besoin de migrer?</li>
    <li>Vaut-il mieux réécrire de O ou migrer le code?</li>
</ul>`);
list1.stepNumber=1;
list1.hideOnStep=2;
SLIDE_2_1.pushFragments(list1);

let subTitle3 = new SubTitleFragment();
subTitle3.content='Et la migration d\'Angular2 vers Angular 4 ?';
subTitle3.stepNumber=2;
SLIDE_2_1.pushFragments(subTitle3);

let list2 = new ListFragment();
list2.className='no-list-style-type';
list2.pushContent('Compatible avec la 2.X.X pour la plupart des applications');
list2.pushContent('Point de vigilance sur des dépendances (node_module) qui pointent sur des dépendances obligatoires 2.X');
list2.stepNumber=2;
SLIDE_2_1.pushFragments(list2);
