import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;
  order: string = 'title';
  reverse: boolean = false;
  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() {
    this.bookService.getAllBooks().then((res) => {
      this.books = res;
      console.log(this.books);
    }, (err) => {
      console.log(err);
    });
  }

  deleteBook(id) {
    confirm('Are you sure to delete?');
    this.bookService.deleteBook(id).then((result) => {
      window.location.reload();
    }, (err) => {
      console.log(err);
    });
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
