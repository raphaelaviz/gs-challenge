import { ScorePointsChart } from '@/components/score-points-chart'
import { columns } from '@/components/tasks-table/columns'
import { TasksTable } from '@/components/tasks-table/tasks-table'
import { Card } from '@/components/ui/card'
import WeatherWidget from '@/components/weather-widget'
import { getAllTasks } from '@/db/queries/tasks-queries'

export default async function TasksPage() {
	const tasks = await getAllTasks()

	return (
		<div className="flex flex-grow flex-col gap-4">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<Card className="p-3">
					<ScorePointsChart />
					<p className="text-center font-semibold">
						57 more to reach the daily goal
					</p>
				</Card>
				<Card>
					<WeatherWidget />
				</Card>
			</div>

			<Card className="flex-grow overflow-hidden p-4">
				<TasksTable data={tasks} columns={columns} />
			</Card>
		</div>
	)
}
