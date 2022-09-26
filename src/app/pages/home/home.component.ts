import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
  }
  showToast(){
     this.utilService.showToast({message:'created success',type:'success'});
  }

}
