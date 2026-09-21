import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list.html',
})
export class BookList {
  private readonly bookSerivce = inject(BookService);

  books = toSignal(this.bookSerivce.getAll(), {
    initialValue: [],
  });
}
