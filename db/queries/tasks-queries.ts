import { tasks } from '@/db/schemas'
import { db } from '@/drizzle/db'
import { Task } from '@/types'
import { and, desc, eq, or } from 'drizzle-orm'

export const getAllTasks = async (): Promise<Task[]> => {
	const allTasks = await db.query.tasks.findMany({
		columns: {
			id: true,
			description: true,
			status: true,
			completed_at: true
		},
		orderBy: [desc(tasks.completed_at)]
	})

	return allTasks
}

export const getSingleTask = async (id: number): Promise<Task> => {
	const singleTask = await db.query.tasks.findFirst({
		where: eq(tasks.id, id)
	})

	return singleTask
}
