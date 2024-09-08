import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface DataTablePaginationProps<TData> {
	table: Table<TData>
}

export function TasksTablePaginationButtons<TData>({
	table
}: DataTablePaginationProps<TData>) {
	return (
		<div className="flex items-center justify-between text-blue-600 sm:px-6">
			<Button
				variant="ghost"
				onClick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
			>
				<span className="sr-only">Go to previous page</span>
				<ChevronLeft className="mr-1 h-3 w-3" /> Older Tasks
			</Button>
			<Button
				variant="ghost"
				onClick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
			>
				<span className="sr-only">Go to next page</span>
				New Tasks <ChevronRight className="ml-1 h-3 w-3" />
			</Button>
		</div>
	)
}
