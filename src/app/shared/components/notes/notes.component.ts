import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() noteList:Note[];
  @Input() contactId:number;

  constructor() { }

  ngOnInit(): void {
  }

}
