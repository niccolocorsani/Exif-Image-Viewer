import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {PageHeaderComponent} from "./page-header/page-header.component";
import {MainContentComponent} from "./page-main-content/main-content.component";
import {OpenFileDialogButtonComponent} from "./components/open-file-dialog-button/open-file-dialog-button.component";
import {ImageRotationComponent} from "./components/image-rotation/image-rotation.component";
import {AppLayoutComponent} from "./app-layout/app-layout.component";
import {ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    MainContentComponent,
    OpenFileDialogButtonComponent,
    ImageRotationComponent,
    AppLayoutComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
