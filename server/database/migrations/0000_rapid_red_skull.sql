CREATE TABLE `equipment` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`sku` text,
	`name` text NOT NULL,
	`category` text NOT NULL,
	`vendor` text,
	`purchase_date` text NOT NULL,
	`installed_at` text,
	`price` real,
	`tax_amount` real,
	`notes` text
);
--> statement-breakpoint
CREATE TABLE `filament_usage` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`print_id` integer NOT NULL,
	`spool_id` integer NOT NULL,
	`weight_consumed_g` real NOT NULL,
	FOREIGN KEY (`print_id`) REFERENCES `prints`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`spool_id`) REFERENCES `spools`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `prints` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`print_name` text NOT NULL,
	`created_at` text NOT NULL,
	`duration_mins` integer NOT NULL,
	`energy_used_kwh` real NOT NULL,
	`nozzle_id` text NOT NULL,
	`status` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `spools` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`sku` text,
	`name` text NOT NULL,
	`brand` text NOT NULL,
	`vendor` text,
	`material` text NOT NULL,
	`color` text NOT NULL,
	`starting_weight_g` integer NOT NULL,
	`current_weight_g` integer NOT NULL,
	`price` real,
	`tax_amount` real,
	`notes` text
);
