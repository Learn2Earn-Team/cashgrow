import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilter } from 'src/app/pipes/search-filter.pipe'; 


@NgModule({
  declarations: [SearchFilter],
  imports: [
    CommonModule
  ],
  exports: [SearchFilter]
})
export class ShareModule { }
