'use client'

import * as React from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import { Column } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
	CommandSeparator
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Filter, SquareMousePointer } from 'lucide-react'

interface DataTableFacetedFilterProps<TData, TValue> {
	column?: Column<TData, TValue>
}

export function TasksTableStatusFilter<TData, TValue>({
	column
}: DataTableFacetedFilterProps<TData, TValue>) {
	const facets = column?.getFacetedUniqueValues()

	// The line below can be used to allow multiple selected values
	// const selectedValues = new Set(column?.getFilterValue() as string[])
	const selectedValue = column?.getFilterValue() as string | undefined

	if (!facets) {
		return null
	}

	const statuses = ['New', 'Done', 'Escalated']

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" size="sm" className="h-7">
					<Filter className="mr-2 h-4 w-4" />
					Filter by status
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0" align="start">
				<Command>
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup>
							{statuses.map((status) => {
								const count = facets.get(status)

								// const isSelected = selectedValues.has(status) used to allow multiple selected values
								const isSelected = selectedValue === status
								return (
									<CommandItem
										key={status}
										/* used to allow multiple selected values

										 onSelect={() => {
										 	if (isSelected) {
										 		selectedValues.delete(status)
										 	} else {
										 		selectedValues.add(status)
										 	}
										 	const filterValues =
										 		Array.from(selectedValues)
										 	column?.setFilterValue(
										 		filterValues.length
										 			? filterValues
										 			: undefined
										 	)
										 }}*/

										onSelect={() => {
											column?.setFilterValue(
												isSelected ? undefined : status
											)
										}}
									>
										<div
											className={cn(
												'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
												isSelected
													? 'bg-primary text-primary-foreground'
													: 'opacity-50 [&_svg]:invisible'
											)}
										>
											<CheckIcon
												className={cn('h-4 w-4')}
											/>
										</div>
										<span>{status}</span>
										<span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
											{count}
										</span>
									</CommandItem>
								)
							})}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
