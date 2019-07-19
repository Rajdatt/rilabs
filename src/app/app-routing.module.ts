import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { ProfileService } from 'src/app/profile/profile.service';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    resolve: [ProfileService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
