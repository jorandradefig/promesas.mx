import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
const spreadsheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQv7q4_m8bCXSCJcGT_oHfH-mMbD17L1k6dv9pOl3gtZtDbI00Yuxk4ejgDlkcVbG9t88OTNZN3Eudu/pub?gid=0&single=true&output=csv';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  data: object[];

  constructor() { }

  ngOnInit() {
    d3.csv(spreadsheet, (err, data) => {
      console.log(data);
      this.data = data;
    });
  }

}
