import {
    Slide, SubTitleFragment, ImageFragment, CodeFragment, ListFragment, LinkFragment,
    Speaker
} from "../slide.model";
import {TITRE3} from "../slide.constantes";

export const SLIDE_2_2: Slide = new Slide();
SLIDE_2_2.title = TITRE3;

let subTitle = new SubTitleFragment();
subTitle.content='De ES5 à Typescript';
SLIDE_2_2.pushFragments(subTitle);

let img1 = new ImageFragment();
img1.content = '/src/images/es5.png';
img1.className = 'es5 vertical-center left';
img1.hideOnStep=1;
SLIDE_2_2.pushFragments(img1);


let code1 = new CodeFragment();
code1.className = 'es5 vertical-center right';
code1.content = `
<pre>
    <code class="javascript highlight">'use strict';
(function (ngRouter, app) {

    ngRouter.RouteConfig([
        { path: '/', redirectTo: '/home'},
        { path: '/home', component: app.HomeComponent, as: 'home'}
    ])(app.Main);

})(window.ngRouter, window.app);</code>
</pre>`;
code1.hideOnStep=1;
SLIDE_2_2.pushFragments(code1);

let img2 = new ImageFragment();
img2.content = '/src/images/es5_es6.png';
img2.className = 'es5-es6 vertical-center left';
img2.hideOnStep=3;
img2.stepNumber=1;
SLIDE_2_2.pushFragments(img2);

let lien = new LinkFragment();
lien.content = 'Comparaison ES5 / ES6';
lien.href = 'http://es6-features.org/';
lien.hideOnStep=3;
lien.stepNumber=1;
SLIDE_2_2.pushFragments(lien);

let code2 = new CodeFragment();
code2.className = 'es5-es6 vertical-center right';
code2.content = `
<pre>
    <code class="javascript highlight">import { HomeComponent } from './home.component';

export const routes = [
    { path: '/', redirectTo: '/home' },
    { path: '/home', component: HomeComponent, as: 'home'}
];
</code>
</pre>`;
code2.hideOnStep=2;
code2.stepNumber=1;
SLIDE_2_2.pushFragments(code2);

let list1 = new ListFragment();
list1.className = 'es5-es6 vertical-center right no-list-style-type';
list1.pushContent('<b>Couverture incomplète par les différents navigateurs</b>');
list1.pushContent(`<table class="table table-condensed">
    <tr>
        <th>Navigateur</th>
        <th>Compatibilité</th>
    </tr>
    <tr>
        <td>Safari 10</td>
        <td>100%</td>
    </tr>
    <tr>
        <td>Chrome 53</td>
        <td>97%</td>
    </tr>
    <tr>
        <td>Edge 14</td>
        <td>93%</td>
    </tr>
    <tr>
        <td>Firefox 49</td>
        <td>92%</td>
    </tr>
    <tr>
        <td>IOS - Safari 9</td>
        <td>54%</td>
    </tr>
    <tr>
        <td>Android Browser 5.1</td>
        <td>25%</td>
    </tr>
    <tr>
        <td>IE 11</td>
        <td>11%</td>
    </tr>
</table>`);
list1.hideOnStep=3;
list1.stepNumber=2;
SLIDE_2_2.pushFragments(list1);

let img3 = new ImageFragment();
img3.content = '/src/images/es5_es6_typescript.png';
img3.className = 'es5-es6-typescript vertical-center left';
img3.stepNumber=3;
SLIDE_2_2.pushFragments(img3);

let code3 = new CodeFragment();
code3.className = 'es5-es6-typescript vertical-center right';
code3.content = `
<pre>
    <code class="typescript highlight">import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    { path: '/', redirectTo: '/home' },
    { path: '/home', component: HomeComponent, as: 'home'}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
</code>
</pre>`;
code3.hideOnStep=4;
code3.stepNumber=3;
SLIDE_2_2.pushFragments(code3);

let code4 = new CodeFragment();
code4.className = 'es5-es6-typescript vertical-center right';
code4.content = `
<pre>
    <code class="typescript highlight">import { BrowserModule }  from '@angular/platform-browser';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
})
export class AppModule {
}
</code>
</pre>`;
code4.stepNumber=4;
SLIDE_2_2.pushFragments(code4);
