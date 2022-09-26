import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public Toast = new BehaviorSubject<Object>({show:false,data:{message:'',type:''}});  //type ==> ['success','warning','danger'];
  delay: number = 5;
  interval:any;

  constructor() { }

  //show toast method
  showToast(data:any){
    this.Toast.next({show:true,data:{message:data?.message,type: data.type}});
    // the remaining time to hide toast
    this.interval = setInterval(()=>{
        this.delay = this.delay - 1;

        if(this.delay == 0){
          clearInterval(this.interval);
          this.Toast.next({show:false,data:{message:data?.message,type: data.type}}); //hide toast
          this.delay = 5;
        }
    },1000);
  }

  // hide toast method
  hideToast(data:any){
    this.Toast.next({show:false,data:{message:data?.message,type: data.type}});
    clearInterval(this.interval);
    this.delay = 5;
  }
}
