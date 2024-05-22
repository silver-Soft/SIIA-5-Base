import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/modules/servicios/core/notification.service';

@Component({
  selector: 'app-riesgo-adacemico',
  templateUrl: './riesgo-adacemico.component.html',
  styleUrls: ['./riesgo-adacemico.component.css']
})
export class RiesgoAdacemicoComponent implements OnInit, AfterViewInit{

  constructor(private _notificationService: NotificationService
  ) { 
    
  }
  
  ngOnInit(): void {
     
  }

  ngAfterViewInit(): void {

  }


}
