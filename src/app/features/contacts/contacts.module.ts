import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ContactComponent } from './components/contact/contact.component';
import { ContactTabsComponent } from './containers/contact-tabs/contact-tabs.component';
import { TabViewModule } from 'primeng/tabview';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactDetailsComponent,
    ContactComponent,
    ContactTabsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    FormsModule,
    InputTextModule,
    TabViewModule,
    SharedModule

  ],
  providers: []
})
export class ContactsModule { }
