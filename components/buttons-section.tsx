import { Check, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from './ui/button'

const ButtonsSection = () => {
	return (
		<div className="flex justify-between">
			<Button
				variant="ghost"
				className="px-2 py-1 text-xs text-blue-600 hover:text-blue-700 sm:px-3"
			>
				<X className="mr-1 h-4 w-4 sm:h-5 sm:w-5" /> Reject task
			</Button>
			<Button className="flex items-center bg-blue-500 px-2 py-1 text-xs hover:bg-blue-600 sm:px-3">
				<Check className="mr-1 h-4 w-4 sm:h-5 sm:w-5" /> Task completed
			</Button>
		</div>
	)
}

export default ButtonsSection
