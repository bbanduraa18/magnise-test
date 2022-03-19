import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from "ng-zorro-antd/spin";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ServiceComponent } from './components/service/service.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DataService } from './services/data.service';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from "./loader.interceptor";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzSpinModule,
    NzButtonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    DataService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
