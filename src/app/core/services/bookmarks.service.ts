import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository.model';

@Injectable({ providedIn: 'root' })
export class BookmarksService {
  private base = 'http://localhost:5006/api/Bookmarks';
  constructor(private http: HttpClient) {}
  get(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.base);
  }
  add(repo: Repository) {
    return this.http.post(this.base, repo);
  }
  remove(fullName: string) {
    return this.http.delete(`${this.base}/${encodeURIComponent(fullName)}`);
  }
}
