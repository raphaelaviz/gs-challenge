'use client'

import * as React from 'react'
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'

import { TasksTablePaginationButtons } from './tasks-table-pagination-buttons'
import Link from 'next/link'
import { useMounted } from '@/hooks/use-mounted'
import LoadingSpinner from '../loading-spinner'
import { TasksTableStatusFilter } from './tasks-table-status-filter'

// had to extend the TData type to include id to be used on the Link href

interface DataTableProps<TData extends { id: string | number }, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

export function TasksTable<TData extends { id: string | number }, TValue>({
	columns,
	data
}: DataTableProps<TData, TValue>) {
	const mounted = useMounted()

	const [rowSelection, setRowSelection] = React.useState({})
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({})
	const [columnFilters, setColumnFilters] =
		React.useState<ColumnFiltersState>([])
	const [sorting, setSorting] = React.useState<SortingState>([])

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			columnVisibility,
			rowSelection,
			columnFilters
		},
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		initialState: {
			pagination: {
				pageSize: 5
			}
		}
	})

	return (
		<div className="flex h-full flex-col">
			<div className="mb-2 flex-col items-center justify-between sm:flex sm:flex-row">
				<h3 className="mb-2 text-base font-semibold">
					Recently completed tasks
				</h3>

				<div className="flex space-x-2">
					{table.getColumn('status') && (
						<TasksTableStatusFilter
							column={table.getColumn('status')}
						/>
					)}

					<input
						placeholder="Search tasks..."
						value={
							(table
								.getColumn('description')
								?.getFilterValue() as string) ?? ''
						}
						onChange={(event) =>
							table
								.getColumn('description')
								?.setFilterValue(event.target.value)
						}
						className="flex h-7 w-72 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
					/>
				</div>
			</div>
			<div className="flex flex-grow flex-col">
				{mounted ? (
					<div className="flex-grow overflow-auto">
						<Table>
							{table.getRowModel().rows?.length ? (
								table.getRowModel().rows.map((row) => (
									<Link
										href={`/tasks/${row.original.id}`}
										className="mb-2 flex cursor-pointer justify-between rounded-lg bg-[#e6eef9] p-1 hover:bg-[#ccd4e1]"
										key={row.id}
										data-state={
											row.getIsSelected() && 'selected'
										}
									>
										{row.getVisibleCells().map((cell) => (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										))}
									</Link>
								))
							) : (
								<TableRow>
									<TableCell
										colSpan={columns.length}
										className="h-24 text-center text-lg"
									>
										No tasks matching your search.
									</TableCell>
								</TableRow>
							)}
						</Table>
					</div>
				) : (
					<div className="flex flex-grow items-center justify-center">
						<LoadingSpinner className="text-blue-600" />
					</div>
				)}

				<TasksTablePaginationButtons table={table} />
			</div>
		</div>
	)
}
