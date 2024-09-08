import type { Config } from 'drizzle-kit'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	schema: './db/schemas/index.ts',
	dialect: 'postgresql',

	// I decided to hardcode the database connection string for practical reasons.
	// In a real-world scenario, this would be stored in an environment variable.

	dbCredentials: {
		url: 'postgresql://wildcard_owner:ZEadDInG15yg@ep-solitary-mouse-a26jld3h.eu-central-1.aws.neon.tech/global-side?sslmode=require'
	}
}) satisfies Config
