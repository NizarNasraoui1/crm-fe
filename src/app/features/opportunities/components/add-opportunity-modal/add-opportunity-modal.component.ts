import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/features/contacts/service/contact.service';
import { Opportunity } from '../../models/opportunity';
import { OpportunityService } from '../../services/opportunity.service';
import {Contact} from '../../../contacts/models/contact';

@Component({
    selector: 'app-add-opportunity-modal',
    templateUrl: './add-opportunity-modal.component.html',
    styleUrls: ['./add-opportunity-modal.component.scss'],
})
export class AddOpportunityModalComponent implements OnInit {
    displaySaveModal = true;
    filteredContacts: any[];
    selectedContacts: any[];
    searchWord:string;
    opportunityName:string;
    constructor(private contactService:ContactService) {}

    ngOnInit(): void {}

    filterOpportunities(event:any){
        this.contactService.searchContactDynamically(event.query).subscribe((res)=>{
            this.filteredContacts=[];
            this.filteredContacts=[...res];
        })
    }

    saveOpportunity(){
        console.log(this.selectedContacts)
        const opportunity:Opportunity={};
        opportunity.name=this.opportunityName;
        const contactList:Contact[]=[];
        this.selectedContacts.forEach((contact)=>{
            const newContact:Contact=new Contact();
            contact.id=contact.id;
            contactList.push(newContact);
        });
        opportunity.contacts=contactList;
        console.log(opportunity);
        console.log(opportunity.contacts)
    }
}
