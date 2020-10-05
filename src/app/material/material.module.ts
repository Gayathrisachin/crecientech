import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatRadioModule, MatToolbarModule } from '@angular/material';

 
@NgModule({
  declarations: [],
  exports: [ MatSelectModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatToolbarModule,
     MatCardModule,
     MatFormFieldModule,
     MatInputModule,
     MatRadioModule,
    MatListModule],
  imports: [
    CommonModule, 
    
    MatSelectModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatToolbarModule,
     MatCardModule,
     MatFormFieldModule,
     MatInputModule,
     MatRadioModule,
    MatListModule,
   
  ]
})
export class MaterialModule { }
