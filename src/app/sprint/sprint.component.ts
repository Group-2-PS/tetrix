import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {

  sprint1: boolean = true;
  sprint2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  activateSprint1(): void {
    this.sprint1 = true;
    this.sprint2 = false;
  }

  activateSprint2(): void {
    this.sprint1 = false;
    this.sprint2 = true;
  }

}
