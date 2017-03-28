import { Routes, RouterModule } from '@angular/router';
import {RoutingComponent} from "./demos/router/routing.component";
import {RouterComponent} from "./demos/router/router.component";
import {SlideComponent} from "./slide/slide.component";

export const routes: Routes = [
  { path: '', component: RouterComponent },
  { path: 'demo1', component: RouterComponent, data: { title: 'demo1', color: 'purple' }},
  { path: 'demo2', component: RouterComponent, data: { title: 'demo2', color: 'limegreen' }}
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: true });
