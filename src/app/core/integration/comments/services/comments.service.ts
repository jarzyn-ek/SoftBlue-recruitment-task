import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';
import { API_URL } from '../../../config/apiUrl.config';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private httpService: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.httpService.get<Comment[]>(`${API_URL}/comments`);
  }

  addComment(comment: Comment): Observable<void> {
    return this.httpService.post<void>(`${API_URL}/comments`, { ...comment });
  }
}
