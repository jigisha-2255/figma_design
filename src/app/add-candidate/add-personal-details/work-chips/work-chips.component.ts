import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-work-chips',
  templateUrl: './work-chips.component.html',
  styleUrls: ['./work-chips.component.scss']
})
export class WorkChipsComponent{
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  Tags: Tag[] = [{name: 'Example Tag 1234567788'}, {name: 'Example Tag 2'}, {name: 'Example Tag 3'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our Tag
    if (value) {
      this.Tags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(Tag: Tag): void {
    const index = this.Tags.indexOf(Tag);

    if (index >= 0) {
      this.Tags.splice(index, 1);
    }
  }

}
