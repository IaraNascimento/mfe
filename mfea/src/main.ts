import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export async function bootstrapmfea() {
  try {
    return await platformBrowserDynamic().bootstrapModule(AppModule);
  } catch (err) {
    return console.error(err);
  }
}

(window as any).bootstrapmfea = bootstrapmfea;

bootstrapmfea();
