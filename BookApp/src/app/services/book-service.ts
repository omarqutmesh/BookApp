import { Injectable } from '@angular/core';
import { Book } from '../model/Book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
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
  getAll(): Observable<Book[]> {
    return of(this.books);
  }
  getById(id: number): Observable<Book | undefined> {
    return of(this.books.find((book) => book.id == id));
  }
}
