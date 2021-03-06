import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './app-header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { InterceptorsModule } from './shared/interceptor/interceptors.module';
import { MaterialIndicatorsModule } from './shared/modules/material/material-indicators.module';
import { MaterialSnackBarModule } from './shared/modules/material/material-snackbar.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HeaderModule,
    LoginModule,
    MaterialIndicatorsModule,
    HttpClientModule,
    InterceptorsModule,
    MaterialSnackBarModule,
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
