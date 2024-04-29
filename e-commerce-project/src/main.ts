import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { UserScreenComponent } from './app/user/user-screen/user-screen.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



// (async () => {
//   const app: ApplicationRef = await createApplication(appConfig);

//   // Define Web Components
//   const userScreenComponent = createCustomElement(UserScreenComponent, {injector: app.injector});
//   customElements.define('app-user-screen', userScreenComponent);
// })();
