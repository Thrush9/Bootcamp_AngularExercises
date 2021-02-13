import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListviewComponent } from './listview/listview.component';
import { GridviewComponent } from './gridview/gridview.component';
import { CardComponent } from './card/card.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes,Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EditopenerComponent } from './editopener/editopener.component';
import { EditviewComponent } from './editview/editview.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

const myRoutes : Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    children : [
      {
        path : 'listview',
        component : ListviewComponent
      },
      {
        path : 'gridview',
        component : GridviewComponent
      },
      {
        path : 'edit/:typeId/sample',
        component : EditopenerComponent,
        outlet : 'editview'
       }
    ]
  },
  {
    path : '',
    redirectTo : 'dashboard',
    pathMatch : 'full' 
  }
]  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ListviewComponent,
    GridviewComponent,
    CardComponent,
    EditopenerComponent,
    EditviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  entryComponents: [EditviewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
