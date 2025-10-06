import { Body, Controller, Get, Post } from '@nestjs/common';
import { Book } from './schema/book.schema';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Post()
  createBook(@Body() book: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(book as unknown as Book);
  }
  @Get()
  getBooks(): Promise<Book[]> {
    return this.bookService.getBooks();
  }
}
