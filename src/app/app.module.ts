import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';
import * as materialDesignModules from './material-design-modules';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HeroEditComponent } from './hero-edit/hero-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    HeroEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialDesignModules.modules,
    FlexLayoutModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
