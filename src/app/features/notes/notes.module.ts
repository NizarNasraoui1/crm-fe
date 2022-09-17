import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import {PanelModule} from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    FormsModule,
    AngularEditorModule,
    SharedModule
  ],
  exports: [NotesComponent,NoteComponent]
})
export class NotesModule { }
