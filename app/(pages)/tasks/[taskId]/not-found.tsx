import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center text-center">
			<h1 className="mb-4 text-4xl font-bold">
				Could not find requested task or there's no more tasks to show
			</h1>
			<Link
				href="/tasks"
				className="text-xl text-blue-600 hover:underline"
			>
				Return to Tasks
			</Link>
		</div>
	)
}
