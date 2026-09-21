import { Component, signal } from '@angular/core';
import { BookList } from './components/BookList/book-list';

@Component({
  selector: 'app-root',
  imports: [BookList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('BookApp');
}
