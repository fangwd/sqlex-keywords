Check if a string is a reserved SQL keyword for SQLite, MySQL, PostgreSQL, Oracle and SQL Server.

## Syntax

```ts
isReserved(keyword: string, dialect?: 'sqlite3' | 'mysql' | 'postgres' | 'mssql' | 'oracle')
```

## Usage

```js
import { isReserved } from 'sqlex-keywords';

expect(isReserved('FILE')).toBe(true);
expect(isReserved('FILE', 'sqlite')).toBe(false);
expect(isReserved('FILE', 'mysql')).toBe(false);
expect(isReserved('FILE', 'postgres')).toBe(false);
expect(isReserved('FILE', 'oracle')).toBe(true);
expect(isReserved('FILE', 'mssql')).toBe(true);
```

## References

[1] https://en.wikipedia.org/wiki/SQL_reserved_words
[2] https://www.sqlite.org/lang_keywords.html
