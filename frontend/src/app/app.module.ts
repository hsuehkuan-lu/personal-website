import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    HomeComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TopBarComponent,
    FooterComponent,
    ExperienceComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
