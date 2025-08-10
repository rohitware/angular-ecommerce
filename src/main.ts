import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { UserLoginInterceptor } from './app/services/user-login-interceptor';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
     provideHttpClient(withInterceptors([UserLoginInterceptor])),
    provideHttpClient()
  ]
});
