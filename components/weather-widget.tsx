'use client'

import WeatherLoadingIndicator from './weather-loading-indicator'
import { Droplets, MapPin, Thermometer, Wind } from 'lucide-react'
import { Separator } from './ui/separator'
import { useWeatherData } from '@/hooks/use-weather-data'

const WeatherWidget = () => {
	const { weatherData, isPending, error } = useWeatherData()

	if (isPending) return <WeatherLoadingIndicator />
	if (error)
		return (
			<div className="flex h-full items-center justify-center text-center text-2xl text-blue-600">
				{error.message}
			</div>
		)

	return (
		<div className="h-full w-full">
			{weatherData && (
				<div className="h-full w-full rounded-xl bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 p-4 text-white">
					<>
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
							<div className="mb-4 flex items-center gap-4 sm:mb-0">
								<div className="text-5xl sm:text-7xl">
									{Math.round(weatherData.main.temp)}°C
								</div>
								<div className="space-y-1">
									<div>
										<div className="flex items-center text-sm sm:text-base">
											{weatherData.name},{' '}
											{weatherData.sys.country}
											<MapPin className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
										</div>
									</div>

									<div className="text-xs font-medium sm:text-sm">
										{weatherData.weather[0].description
											.charAt(0)
											.toUpperCase() +
											weatherData.weather[0].description.slice(
												1
											)}
									</div>
								</div>
							</div>
							<img
								src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
								alt={weatherData.weather[0].description}
								className="h-16 w-16 sm:mx-0 sm:h-24 sm:w-24"
							/>
						</div>
						<Separator className="mb-6 mt-3" />
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
							<div className="flex flex-col items-start">
								<div className="flex items-center text-base sm:text-lg">
									Min/Max
									<Thermometer className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
								</div>
								<div className="text-sm font-medium sm:text-base">
									{Math.round(weatherData.main.temp_min)}°/
									{Math.round(weatherData.main.temp_max)}°
								</div>
							</div>
							<div className="flex flex-col items-start">
								<div className="flex items-center text-base sm:text-lg">
									Humidity
									<Droplets className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
								</div>
								<div className="text-sm font-medium sm:text-base">
									{weatherData.main.humidity} %
								</div>
							</div>
							<div className="col-span-2 flex flex-col items-start sm:col-span-1">
								<div className="flex items-center text-base sm:text-lg">
									Wind
									<Wind className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
								</div>
								<div className="text-sm font-medium sm:text-base">
									{weatherData.wind.speed.toFixed(1)} km/h
								</div>
							</div>
						</div>
					</>
				</div>
			)}
		</div>
	)
}

export default WeatherWidget
