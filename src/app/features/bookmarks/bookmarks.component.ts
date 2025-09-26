import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repository } from '../../core/models/repository.model';
import { BookmarksService } from '../../core/services/bookmarks.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent {
  bookmarks: Repository[] = [];

  constructor(private svc: BookmarksService) {
    this.load();
  }

  load() {
    this.svc.get().subscribe((list) => (this.bookmarks = list));
  }

  remove(fullName: string) {
    this.svc.remove(fullName).subscribe(() => this.load());
  }
}
