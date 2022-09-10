import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple'
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [ToastComponent],
  imports: [
    ButtonModule,
    RippleModule,
    CommonModule,
    RippleModule,
    ToastModule

  ],
  exports:[ToastComponent],
  providers:[]
})
export class SharedModule { }
