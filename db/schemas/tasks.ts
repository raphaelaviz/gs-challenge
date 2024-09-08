import {
	timestamp,
	pgTable,
	pgEnum,
	text,
	primaryKey,
	integer,
	serial,
	boolean,
	json,
	varchar,
	date
} from 'drizzle-orm/pg-core'

export const statusEnum = pgEnum('status', ['New', 'Done', 'Escalated'])
export const genderEnum = pgEnum('gender', ['männlich', 'weiblich', 'divers'])

const tasks = pgTable('tasks', {
	id: serial('id').primaryKey(),
	insurance_number: varchar('insurance_number', { length: 20 }).notNull(),
	status: statusEnum('status').default('New').notNull(),
	insured_person_first_name: varchar('insured_person_first_name', {
		length: 50
	}),
	insured_person_last_name: varchar('insured_person_last_name', {
		length: 50
	}),
	gender: genderEnum('gender'),
	birthdate: varchar('birthdate', { length: 10 }),
	vpnr: varchar('vpnr', { length: 10 }),
	telephone_number: varchar('telephone_number', { length: 20 }),
	address: varchar('address', { length: 255 }),
	description: varchar('description', { length: 255 }),
	score_points: integer('score_points'),
	created_at: timestamp('created_at').defaultNow(),
	updated_at: timestamp('updated_at').defaultNow(),
	completed_at: timestamp('completed_at').defaultNow()
})

export default tasks
