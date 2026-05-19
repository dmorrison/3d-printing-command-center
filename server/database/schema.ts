import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const spools = sqliteTable('spools', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  manufacturerSku: text('manufacturer_sku'),
  name: text('name').notNull(),
  brand: text('brand').notNull(),
  vendor: text('vendor'),
  material: text('material').notNull(),
  color: text('color').notNull(),
  startingWeightG: integer('starting_weight_g').notNull(),
  currentWeightG: integer('current_weight_g').notNull(),
  price: real('price'),
  taxAmount: real('tax_amount'),
  notes: text('notes'),
});

export const prints = sqliteTable('prints', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  printName: text('print_name').notNull(),
  createdAt: text('created_at').notNull(),
  durationMins: integer('duration_mins').notNull(),
  energyUsedKwh: real('energy_used_kwh').notNull(),
  nozzleId: text('nozzle_id').notNull(),
  status: text('status').notNull(),
});

export const filamentUsage = sqliteTable('filament_usage', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  printId: integer('print_id').notNull().references(() => prints.id),
  spoolId: integer('spool_id').notNull().references(() => spools.id),
  weightConsumedG: real('weight_consumed_g').notNull(),
});

export const equipment = sqliteTable('equipment', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  modelNumber: text('model_number'),
  name: text('name').notNull(),
  category: text('category').notNull(), // 'Printer', 'Nozzle', 'Accessory', 'Part'
  vendor: text('vendor'),
  purchaseDate: text('purchase_date').notNull(),
  installedAt: text('installed_at'),
  price: real('price'),
  taxAmount: real('tax_amount'),
  notes: text('notes'),
});
