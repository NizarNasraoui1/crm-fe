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
  noteTitle:string;
  constructor(private broadcastService:BroadcastService) { }

  ngOnInit(): void {
    
  }

  hundleNoteContentChange(noteContent:string){
    this.noteContent=noteContent;
  }

  hundleNoteTitleChange(noteTitle:string){
    this.noteTitle=noteTitle;
  }

  onSave(){
    this.noteContent=this.noteContent;
    this.broadcastService.boradcast("saveNote",{content:this.noteContent});
    this.displaySaveModal=false;
  }
}
