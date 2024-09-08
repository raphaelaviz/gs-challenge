'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Task } from '@/types'
import React from 'react'
import { FaClipboardCheck } from 'react-icons/fa'
import { formatDate } from '@/lib/utils'

export const columns: ColumnDef<Task>[] = [
	//*********** Task description column *******/

	{
		accessorKey: 'description',

		cell: ({ row }) => (
			<div className="flex w-40 items-center text-xs font-semibold sm:w-full sm:text-sm">
				<FaClipboardCheck className="mr-2 hidden h-5 w-5 sm:flex" />
				{row.getValue('description')}
			</div>
		),
		enableSorting: false,
		enableHiding: false
	},

	//*********** Status column *******/
	// This column's content isn't being rendered in order to fit the design, but the below object
	// has to be present in order to allow the filtering by status feature.
	{
		accessorKey: 'status',

		cell: ({ row }) => (
			<div className="flex w-20 items-center justify-end bg-pink-500 text-xs font-semibold sm:text-sm">
				{/* <FaClipboardCheck className="mr-2 h-5 w-5" />
				{row.getValue('status')} */}
			</div>
		),
		enableSorting: false,
		enableHiding: false
	},

	//*********** Date of completion column *******/
	{
		accessorKey: 'completed_at',
		cell: ({ row }) => {
			const date: Date = row.getValue('completed_at')
			return (
				<div className="text-xs font-semibold sm:text-sm">
					{formatDate(date)}
				</div>
			)
		}
	}
]
