import { tasks, users } from '@/db/schemas'
import { db } from '@/drizzle/db'
import { ScorePointsInfo, Task } from '@/types'
import { and, desc, eq, or } from 'drizzle-orm'

export const getUserScorePointsInfo = async (
	id: number
): Promise<ScorePointsInfo> => {
	const userScorePointsInfo = await db.query.users.findFirst({
		where: eq(users.id, id)
	})

	return userScorePointsInfo
}
