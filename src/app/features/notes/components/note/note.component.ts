import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
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
  
  constructor(private noteService:NoteService,private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onUpdate(){
    console.log("update");
  }

  onDelete(){
    this.noteService.deleteNoteByid(this.id).subscribe({
      next:()=> {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Deleted Succefully'});
      },
      error: ()=>{
        this.messageService.add({severity:'error', summary: 'Warn', detail: 'Delete fails'});
      }
    })
  }

}