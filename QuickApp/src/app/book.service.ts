import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  book: Book;

  constructor() { 
    this.book = new Book();
  }

  getName(){
    return this.book.name;
  }

  getVendor(){
    return this.book.vendor;
  }
}
