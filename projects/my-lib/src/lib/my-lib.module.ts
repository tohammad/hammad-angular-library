import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [MyLibComponent, SignUpComponent],
  imports: [
  ],
  exports: [MyLibComponent, SignUpComponent]
})
export class MyLibModule { }
