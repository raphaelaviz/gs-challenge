import loadingWheather from '@/public/cloudy.gif'

const WeatherLoadingIndicator = () => {
	return (
		<div className="flex h-full items-center justify-center">
			<img
				src={loadingWheather.src}
				alt="Loading weather data..."
				className="size-20"
			/>
		</div>
	)
}

export default WeatherLoadingIndicator
