'use client'

import { Check, SquareArrowUp, X } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter, useParams } from 'next/navigation'

interface ButtonsSectionProps {
	taskId: number
	taskScore: number | null
}

const ButtonsSection = ({ taskId, taskScore }: ButtonsSectionProps) => {
	const router = useRouter()
	const params = useParams()

	const markTaskAsDone = async (): Promise<{
		success: boolean
		redirectUrl?: string
	}> => {
		try {
			const response = await fetch('/api/tasks/mark-as-done', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ taskId, taskScore })
			})
			if (!response.ok) throw new Error('Failed to update task status')
			const data = await response.json()
			return { success: true, redirectUrl: data.redirect }
		} catch (error) {
			console.error('Error updating task status:', error)
			return { success: false }
		}
	}

	const escalateTask = async (): Promise<{
		success: boolean
		redirectUrl?: string
	}> => {
		try {
			const response = await fetch('/api/tasks/mark-as-escalated', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ taskId })
			})
			if (!response.ok) throw new Error('Failed to escalate task')
			const data = await response.json()
			return { success: true, redirectUrl: data.redirect }
		} catch (error) {
			console.error('Error escalating task:', error)
			return { success: false }
		}
	}

	const handleStatusUpdate = async (action: 'complete' | 'escalate') => {
		const result =
			action === 'complete'
				? await markTaskAsDone()
				: await escalateTask()
		if (result.success && result.redirectUrl) {
			router.push(result.redirectUrl)
		}
	}

	// redirects without setting any status
	const skipTask = () => {
		const currentId = parseInt(params.taskId as string)
		const nextId = currentId + 1
		router.push(`/tasks/${nextId}`)
	}

	return (
		<div className="flex flex-col-reverse justify-between sm:flex-row">
			<Button
				variant="ghost"
				className="px-2 py-1 text-xs text-blue-600 hover:text-blue-700 sm:px-3"
				onClick={skipTask}
			>
				<X className="mr-1 h-4 w-4 sm:h-5 sm:w-5" /> Skip task
			</Button>
			<div className="flex flex-col-reverse gap-2 sm:flex-row">
				<Button
					className="flex items-center bg-blue-500 px-2 py-1 text-xs hover:bg-blue-600 sm:px-3"
					onClick={() => handleStatusUpdate('escalate')}
				>
					<SquareArrowUp className="mr-1 h-4 w-4 sm:h-5 sm:w-5" />{' '}
					Escalate task
				</Button>
				<Button
					className="flex items-center bg-blue-500 px-2 py-1 text-xs hover:bg-blue-600 sm:px-3"
					onClick={() => handleStatusUpdate('complete')}
				>
					<Check className="mr-1 h-4 w-4 sm:h-5 sm:w-5" /> Task
					completed
				</Button>
			</div>
		</div>
	)
}

export default ButtonsSection
