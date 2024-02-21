import { ApplicationConfig } from '@angular/core';
import { MarketauxDataService } from './marketauxdata.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [MarketauxDataService, provideAnimations()],
};
