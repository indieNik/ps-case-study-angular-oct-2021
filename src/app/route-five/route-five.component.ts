import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ps-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.scss']
})
export class RouteFiveComponent implements OnInit {

  studentData: any = [];
  columnHeaders: any = [];
  sortDataState = {
    activeSortHeader: '',
    sortDirection: 'asc', // 'asc', 'desc', ''
    sortedData: ['']
  };

  constructor() { }

  ngOnInit(): void {
    // this.studentData = this.fetchJSONStudentData();
    this.studentData = this.fetchJSONStudentDataExtraCol();
    this.sortDataState.sortedData = [...this.studentData];
    this.columnHeaders = Object.keys(this.sortDataState.sortedData[0]);
    this.columnHeaders = this.columnHeaders.map( (header: any) => {
      return {
        name: header,
        sorting: false,
        sortAsc: true
      }
    });
    this.setColumns();
  }

  sortColumn(sortByHeader: any) {
    this.resetSortData(sortByHeader.name); // Reset before every new sort
    if (!sortByHeader.sorting) {
      // If not sorting, Sort Asc
      sortByHeader.sorting = true;
      sortByHeader.sortAsc = true;
      if ( typeof this.sortDataState.sortedData[0][sortByHeader.name] === 'string')
        this.sortDataState.sortedData.sort((a: any, b: any) => a[sortByHeader.name].localeCompare(b[sortByHeader.name]));
      if ( typeof this.sortDataState.sortedData[0][sortByHeader.name] === 'number')
        this.sortDataState.sortedData.sort((a: any, b: any) => a[sortByHeader.name] - b[sortByHeader.name]);
    } else {
        if (sortByHeader.sortAsc) {
          // If sorting Asc, Sort Desc
          sortByHeader.sorting = true;
          sortByHeader.sortAsc = false;
          this.sortDataState.sortedData.reverse();
      } else {
        // If Sorting Desc, Reset
        // console.log('Sort Reset');
        this.resetSortData();
        this.sortDataState.sortedData = [...this.studentData];
      }
    }
  }

  resetSortData(activeHeader = '') {
    this.columnHeaders.forEach((header: any) => {
      if (header.name !== activeHeader) header.sorting = false;
    });
  }

  setColumns() {
    document.documentElement.style.setProperty("--ps-table-columns", this.columnHeaders.length);
  }

  fetchJSONStudentData() {
    return [
      {
        name: 'Student 1',
        class: '1',
        section: 'A',
        subj1: 20,
        subj2: 30,
        sub3: 40,
      },
      {
        name: 'Student 2',
        class: '2',
        section: 'B',
        subj1: 10,
        subj2: 35,
        sub3: 20,
      },
      {
        name: 'Student 3',
        class: '4',
        section: 'A',
        subj1: 45,
        subj2: 40,
        sub3: 40,
      },
      {
        name: 'Student 4',
        class: '3',
        section: 'C',
        subj1: 5,
        subj2: 10,
        sub3: 25,
      },
    ];
  }

  fetchJSONStudentDataExtraCol() {
    return [
      {
        name: 'Student 1',
        class: '1',
        section: 'A',
        subj1: 20,
        subj2: 30,
        sub3: 40,
        sub4: 40,
      },
      {
        name: 'Student 2',
        class: '2',
        section: 'B',
        subj1: 10,
        subj2: 35,
        sub3: 20,
        sub4: 20,
      },
      {
        name: 'Student 3',
        class: '4',
        section: 'A',
        subj1: 45,
        subj2: 40,
        sub3: 40,
        sub4: 40,
      },
      {
        name: 'Student 4',
        class: '3',
        section: 'C',
        subj1: 5,
        subj2: 10,
        sub3: 25,
        sub4: 25,
      },
    ];
  }

}
