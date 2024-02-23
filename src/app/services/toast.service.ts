import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }
   
  SuccessToast(message:any, title:any){
      this.toastr.success(message, title);
  }
   
  ErrorToast(message:any, title:any){
      this.toastr.error(message, title)
  }
   
  InfoToast(message:any, title:any){
      this.toastr.info(message, title)
  }
   
  WarningToast(message:any, title:any){
      this.toastr.warning(message, title)
  }
}
