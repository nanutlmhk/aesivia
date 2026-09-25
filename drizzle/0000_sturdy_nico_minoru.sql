CREATE TABLE `characters` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`pronouns` text NOT NULL,
	`age_band` text NOT NULL,
	`context` text NOT NULL,
	`temperament` text NOT NULL,
	`palette` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `characters_user_id_unique` ON `characters` (`user_id`);