import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import * as schema from '@/db/schemas'
import tasks from '@/db/schemas/data/tasks.json'
import { db, sql } from '@/drizzle/db'
import { users } from '@/db/schemas'

async function main() {
	try {
		console.log('Seeding database.')

		await db.delete(schema.tasks)
		// await db.delete(schema.users)
		await db.insert(schema.tasks).values(tasks as [])
		// await db.insert(schema.users).values(users)

		console.log('Seeding finished.')
	} catch (error) {
		console.error(error)
		throw new Error('Failed to seed the database.')
	}
}
main()
