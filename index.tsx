import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
// CORRECCIÓN AQUÍ: Agregamos "/app" a la ruta
import { AppComponent } from './src/app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
  ],
}).catch(err => console.error(err));