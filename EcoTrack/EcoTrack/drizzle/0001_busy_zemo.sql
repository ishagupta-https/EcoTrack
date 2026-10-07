CREATE TABLE `game_stats` (
	`user_id` text PRIMARY KEY NOT NULL,
	`rounds` integer DEFAULT 0 NOT NULL,
	`correct` integer DEFAULT 0 NOT NULL,
	`best` integer DEFAULT 0 NOT NULL,
	`highest` integer DEFAULT 1 NOT NULL,
	`perfect` integer DEFAULT 0 NOT NULL
);
