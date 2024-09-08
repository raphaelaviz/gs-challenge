'use client'

import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart
} from 'recharts'

import { ChartConfig, ChartContainer } from '@/components/ui/chart'

const chartData = [{ points: 143, fill: 'url(#blueGradient)' }]

const chartConfig = {
	points: {
		label: 'points'
	}
} satisfies ChartConfig

export function ScorePointsChart() {
	return (
		<ChartContainer
			config={chartConfig}
			className="mx-auto aspect-square max-h-[200px]"
		>
			<RadialBarChart
				data={chartData}
				endAngle={100}
				innerRadius={80}
				outerRadius={140}
			>
				<defs>
					<linearGradient
						id="blueGradient"
						x1="0"
						y1="0"
						x2="0"
						y2="1"
					>
						<stop offset="0%" stopColor="#60a5fa" />
						<stop offset="100%" stopColor="#2563eb" />
					</linearGradient>
				</defs>
				<PolarGrid
					gridType="circle"
					radialLines={false}
					stroke="none"
					className="first:fill-muted last:fill-background"
					polarRadius={[86, 74]}
				/>
				<RadialBar dataKey="points" background />
				<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
					<Label
						content={({ viewBox }) => {
							if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
								return (
									<text
										x={viewBox.cx}
										y={viewBox.cy}
										textAnchor="middle"
										dominantBaseline="middle"
									>
										<tspan
											x={viewBox.cx}
											y={viewBox.cy}
											className="fill-blue-600 text-4xl font-bold"
										>
											{chartData[0].points.toLocaleString()}
										</tspan>
										<tspan
											x={viewBox.cx}
											y={(viewBox.cy || 0) + 24}
											className="font-semibold"
										>
											Your score points
										</tspan>
									</text>
								)
							}
						}}
					/>
				</PolarRadiusAxis>
			</RadialBarChart>
		</ChartContainer>
	)
}
