import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService]
})
export class ToastComponent implements OnInit {

    constructor(private messageService: MessageService) {}

    ngOnInit() {
    }

    showSuccess() {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    }

    showInfo() {
        this.messageService.add({severity:'info', summary: 'Info', detail: 'Message Content'});
    }

    showWarn() {
        this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Message Content'});
    }

    showError() {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});
    }

    

    onConfirm() {
        this.messageService.clear('c');
    }

    onReject() {
        this.messageService.clear('c');
    }

    clear() {
        this.messageService.clear();
    }

}
