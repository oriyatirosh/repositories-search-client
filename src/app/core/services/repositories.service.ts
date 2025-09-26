import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService {
  private base = 'http://localhost:5006/api/Repositories';
  constructor(private http: HttpClient) {}
  search(query: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(
      `${this.base}/search?q=${encodeURIComponent(query)}`
    );
  }
}
