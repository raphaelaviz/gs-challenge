import tasks from '@/db/schemas/tasks'
import users from '@/db/schemas/users'
import { db } from '@/drizzle/db'
import { eq, sql } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const { taskId, taskScore } = await request.json()

	if (!taskId || !taskScore) {
		return NextResponse.json(
			{ error: 'Missing taskId or taskScore' },
			{ status: 400 }
		)
	}

	try {
		const updateTaskResult = await db
			.update(tasks)
			.set({ status: 'Done' })
			.where(eq(tasks.id, parseInt(taskId)))

		// Check if the task update was successful. Neon database doesn't support transactions
		if (updateTaskResult.rowCount === 0) {
			return NextResponse.json(
				{ error: 'Failed to update task status' },
				{ status: 500 }
			)
		}

		await db
			.update(users)
			.set({
				currentScorePoints: sql`${users.currentScorePoints} + ${taskScore}`
			})
			.where(eq(users.id, 1))

		revalidatePath('/', 'layout')

		return NextResponse.json({
			message: 'Task marked as done and user score updated successfully',
			redirect: `/tasks/${parseInt(taskId) + 1}`
		})
	} catch (error) {
		console.error('Error updating task status and user score:', error)
		return NextResponse.json(
			{ error: 'Failed to update task status and user score' },
			{ status: 500 }
		)
	}
}
