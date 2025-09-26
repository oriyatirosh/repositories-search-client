import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Repository } from '../../core/models/repository.model';
import { RepositoriesService } from '../../core/services/repositories.service';
import { BookmarksService } from '../../core/services/bookmarks.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  query = '';
  results: Repository[] = [];
  loading = false;
  constructor(
    private repo: RepositoriesService,
    private bookmarks: BookmarksService
  ) {}

  search() {
    if (!this.query.trim()) return;
    this.loading = true;
    this.repo.search(this.query).subscribe({
      next: (data) => {
        console.log(data);
        this.results = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('search error', err);
        this.loading = false;
      },
    });
  }

  bookmark(repo: Repository) {
    this.bookmarks.add(repo).subscribe({
      next: () => alert('bookmarked saved!'),
      error: (e) => console.error('bookmark error', e),
    });
  }
}
