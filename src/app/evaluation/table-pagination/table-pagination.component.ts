import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent {
  // currentPage = 3;
  displayedColumns = ['stage', 'interview', 'evaluation', 'recommendation','actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Show Records';
    this.paginator._intl.firstPageLabel = 'First Page';
    this.paginator._intl.lastPageLabel = 'Last Page';
    this.paginator._intl.nextPageLabel = 'Next Page';
    this.paginator._intl.previousPageLabel = 'Previous Page';
    // this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    //   const start =1;
    //   const end = 3;
    //   return `2`
    // };
  }
}

export interface Element {
  position: number;
  stage: string;
  interview: string;
  evaluation: string;
  recommendation:string;
  actions:string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, stage: 'Screening', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Do Not Hire', actions: 'H'},
  {position: 2, stage: 'Pool', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Hire', actions: 'H'},
  {position: 3, stage: 'Screening', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Do Not Hire', actions: 'H'},
  {position: 4, stage: 'Submitted to HR', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Average', actions: 'H'},
  {position: 5, stage: 'Offered', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Average', actions: 'H'},
  {position: 6, stage: 'Submitted to HR', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Hire', actions: 'H'},
  {position: 7, stage: 'Screening', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Do Not Hire', actions: 'H'},
  {position: 8, stage: 'Pool', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Hire', actions: 'H'},
  {position: 9, stage: 'Screening', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Do Not Hire', actions: 'H'},
  {position: 10, stage: 'Submitted to HR', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Average', actions: 'H'},
  {position: 11, stage: 'Offered', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Average', actions: 'H'},
  {position: 12, stage: 'Submitted to HR', interview: 'Evaluation Failed Without Interview', evaluation: 'by deanrogers@gmail.com a month ago',recommendation:'Hire', actions: 'H'}
 
];

