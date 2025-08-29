import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { AppComponent1 } from './app-component-1/app-component-1.component';
import { AppComponent2 } from './app-component-2/app-component-2.component';
import { AppComponent3 } from './app-component-3/app-component-3.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const comp1 = createCustomElement(AppComponent1, {
      injector: this.injector,
    });
    const comp2 = createCustomElement(AppComponent2, {
      injector: this.injector,
    });
    const comp3 = createCustomElement(AppComponent3, {
      injector: this.injector,
    });

    if (!customElements.get('app-component-1')) {
      customElements.define('app-component-1', comp1);
    }
    if (!customElements.get('app-component-2')) {
      customElements.define('app-component-2', comp2);
    }
    if (!customElements.get('app-component-3')) {
      customElements.define('app-component-3', comp3);
    }
  }
}
