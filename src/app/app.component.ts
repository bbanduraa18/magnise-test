import { Component } from '@angular/core';
import { DataService } from "./services/data.service";
import { LoaderService } from "./services/loader.service";
import { ServiceInterface } from "./types/service.interface";
import { Subject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private services?: ServiceInterface[];
  public title='magnise-test';
  public groups?: number[];
  public isLoaded: boolean = false;
  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(
    private dataService: DataService,
    private loaderService: LoaderService
  ) { }

  callApi(): void {
    this.dataService.getData().subscribe((services) => {
      this.isLoaded = true;
      this.services = services;
      this.groups = this.dataService.getUniqueId(services);
    });
  }

  getServicesWithId(id: number): ServiceInterface[] {
    return this.services!.filter(service => service.service_group_id === id);
  }
}
