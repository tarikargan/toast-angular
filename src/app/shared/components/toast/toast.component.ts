import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  toastData:any;


  constructor(private utilService:UtilService) { }

  ngOnInit(): void {
    this.utilService.Toast.subscribe((data) =>{
      this.toastData = data;
      console.log('data t', data);

    })
  }
  hideToast(){
    this.utilService.hideToast(this.toastData);
    console.log('clicked t');

  }


}
