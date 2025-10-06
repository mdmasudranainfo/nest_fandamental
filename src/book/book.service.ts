import { Injectable } from '@nestjs/common';
import { Book } from './schema/book.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>
  ) {}
  createBook(book: Book): Promise<Book> {
    return this.bookModel.create(book);
  }
  getBooks(): Promise<Book[]> {
    return this.bookModel.find();
  }
}
