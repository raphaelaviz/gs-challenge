export interface ScorePointsInfo {
	currentScorePoints: number
	dailyGoal: number
}

export interface Task {
	id: number
	insurance_number: string | null
	status: 'New' | 'Done' | 'Escalated'
	insured_person_first_name: string | null
	insured_person_last_name: string | null
	gender: 'männlich' | 'weiblich' | 'divers' | null
	birthdate: string | null
	vpnr: string | null
	telephone_number: string | null
	address: string | null
	description: string | null
	score_points: number | null
	created_at: Date
	updated_at: Date
	completed_at: Date
}

export interface WeatherData {
	coord: {
		lon: number
		lat: number
	}
	weather: {
		id: number
		main: string
		description: string
		icon: string
	}[]
	base: string
	main: {
		temp: number
		feels_like: number
		temp_min: number
		temp_max: number
		pressure: number
		humidity: number
		sea_level: number
		grnd_level: number
	}
	visibility: number
	wind: {
		speed: number
		deg: number
		gust: number
	}
	clouds: {
		all: number
	}
	dt: number
	sys: {
		type: number
		id: number
		country: string
		sunrise: number
		sunset: number
	}
	timezone: number
	id: number
	name: string
	cod: number
}
