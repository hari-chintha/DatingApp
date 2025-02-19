import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemersDetailsComponent } from './members/memers-details/memers-details.component';
import { MemersListComponent } from './members/memers-list/memers-list.component';
import { MessagesComponent } from './messages/messages.component';
import { TestErrorsComponent } from './test-errors/test-errors.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'',
    runGuardsAndResolvers: 'always',
    canActivate:[AuthGuard],
    children:[
      {path:'members',component:MemersListComponent, canActivate:[AuthGuard]},
      {path:'members/:username',component:MemersDetailsComponent},
      {path:'messages',component:MessagesComponent},
      {path:'lists',component:ListsComponent},
    ]
  },
  {path: 'errors', component:TestErrorsComponent},
  {path: 'not-found', component:NotFoundComponent},
  {path: 'server-error', component:ServerErrorComponent},
  {path:'**',component:NotFoundComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
