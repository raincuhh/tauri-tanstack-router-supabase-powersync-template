import { column, Schema, Table } from "@powersync/web";

// example table
const profiles = new Table(
	{
		profile_id: column.integer,
		user_id: column.text,
		username: column.text,
		email: column.text,
		created_at: column.text,
		updated_at: column.text,
	},
	{
		indexes: {
			username: ["username"],
			user_id: ["user_id"],
		},
	}
);

export const AppSchema = new Schema({
	profiles,
});

export type Database = (typeof AppSchema)["types"];
export type ProfileRecord = Database["profiles"];
