import { Component, Input } from '@angular/core';
import { ServiceInterface } from "../../types/service.interface";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  @Input('services') services!: ServiceInterface[];
}
