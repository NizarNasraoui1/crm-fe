import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
  selector: 'app-save-note-modal',
  templateUrl: './save-note-modal.component.html',
  styleUrls: ['./save-note-modal.component.scss']
})
export class SaveNoteModalComponent implements OnInit {
  displaySaveModal: boolean=true;
  noteContent:string;
  constructor(private broadcastService:BroadcastService) { }

  ngOnInit(): void {
    
  }

  hundleNoteContentChange(noteContent:string){
    this.noteContent=noteContent;
  }

  onSave(){
    this.broadcastService.boradcast("saveNote",this.noteContent);
    this.displaySaveModal=false;
  }
}
