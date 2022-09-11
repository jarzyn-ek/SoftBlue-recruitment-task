import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeatureItem } from '../models/feature-item.model';
import { API_URL } from '../../../core/config/apiUrl.config';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private httpService: HttpClient) {}

  getFeatureItems(): Observable<FeatureItem[]> {
    return this.httpService.get<FeatureItem[]>(`${API_URL}/services`);
  }
}
