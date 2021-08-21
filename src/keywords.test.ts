import { isReserved } from './keywords';

test('isReserved', () => {
  expect(isReserved('FILE', 'sqlite')).toBe(false);
  expect(isReserved('FILE', 'mysql')).toBe(false);
  expect(isReserved('FILE', 'postgres')).toBe(false);
  expect(isReserved('FILE', 'oracle')).toBe(true);
  expect(isReserved('FILE', 'mssql')).toBe(true);

  expect(isReserved('ABORT')).toBe(true);
  expect(isReserved('ABORT', 'sqlite')).toBe(true);
  expect(isReserved('ABORT', 'mysql')).toBe(false);
  expect(isReserved('ABORT', 'postgres')).toBe(false);
  expect(isReserved('ABORT', 'oracle')).toBe(false);
  expect(isReserved('ABORT', 'mssql')).toBe(false);

  expect(isReserved('BLAH', 'sqlite')).toBe(false);
});
