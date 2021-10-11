import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ps-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss']
})
export class RouteTwoComponent implements OnInit {

  config = {
    displayNo: 40, // Number of posts to show on screen
    viewStyle: 'grid', // 'grid' or 'list'
    orderAsc: true,
    items: [0]
  };

  constructor() {
    this.config.items = [];
    for (let i = 0; i < this.config.displayNo; i++) {
      this.config.items.push(i);
    }
  }

  ngOnInit(): void {
  }

  toggleViewStyle(style = 'grid') {
    console.log('style: ', style);
    if ( this.config.viewStyle === style) {
      console.log('Same sa,e');
    } else {
      if (this.config.viewStyle === 'grid') {
        this.config.viewStyle = 'list';
      } else {
        this.config.viewStyle = 'grid';
      }
    }
  }

  sortProducts(sortAsc: any = true) {
    console.log('sortAsc: ', sortAsc);
    this.config.orderAsc = sortAsc;
    this.getItems();
  }

  getItems() {
    const itemsCopy = this.config.items;
    if (this.config.orderAsc) {
      this.config.items = itemsCopy.reverse();
    }
    console.log('items: ', this.config.items);
  }

}
