import tasks from '@/db/schemas/tasks'
import users from '@/db/schemas/users'
import { db } from '@/drizzle/db'
import { eq, sql } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const { taskId } = await request.json()

	if (!taskId) {
		return NextResponse.json({ error: 'Missing taskId' }, { status: 400 })
	}

	try {
		await db
			.update(tasks)
			.set({ status: 'Escalated' })
			.where(eq(tasks.id, parseInt(taskId)))
		revalidatePath('/', 'layout')
		return NextResponse.json({
			message: 'Task marked as escalated',
			redirect: `/tasks/${parseInt(taskId) + 1}`
		})
	} catch (error) {
		console.error('Error updating task status:', error)
		return NextResponse.json(
			{ error: 'Failed to update task status' },
			{ status: 500 }
		)
	}
}
