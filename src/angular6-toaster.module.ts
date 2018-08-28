import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterContainerComponent } from './toaster-container/toaster-container.component';
import { ToastComponent } from './toast/toast.component';
import { ToasterService } from './toaster.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ToasterService],
  declarations: [ToasterContainerComponent, ToastComponent],
  exports: [ToasterContainerComponent, ToastComponent]
})
export class ToasterModule { }
