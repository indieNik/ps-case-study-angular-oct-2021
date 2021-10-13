import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ps-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.scss']
})
export class RouteSixComponent implements OnInit {

  scrollObserver = new IntersectionObserver(() => {
    // console.log('Adding more boxes..');
    this.boxCards += this.noOfBoxesToAdd;
  }, {
    root: document.querySelector('.observer'),
    rootMargin: '0px',
    threshold: 1.0
  });

  noOfBoxesToAdd = 2;
  boxCards = 5;

  constructor() { }

  ngOnInit(): void {
    const scrollTarget: any = document.querySelector('.target');
    this.scrollObserver.observe(scrollTarget);
  }

  handleAlert(index: any) {
    alert(`Button  in ${index} div  clicked`);
  }

  ngOnDestroy(): void {
    const scrollTarget: any = document.querySelector('.target');
    this.scrollObserver.unobserve(scrollTarget);
  }

}
