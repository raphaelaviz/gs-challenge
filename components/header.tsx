import { FaClipboardCheck } from 'react-icons/fa'

const Header = () => {
	return (
		<div className="mb-6 flex items-center">
			<div className="mr-2 flex items-center justify-center rounded-lg bg-gray-100 p-2">
				<FaClipboardCheck className="h-5 w-5" />
			</div>
			<div>
				<h2 className="text-xl font-semibold">Alex Azubi</h2>
				<p className="text-xs font-semibold text-blue-500">
					Taskmanager
				</p>
			</div>
		</div>
	)
}

export default Header
