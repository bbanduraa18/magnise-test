import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ServiceInterface } from "../types/service.interface";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl: string = 'https://business-beauty.staging.eservia.com/api/v1.0/widget/services?sort=-id&code=35CDFF1D10A64E9E91D4EA9C8B983DBC';
  private idArray: number[] = [];
  private uniqueId: number[] = [];

  constructor(private http: HttpClient) { }

  getData(): Observable<ServiceInterface[]> {
    return this.http.get<{data: ServiceInterface[]}>(this.apiUrl)
      .pipe(map(res => res.data))
  }

  getUniqueId(services: ServiceInterface[]): number[] {
    for(let i = 0; i < services.length; i++) {
      this.idArray.push(services[i].service_group_id)
    }
    this.uniqueId = Array.from(new Set(this.idArray));

    return this.uniqueId;
  }
}
