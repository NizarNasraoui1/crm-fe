import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { SearchParams } from '../../models/searchParams';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() searchParams:SearchParams;
  @Output() searchField=new EventEmitter<string>();
  @Output() sortField=new EventEmitter<string>();

  cities: any[];
  selectedCity: City;
  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY',disabled:true},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
   }

  ngOnInit(): void {
  }

}
interface City {
  name: string,
  code: string
}