import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey.component';
import { RouterModule, Routes } from '@angular/router';
import {SurveyService} from './survey.service';

const routes: Routes = [
  {
    path: 'survey',
    component: SurveyComponent,
    resolve: [SurveyService]
  }
];
@NgModule({
  declarations: [SurveyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SurveyModule { }
