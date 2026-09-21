import { Routes } from '@angular/router';
import { BookList } from './components/BookList/book-list';
import { BookDetails } from './components/BookDetails/book-details';
import { NotFound } from './components/NotFound/not-found';
export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookList },
  { path: 'book/:id', component: BookDetails },
  {
    path: '**',
    component: NotFound,
  },
];
