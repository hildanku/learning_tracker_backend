import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
export const usersTable = mysqlTable('users', {
  id: serial().primaryKey(),
  fullname: varchar({ length: 255 }).notNull(),
  username: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
});