import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { AddCandidateDialogSheetComponent } from './add-candidate-dialog-sheet/add-candidate-dialog-sheet.component';

@Component({
  selector: 'app-add-new-candidate-btn',
  templateUrl: './add-new-candidate-btn.component.html',
  styleUrls: ['./add-new-candidate-btn.component.scss']
})
export class AddNewCandidateBtnComponent {
  constructor(public dialog: MatDialog,private _bottomSheet: MatBottomSheet) {}

  openDialog() {
    this.dialog.open(AddCandidateDialogSheetComponent);
  }
  openBottomSheet(): void {
    this._bottomSheet.open(AddCandidateDialogSheetComponent);
  }
}