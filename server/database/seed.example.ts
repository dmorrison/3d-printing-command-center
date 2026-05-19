import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { spools, equipment } from './schema';
import * as schema from './schema';

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite, { schema });

async function seed() {
  console.log('Seeding database with example data...');

  // --- Example Spools ---
  const spoolData = [
    { 
      sku: 'PLA-BASIC-WHT-1KG', 
      name: 'PLA Basic', 
      brand: 'Example Brand', 
      material: 'PLA', 
      color: 'White (12345)', 
      startingWeightG: 1000, 
      currentWeightG: 1000, 
      price: 19.99, 
      taxAmount: 1.50,
      notes: "Example note"
    },
    { 
      sku: 'PETG-HF-BLU-1KG', 
      name: 'PETG HF', 
      brand: 'Example Brand', 
      material: 'PETG', 
      color: 'Blue (67890)', 
      startingWeightG: 1000, 
      currentWeightG: 1000, 
      price: 22.50, 
      taxAmount: 1.75,
      notes: ""
    },
  ];

  for (const item of spoolData) {
    await db.insert(spools).values(item);
  }

  // --- Example Equipment ---
  const equipmentData = [
    { 
      sku: 'PRINTER-X1-COMBO', 
      name: 'Example 3D Printer', 
      category: 'Printer', 
      purchaseDate: new Date('2026-01-01').toISOString(), 
      price: 499.00, 
      taxAmount: 40.00,
      notes: ""
    },
    { 
      sku: 'NOZ-04-HARDENED', 
      name: '0.4mm Hardened Nozzle', 
      category: 'Nozzle', 
      purchaseDate: new Date('2026-01-15').toISOString(), 
      price: 15.00, 
      taxAmount: 1.25,
      notes: ""
    },
  ];

  for (const item of equipmentData) {
    await db.insert(equipment).values(item);
  }

  console.log('Example seeding complete!');
}

seed().catch(console.error);
