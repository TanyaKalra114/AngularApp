import { Component, OnInit } from '@angular/core';
import { InfoService } from "../info.service";

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css'],
  providers:[InfoService]
})
export class EmployeeInformationComponent implements OnInit {

  infoReceived1:string[]= [];
  infoReceived2:string[]= [];
  infoReceived3:string[]= [];

  getInfoFromService1(){
    this.infoReceived1 = this.iservice.getInfo1();
  }
  getInfoFromService2(){this.infoReceived2 = this.iservice.getInfo2();}
  getInfoFromService3(){this.infoReceived3 = this.iservice.getInfo3();}

  constructor(private iservice : InfoService) { }

  ngOnInit(): void {
  }
  updateInfo1(form: any){

    this.iservice.addInfo1(form.value.location)

  }
}
