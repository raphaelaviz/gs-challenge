'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sideNavItems } from '@/lib/constants'
import { RiMenuUnfold3Line } from 'react-icons/ri'
import { Separator } from './ui/separator'
import { IoPower } from 'react-icons/io5'
import { IoIosInformationCircleOutline } from 'react-icons/io'

export default function MobileNav() {
	return (
		<nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around rounded-t-sm bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-2 sm:hidden">
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
			<button className="rounded-lg text-lg font-semibold hover:bg-white/20">
				ZS
			</button>
		</nav>
	)
}
