import { pgTable, integer, serial } from 'drizzle-orm/pg-core'

const users = pgTable('users', {
	id: serial('id').primaryKey(),
	dailyGoal: integer('daily_goal').default(300).notNull(),
	currentScorePoints: integer('current_score_points').default(143).notNull()
})

export default users
