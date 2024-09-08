import { Card } from './ui/card'
import { FaUserAlt } from 'react-icons/fa'

interface PatientInfoCardProps {
	firstName: string | null
	lastName: string | null
	insuranceNumber: string | null
	gender: string | null
	birthDate: string | null
	vpNr: string | null
	telephoneNumber: string | null
	address: string | null
}

const PatientInfoCard = ({
	firstName,
	lastName,
	insuranceNumber,
	gender,
	birthDate,
	vpNr,
	telephoneNumber,
	address
}: PatientInfoCardProps) => {
	return (
		<Card className="space-y-2 p-4 shadow-md shadow-black/20 sm:w-[50%]">
			{/* FIRST ROW */}
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-2 text-blue-600">
					<div className="flex h-12 w-12 items-center justify-center rounded-sm bg-blue-100">
						<FaUserAlt className="h-5 w-5" />
					</div>
					<div className="flex flex-col">
						<p className="text-sm font-semibold">Insured person</p>
						<h3 className="text-lg font-semibold">
							{firstName} {lastName}
						</h3>
					</div>
				</div>
				<div className="flex flex-col">
					<p className="text-sm text-gray-500">Insurance number</p>
					<h3 className="text-lg font-semibold">{insuranceNumber}</h3>
				</div>
			</div>
			{/* SECOND ROW */}
			<div className="mt-4 grid grid-cols-3 gap-4 text-sm">
				<div>
					<p className="text-gray-500">Gender:</p>
					<p className="font-semibold">{gender}</p>
				</div>
				<div>
					<p className="text-gray-500">Date of Birth:</p>
					<p className="font-semibold">{birthDate}</p>
				</div>
				<div>
					<p className="text-gray-500">VP Number:</p>
					<p className="font-semibold">{vpNr}</p>
				</div>
			</div>
			{/* THIRD ROW */}
			<div>
				<p className="text-gray-500">Telephone:</p>
				<p className="font-semibold">{telephoneNumber}</p>
			</div>
			<div className="col-span-2">
				<p className="text-gray-500">Address:</p>
				<p className="font-semibold">{address}</p>
			</div>
		</Card>
	)
}

export default PatientInfoCard
