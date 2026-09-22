import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books = [
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
    },
    {
      id: 2,
      title: 'The Pragmatic Programmer',
      author: 'Hunt & Thomas',
    },
    {
      id: 3,
      title: 'Refactoring',
      author: 'Martin Fowler',
    },
  ];
  getAll(): Observable<any[]> {
    return of(this.books);
  }
  getById(id: number): Observable<any | undefined> {
    return of(this.books.find((book) => book.id == id));
  }
}
