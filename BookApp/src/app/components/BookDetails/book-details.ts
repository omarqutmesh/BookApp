import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookService } from '../../services/book-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'book-details',
  imports: [RouterLink],
  templateUrl: './book-details.html',
  standalone: true,
})
export class BookDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly bookService = inject(BookService);

  id = Number(this.route.snapshot.paramMap.get('id'));
  book = toSignal(this.bookService.getById(this.id), { initialValue: undefined });
}
