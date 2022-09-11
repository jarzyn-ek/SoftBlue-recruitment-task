import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../core/config/apiUrl.config';
import { ExperienceItem } from '../models/experience-item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private httpService: HttpClient) {}

  getExperienceItems(): Observable<ExperienceItem[]> {
    return this.httpService.get<ExperienceItem[]>(`${API_URL}/experience`);
  }
}
