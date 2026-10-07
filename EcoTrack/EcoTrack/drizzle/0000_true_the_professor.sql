CREATE TABLE `assessments` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`month` text NOT NULL,
	`electricity` real NOT NULL,
	`car` real NOT NULL,
	`transit` real NOT NULL,
	`waste` real NOT NULL,
	`recycled` real NOT NULL,
	`total` real NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_month` ON `assessments` (`user_id`,`month`);--> statement-breakpoint
CREATE TABLE `profiles` (
	`user_id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`city` text NOT NULL,
	`members` integer NOT NULL,
	`target` real NOT NULL,
	`community` integer DEFAULT 0 NOT NULL
);
