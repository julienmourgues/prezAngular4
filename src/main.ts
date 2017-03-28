// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './css/global.css'

platformBrowserDynamic().bootstrapModule(AppModule);
