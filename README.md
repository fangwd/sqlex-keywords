Check if a string is a reserved SQL keyword for SQLite, MySQL, PostgreSQL, Oracle and SQL Server.

## Syntax

```ts
isReserved(keyword: string, dialect?: 'sqlite' | 'mysql' | 'postgres' | 'mssql' | 'oracle')
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
