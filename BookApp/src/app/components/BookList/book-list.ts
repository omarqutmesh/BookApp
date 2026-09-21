import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'book-list',
  standalone: true,
  templateUrl: './book-list.html',
})
export class BookList {
  private readonly bookSerivce = inject(BookService);

  books = toSignal(this.bookSerivce.getAll(), {
    initialValue: [],
  });
}
