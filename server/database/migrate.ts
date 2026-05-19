import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import Database from 'better-sqlite3';

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

async function main() {
  console.log('Running migrations...');
  await migrate(db, { migrationsFolder: './server/database/migrations' });
  console.log('Migrations complete!');
  sqlite.close();
}

main().catch((err) => {
  console.error('Migration failed!');
  console.error(err);
  process.exit(1);
});
