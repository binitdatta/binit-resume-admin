import { Component, OnInit } from '@angular/core';
import { CareerSummaryService } from './careersummary.service';
import { CareerSummary } from './career_summary';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-careersummary',
  templateUrl: './careersummary.component.html',
  styleUrls: ['./careersummary.component.css']
})
export class CareersummaryComponent implements OnInit {

  careersummaries: Observable<CareerSummary[]>;

  careerSummary: CareerSummary = new CareerSummary();
  submitted = false;

  constructor(private careerSummaryService: CareerSummaryService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.careersummaries = this.careerSummaryService.getCareerSummaryList();
  }

  newCareerSummary(): void {
    this.submitted = false;
    this.careerSummary = new CareerSummary();
  }

  save() {
    this.careerSummaryService.createCareerSummary(this.careerSummary)
      .subscribe(data => console.log(data), error => console.log(error));
    this.careerSummary = new CareerSummary();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
