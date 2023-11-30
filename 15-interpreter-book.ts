class Book {
  constructor(
    public title: string,
    public author: string,
    public year: string,
    public genre: string) { }
}

interface Query {
  execute(books: Book[]): Book[];
}

class AuthorQuery implements Query {
  constructor(private author: string) { }

  execute(books: Book[]): Book[] {
    return books.filter(book => book.author === this.author);
  }
}

class YearQuery implements Query {
  constructor(private year: string) { }

  execute(books: Book[]): Book[] {
    return books.filter(book => book.year === this.year);
  }
}

class GenreQuery implements Query {
  constructor(private genre: string) { }

  execute(books: Book[]): Book[] {
    return books.filter(book => book.genre === this.genre);
  }
}

class QueryContext {
  constructor(private queries: Query[]) { }
  addQuery(query: Query): void {
    this.queries.push(query);
  }

  executeQuery(books: Book[]): Book[] {
    return this.queries.reduce((filteredBooks, query) => query.execute(filteredBooks), books);
  }
}

const bookDatabases: Book[] = [
  new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', '1954', 'Fantasy'),
  new Book('The Two Towers', 'J.R.R. Tolkien', '1954', 'Fantasy'),
  new Book('The Return of the King', 'J.R.R. Tolkien', '1955', 'Fantasy'),
  new Book('The Silmarillion', 'J.R.R. Tolkien', '1977', 'Fantasy'),
  new Book('The Hobbit', 'J.R.R. Tolkien', '1937', 'Fantasy'),
  new Book('The Way of Kings', 'Brandon Sanderson', '2010', 'Fantasy'),
  new Book('Words of Radiance', 'Brandon Sanderson', '2014', 'Fantasy'),
  new Book('Oathbringer', 'Brandon Sanderson', '2017', 'Fantasy'),
  new Book('Rhythm of War', 'Brandon Sanderson', '2020', 'Fantasy'),
  new Book('The Eye of the World', 'Robert Jordan', '1990', 'Fantasy'),
  new Book('The Great Hunt', 'Robert Jordan', '1990', 'Fantasy'),
  new Book('The Dragon Reborn', 'Robert Jordan', '1991', 'Fantasy'),
  new Book('The Shadow Rising', 'Robert Jordan', '1992', 'Fantasy'),
  new Book('The Fires of Heaven', 'Robert Jordan', '1993', 'Fantasy'),
];

const context = new QueryContext([]);
context.addQuery(new AuthorQuery('J.R.R. Tolkien'));
context.addQuery(new YearQuery('1954'));

const result = context.executeQuery(bookDatabases);
console.log(result);

