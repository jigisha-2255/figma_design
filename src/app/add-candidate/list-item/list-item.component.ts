import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Output() Navigate = new EventEmitter();

  navigateTo(element: string) {
    this.Navigate.emit(element)
  }
 

  // scrollToElement($event){
  //   console.log($event);
  //   $event.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  // }

  // @Output() scrollToElement=new EventEmitter<string>()
  // scrollToTarget(){
  //   this.scrollToElement.emit("language")
  // }

  constructor() { }

  ngOnInit(): void {
  }

  // @Output('scrollToElement') scrollToElement: EventEmitter<string> = new EventEmitter();
  // scrollToTarget(){
  //   this.scrollToElement.emit("language");
  // }

 
}

