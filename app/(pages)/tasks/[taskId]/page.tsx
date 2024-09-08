import { ClipboardCheck } from 'lucide-react'
import ButtonsSection from '@/components/buttons-section'
import CardsSection from '@/components/cards-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FaClipboardCheck, FaUserAlt } from 'react-icons/fa'
import { getSingleTask } from '@/db/queries/tasks-queries'
import { notFound } from 'next/navigation'
import PatientInfoCard from '@/components/patient-info-card'

const SingleTaskPage = async ({ params }: { params: { taskId: number } }) => {
	const task = await getSingleTask(params.taskId)

	if (!task) {
		return notFound()
	}

	return (
		<Card className="flex h-full flex-col">
			<CardHeader className="flex-shrink-0 bg-blue-50 p-3">
				<div className="flex flex-col space-y-2">
					<div className="flex items-center text-blue-600">
						<FaClipboardCheck className="mr-2 h-5 w-5" />
						<h3 className="text-lg font-semibold">
							{task.description}
						</h3>
					</div>
					<div>
						<p className="text-xs text-gray-600">
							Rule 334: The GOZ 2000 can only be billed from ages
							7 to 18. For insured persons under the age of 6,
							only billable if the 6-year molar erupts
							prematurely.
						</p>
					</div>
				</div>
			</CardHeader>
			<CardContent className="flex flex-grow flex-col space-y-2 py-2">
				<div className="flex flex-col p-1 text-sm font-bold sm:flex-row sm:items-center sm:justify-between">
					<p>Excerpt from the patient file</p>
					<a href="#" className="mt-1 text-blue-600 sm:mt-0">
						to the contract &gt;
					</a>
				</div>

				{/* PATIENT INFO CARD*/}
				<PatientInfoCard
					firstName={task.insured_person_first_name}
					lastName={task.insured_person_last_name}
					insuranceNumber={task.insurance_number}
					gender={task.gender}
					birthDate={task.birthdate}
					vpNr={task.vpnr}
					telephoneNumber={task.telephone_number}
					address={task.address}
				/>

				<Card className="p-4 shadow-md shadow-black/20">
					<p className="mb-2 text-xs font-semibold">
						Add missing information
					</p>
					<div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
						<input
							type="text"
							className="flex-1 rounded-md border bg-gray-100 px-3 py-2 text-xs sm:rounded-l-md"
							placeholder="Add missing information"
						/>
						<Button className="rounded-sm bg-blue-500 hover:bg-blue-600">
							Save
						</Button>
					</div>
				</Card>

				<CardsSection taskScore={task.score_points} />
				<ButtonsSection
					taskId={task.id}
					taskScore={task.score_points}
				/>
			</CardContent>
		</Card>
	)
}

export default SingleTaskPage
