import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { DataService } from "./services/data.service";
import { ServiceInterface } from "./types/service.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='magnise-test';
  public services?: ServiceInterface[];
  public groups?: number[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((services) => {
      this.services = services;
      this.groups = this.dataService.getUniqueId(services);
    });
  }

  getServicesWithId(id: number): ServiceInterface[] {
    return this.services!.filter(service => service.service_group_id === id);
  }
}
