import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vendor : string = '';
  addr : string = '';
  
  constructor(private bookService: BookService) { 
    this.addr = 'Online Flipkart Sales'
  }

  ngOnInit(): void {
    this.vendor = this.bookService.book.vendor;
    console.log(this.bookService.book.vendor);
  }

}
