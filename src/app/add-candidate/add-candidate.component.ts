import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("details", { static: false }) details!: ElementRef;
  @ViewChild("language", { static: false }) language: any;
  @ViewChild("education", { static: false }) education: any;
  @ViewChild("projects", { static: false }) projects: any;
  @ViewChild("experience", { static: false }) experience: any;
  @ViewChild("salary", { static: false }) salary: any;
  @ViewChild("skills", { static: false }) skills: any;
  @ViewChild("certificate", { static: false }) certificate: any;

  navigateTo(element: string) {
    this[element].nativeElement.scrollIntoView({ behavior: "smooth" });
  }
  

  // scrollToElement(){
  //   // $event.scrollIntoView({behavior: 'smooth'});
  //   this.input?.nativeElement.scrollIntoView();
  // }
  // @ViewChild('language') input: ElementRef<HTMLElement> | undefined;

  // scrollToElement($element): void {
  //   console.log($element);
  //   $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  // }
}
