import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { OpportunityService } from '../../services/opportunity.service';
import { Opportunity } from '../../models/opportunity';

@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.scss']
})
export class OpportunityListComponent implements OnInit {
    opportunityList:Opportunity[];
    firstContactList=['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
    meetingScheduledList=['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
    proposalList=['Get up'];
    closedList=['Brush teeth'];

  constructor(private opportunityService:OpportunityService) { }

  ngOnInit(): void {
    this.getAllOpportunities();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  getAllOpportunities(){
    this.opportunityService.getAllOpportunities().subscribe((res)=>{
        this.opportunityList=res;
        console.log(res);
    });
  }

}
