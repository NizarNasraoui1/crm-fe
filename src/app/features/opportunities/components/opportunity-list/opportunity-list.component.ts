import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { OpportunityService } from '../../services/opportunity.service';
import { Opportunity } from '../../models/opportunity';
import { OpportunityStageEnum } from '../../models/opportunityStageEnum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.scss']
})
export class OpportunityListComponent implements OnInit {
    opportunityList:Opportunity[];
    firstContactList:Opportunity[]=[];
    meetingScheduledList:Opportunity[]=[];
    proposalList:Opportunity[]=[];
    closedList:Opportunity[]=[];

  constructor(private opportunityService:OpportunityService,private router:Router) { }

  ngOnInit(): void {
    this.getAllOpportunities();
  }

  drop(event: CdkDragDrop<any[]>) {
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
        this.fillInStepLists();
    });
  }

  fillInStepLists(){
    this.opportunityList.forEach((opportunity)=>{
        let stage=opportunity.stage;
        if(OpportunityStageEnum.FIRST_CONTACT===stage){
            this.firstContactList.push(opportunity);
        }
        else if(OpportunityStageEnum.MEETING_SCHEDULED===stage){
            this.meetingScheduledList.push(opportunity);
        }
        else if(OpportunityStageEnum.PROPOSAL){
            this.proposalList.push(opportunity);
        }
        else if(OpportunityStageEnum.CLOSED){
            this.closedList.push(opportunity);
        }
    });
  }

  navigateToContactDetails(contactId:number){
    this.router.navigate(['/contact/details/',contactId])
  }

}
