import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { WeatherData } from '@/types'

export const useWeatherData = () => {
	const [coordinates, setCoordinates] = useState<{
		lat: number
		lon: number
	} | null>(null)

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				setCoordinates({
					lat: position.coords.latitude,
					lon: position.coords.longitude
				})
			})
		} else {
			console.error('Geolocation not available')
		}
	}, [])

	const {
		data: weatherData,
		isPending,
		error
	} = useQuery<WeatherData, Error>({
		queryKey: ['weather', coordinates?.lat, coordinates?.lon],
		queryFn: async () => {
			if (!coordinates) throw new Error('Coordinates not available')
			//once again I'm hardcoding the credentials for practical purposes
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=7be44bbe200353a74c71bfc6b4d00e96&units=metric`
			)
			if (!response.ok) {
				throw new Error('Failed to fetch weather data')
			}
			return response.json()
		},
		refetchInterval: 3 * 60 * 1000,
		refetchOnWindowFocus: false,
		staleTime: 3 * 60 * 1000
	})

	return { weatherData, isPending, error }
}
