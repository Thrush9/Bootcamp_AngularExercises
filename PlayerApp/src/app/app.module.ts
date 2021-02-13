import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';

import { RouterModule,Routes,Router } from '@angular/router';
import { DashboardLayerGuard } from './dashboard-layer.guard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PlayeraddComponent } from './playeradd/playeradd.component';
import { PlayerviewComponent } from './playerview/playerview.component';
import { PlayercardComponent } from './playercard/playercard.component';

const myRoutes : Routes = [{
  path : 'login',
  component : LoginComponent
},
{
  path : 'dashboard',
  component : DashboardComponent,
  canActivate:[DashboardLayerGuard]
},
{
  path : '',
  redirectTo : 'login',
  pathMatch : 'full'
}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EditplayerComponent,
    PlayeraddComponent,
    PlayerviewComponent,
    PlayercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDialogModule,
    MatToolbarModule,
    RouterModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
