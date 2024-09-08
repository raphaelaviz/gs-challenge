'use client'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { useConfirmation } from '@/hooks/use-confirmation-dialog'
import { Button } from './ui/button'
import Link from 'next/link'
const ConfirmationDialog = () => {
	const { isOpen, toggle } = useConfirmation()

	return (
		<Dialog open={isOpen} onOpenChange={toggle}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						Are you sure you want to turn off the system?
					</DialogTitle>
					<DialogDescription>
						You will be redirected to Google.com.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="flex items-center space-x-3">
					<Button variant="outline" onClick={() => toggle(false)}>
						Cancel
					</Button>
					<Link href="https://www.google.com/">
						<Button>Turn off</Button>
					</Link>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default ConfirmationDialog
