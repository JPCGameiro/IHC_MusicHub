import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MessengerComponent } from './messenger/messenger.component';
import { MatDividerModule } from '@angular/material/divider';
import { MessengercontactComponent } from './messengercontact/messengercontact.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { MusiciansPageComponent } from './musicians-page/musicians-page.component';

import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EstablishmentsPageComponent } from './establishments-page/establishments-page.component';
import { SearchDivComponent } from './search-div/search-div.component';
import { FollowersListComponent } from './followers-list/followers-list.component';
import { DiscoverListComponent } from './discover-list/discover-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    JumbotronComponent,
    MessengerComponent,
    MessengercontactComponent,
    ScrollToTopComponent,
    MusiciansPageComponent,
    HomePageComponent,
    EstablishmentsPageComponent,
    SearchDivComponent,
    FollowersListComponent,
    DiscoverListComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    RouterModule.forRoot([
      {path: 'musicians', component: MusiciansPageComponent},
      {path: '', component: HomePageComponent},
      {path: 'establishments', component: EstablishmentsPageComponent},
      {path: 'searchmusicians', component: MusiciansPageComponent},
      {path: 'searchestablishments', component: EstablishmentsPageComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
