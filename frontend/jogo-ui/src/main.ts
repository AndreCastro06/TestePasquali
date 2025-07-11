import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { RootComponent } from './app/root.component'; 


bootstrapApplication(RootComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
});