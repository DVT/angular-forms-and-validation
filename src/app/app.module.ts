import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';
import * as materialDesignModules from './material-design-modules';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { FormsModule } from '@angular/forms';
import { MinAgeDirective } from './directives/min-age.directive';
import { HeroAddedDialogComponent } from './hero-added-dialog/hero-added-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    HeroEditComponent,
    MinAgeDirective,
    HeroAddedDialogComponent
  ],
  entryComponents: [ HeroAddedDialogComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialDesignModules.modules,
    FlexLayoutModule,
    LayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
