import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from '@/db/schemas'

// I decided to hardcode the database connection string for practical reasons
// In a real-world scenario, this would be stored in an environment variable.

export const sql = neon(
	'postgresql://wildcard_owner:ZEadDInG15yg@ep-solitary-mouse-a26jld3h.eu-central-1.aws.neon.tech/global-side?sslmode=require'
)

export const db: any = drizzle(sql, { schema })
