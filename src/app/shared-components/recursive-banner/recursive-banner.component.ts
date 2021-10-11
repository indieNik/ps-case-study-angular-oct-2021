import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ps-recursive-banner',
  templateUrl: './recursive-banner.component.html',
  styleUrls: ['./recursive-banner.component.scss']
})
export class RecursiveBannerComponent implements OnInit {
  
  @Input() text = "A floating banner text which keeps on rotatin";
  @Input() boxes = 7;
  
  constructor() { }

  ngOnInit(): void {
  }

}
