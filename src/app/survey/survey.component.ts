import { Component, OnInit } from '@angular/core';
import { SurveyService } from './survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  survey: any;
  selectedBeverages = [];
  constructor(private surveyService: SurveyService) { 
  }

  ngOnInit() {
    this.surveyService.onSurveyChanged.subscribe((response) => {
      this.survey = response.pages;
    });
  }

  radioClick(index, radio) {
    this.survey[index].response = radio;
    console.log(this.survey);
  }

  beverages (index, event) {
    let isChecked = event.target.value;
    if(isChecked) {

    } else {

    }
    
  }
}
