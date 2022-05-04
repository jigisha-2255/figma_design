import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isShown: boolean = false; // hidden by default


  toggleShow() {

    this.isShown = !this.isShown;

  }

}
