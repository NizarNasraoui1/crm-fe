import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() id:number;
  @Input() title:string;
  @Input() content:string;
  
  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(){
    console.log("update");
  }

  onDelete(){
    console.log("delete");
  }

}
