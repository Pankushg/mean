import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';

import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AdunitService } from './adunit.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './components/delete/delete.component';



const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'index',
    component: IndexComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AdunitService],
  bootstrap: [AppComponent]
})

export class AppModule { }