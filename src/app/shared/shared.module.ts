import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple'
import { MessageService } from 'primeng/api';
import { NotesComponent } from './components/notes/notes.component';
import {PanelModule} from 'primeng/panel';
import { NoteComponent } from './components/note/note.component';

@NgModule({
  declarations: [ToastComponent, NotesComponent, NoteComponent],
  imports: [
    ButtonModule,
    RippleModule,
    CommonModule,
    RippleModule,
    ToastModule,
    PanelModule

  ],
  exports:[ToastComponent,NotesComponent,NotesComponent],
  providers:[]
})
export class SharedModule { }
