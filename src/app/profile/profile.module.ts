import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileService } from './profile.service';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: [ProfileService]
  }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [  
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
