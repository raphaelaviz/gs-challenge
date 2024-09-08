'use client'

import { RiMenuUnfold3Line } from 'react-icons/ri'
import { Separator } from './ui/separator'
import { sideNavItems } from '@/lib/constants'
import { IoPower } from 'react-icons/io5'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import Link from 'next/link'
import { useConfirmation } from '@/hooks/use-confirmation-dialog'

const SideNav = () => {
	const { isOpen, toggle } = useConfirmation()
	return (
		<nav className="hidden min-h-screen w-14 flex-col items-center justify-between bg-[url('/sidenav-image.jpg')] bg-cover py-2 text-white sm:flex">
			<div className="flex flex-col items-center">
				<button className="rounded-lg p-2 text-xl font-bold hover:bg-white/20">
					<RiMenuUnfold3Line className="h-4 w-4" />
				</button>
				<button className="rounded-lg p-2 text-lg hover:bg-white/20">
					ZS
				</button>
				<Separator className="mb-4 mt-1 bg-white opacity-20" />

				{sideNavItems.map((item) => (
					<Link href={item.href} key={item.id}>
						<button
							key={item.id}
							className="rounded-lg p-2 hover:bg-white/20"
						>
							<item.icon className="h-5 w-5" />
						</button>
					</Link>
				))}
			</div>

			<div className="flex flex-col items-center space-y-1">
				<Link href="#" className="mb-3 text-xs opacity-50">
					About
				</Link>
				<Separator className="bg-white opacity-20" />
				<button className="rounded-lg p-2 text-base hover:bg-white/20">
					SU
				</button>
				<button
					className="rounded-lg p-2 hover:bg-white/20"
					onClick={() => toggle(true)}
				>
					<IoPower className="h-4 w-4" />
				</button>
				<Separator className="bg-white opacity-20" />
				<button className="rounded-lg p-2 hover:bg-white/20">
					<IoIosInformationCircleOutline className="h-3 w-3" />
				</button>
			</div>
		</nav>
	)
}

export default SideNav
