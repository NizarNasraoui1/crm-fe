import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Note } from 'src/app/shared/models/Note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() id:number;
  @Input() title:string;
  @Input() content:string;
  @Output() openUpdateNoteEvent=new EventEmitter<Note>;
  @Output() noteUpdatedEvent=new EventEmitter<any>;

  constructor(private noteService:NoteService,private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onUpdate(){
    this.openUpdateNoteEvent.emit(new Note(this.id,this.title,this.content));
  }

  onDelete(){
    this.noteService.deleteNoteByid(this.id).subscribe({
      next:()=> {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Deleted Succefully'});
        this.noteUpdatedEvent.emit();
      },
      error: ()=>{
        this.messageService.add({severity:'error', summary: 'Warn', detail: 'Delete fails'});
      }
    })
  }

}