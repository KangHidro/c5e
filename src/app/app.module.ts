import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ChartsModule } from 'ng2-charts';
import { ClipboardModule } from 'ngx-clipboard';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';
import { C5eComponent } from './c5e/c5e.component';

registerLocaleData(en);

export const route: Routes = [
  {
    path: '',
    component: C5eComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    C5eComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterTestingModule,
    NzButtonModule,
    NzGridModule,
    NzSelectModule,
    ChartsModule,
    ClipboardModule,
    RouterModule.forRoot(route, { relativeLinkResolution: 'corrected' }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
