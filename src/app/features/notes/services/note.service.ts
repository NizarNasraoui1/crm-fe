import { Injectable } from '@angular/core';
import { Note } from 'src/app/shared/models/Note';
import { HttpUtilService } from 'src/app/util/service/http-util.service';

const noteUrl="api/note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpUtilService: HttpUtilService) { }

  saveNote(note:Note){
    
  }

  deleteNoteByid(id:number){
    return this.httpUtilService.delete(noteUrl,id);
  }




}
