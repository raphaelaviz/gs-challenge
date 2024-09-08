import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'

interface LoadingProps {
	className?: string
}

const LoadingSpinner = ({ className }: LoadingProps) => {
	return (
		<div className={cn('text-3xl', className)}>
			<LoaderCircle className="animate-spin" />
		</div>
	)
}

export default LoadingSpinner
