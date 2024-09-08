import { Card } from './ui/card'

interface CardsSectionProps {
	taskScore: number | null
}
const CardsSection = ({ taskScore }: CardsSectionProps) => {
	const cardsData = [
		{
			title: 'Fee regulation',
			value: '3/4',
			subtitle: 'Tasks completed'
		},
		{
			title: 'Tariff regulation',
			value: '0/2',
			subtitle: 'Tasks completed'
		},
		{
			title: 'Task score',
			value: taskScore?.toString() || '0',
			subtitle: 'Scorepoints'
		},
		{
			title: 'Skill level',
			value: 'Basis',
			subtitle: null
		}
	]
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{cardsData.map((card, index) => (
				<Card
					key={index}
					className="flex flex-col items-center justify-center py-2 shadow-md shadow-black/20"
				>
					<h4 className="text-xs font-semibold">{card.title}</h4>
					<span className="text-xl font-bold text-blue-600">
						{card.value}
					</span>
					{card.subtitle && (
						<span className="text-xs font-semibold">
							{card.subtitle}
						</span>
					)}
				</Card>
			))}
		</div>
	)
}

export default CardsSection
