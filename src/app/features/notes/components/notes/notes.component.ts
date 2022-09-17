import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Note } from 'src/app/shared/models/Note';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { NoteService } from '../../services/note.service';
import { SaveNoteModalComponent } from '../save-note-modal/save-note-modal.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() noteList:Note[];
  @Input() contactId:number;
  @ViewChild('saveNoteModal',{read:ViewContainerRef}) saveNoteModal!:ViewContainerRef;
  

  
  constructor(private broadcastService:BroadcastService,private noteService:NoteService) { }

  ngOnInit(): void {
    this.broadcastService.subscribe("saveNote",(res)=>this.saveNote(res));
  }

  onSaveNote(){
    this.saveNoteModal.clear();
    const saveNoteModalComponent=this.saveNoteModal.createComponent(SaveNoteModalComponent);
  }

  saveNote(note:Note){
    this.noteService.saveNote(this.contactId,note).subscribe((res)=>{

    })
  }

}
