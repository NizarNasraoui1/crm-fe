import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../util/components/toast/toast.component';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple'

@NgModule({
  declarations: [ToastComponent],
  imports: [
    ButtonModule,
    RippleModule,
    CommonModule,
    RippleModule,
    ToastModule

  ],
  exports:[ToastComponent]
})
export class SharedModule { }
