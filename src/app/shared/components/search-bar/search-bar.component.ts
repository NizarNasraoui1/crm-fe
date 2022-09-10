import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchFields } from '../../models/searchFields';
import { SearchForm } from '../../models/searchForm';
import { SearchParams } from '../../models/searchParams';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() searchParams:SearchParams;
  @Output() searchForm=new EventEmitter<SearchForm>();
  searchFormGroup:FormGroup;
  selectedCity: any;
  constructor() {
    this.initForm();
   }
   
   initForm(){
    this.searchFormGroup=new FormGroup({
      searchWord:new FormControl(null),
      searchFields:new FormControl(null),
      sortField:new FormControl(null),
      sortDirection:new FormControl(null)
    })
   }

   handleFormChanges(){
    this.searchFormGroup.valueChanges.subscribe((form)=>{
      console.log(form)
      // console.log(new SearchForm(form.searchWord,new SearchFields(form.searchFields),form.sortField,form.sortDirection))
    })
   }

  //  transformToSearchForm(form:any):SearchForm{
  //   return new SearchForm(form.searchWord,new SearchFields(form.searchFields),form.sortField,form.sortDirection);
  //  }

  ngOnInit(): void {
    this.handleFormChanges();
  }

}