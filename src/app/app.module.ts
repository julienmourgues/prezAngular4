import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routes';

import { AppComponent } from './app.component';
import {SlideComponent} from "./slide/slide.component";
import {ThumbnailComponent} from "./thumbnail/thumbnail.component";
import {ThumbnailsComponent} from "./thumbnail/thumbnails.component";

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js/lib/highlight-js.module';

import {MyFilterPipe} from "./demos/pipe/myfilter.pipe";
import {DatabindingComponent} from "./demos/databinding/databinding.component";
import {YellowDirective} from "./demos/directive/yellow-directive";
import {PipeComponent} from "./demos/pipe/pipe.component";
import {MetadataComponent} from "./demos/metadata/metadata.component";
import {RoutingComponent} from "./demos/router/routing.component";
import {RouterComponent} from "./demos/router/router.component";
import {AnimationsComponent} from "./demos/animations/animations.component";
import {AnimationsInOutComponent} from "./demos/animations/animations.inout.component";

@NgModule({
    imports: [
        BrowserModule,// module dependencies
        BrowserAnimationsModule,
        FormsModule,
        HighlightJsModule,
        AppRouting
    ],
    providers: [
        HighlightJsService
    ],
    declarations: [
        AppComponent,
        SlideComponent,
        DatabindingComponent,
        MetadataComponent,
        RoutingComponent,
        RouterComponent,
        AnimationsComponent,
        AnimationsInOutComponent,
        ThumbnailComponent,
        ThumbnailsComponent,
        MyFilterPipe,
        YellowDirective,
        PipeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}