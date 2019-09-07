import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtistTrackComponent } from './artist-track/artist-track.component';
import { ArtistAlbumComponent } from './artist-album/artist-album.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { ArtistComponent } from './artist/artist.component';
import { Mp3Component } from './mp3/mp3.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WarningService } from './warning.service';
import { LoginComponent } from './login/login.component';
import { CanActivateGuard } from './can-activate.guard';
import { RegisterComponent } from './register/register.component';
import { QrCodeGenaratorComponent } from './qr-code-genarator/qr-code-genarator.component';
import { QRCodeModule } from 'angularx-qrcode';
const routes: Routes = [
      { path:"dashboard",component:AppDashboardComponent },
      { path:"register",component:RegisterComponent },
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full"},
      { path: "tracks", component: ArtistTrackComponent , canActivate:[CanActivateGuard] },
      { path: "albums", component: ArtistAlbumComponent, canActivate:[CanActivateGuard] },
      { path : "artist", component:ArtistComponent,canActivate:[CanActivateGuard] },
      { path : "mp3", component:Mp3Component,canActivate:[CanActivateGuard]},
      { path: "downloads",component:DownloadsComponent,canActivate:[CanActivateGuard] },
      { path : "qrCode" , component:QrCodeGenaratorComponent},
      { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistTrackComponent,
    ArtistAlbumComponent,
    AppDashboardComponent,
    ArtistComponent,
    Mp3Component,
    DownloadsComponent,
    LoginComponent,
    RegisterComponent,
    QrCodeGenaratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
