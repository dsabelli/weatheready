export interface Location {
  city: string;
  state: string;
  country: string;
}

export interface GeoData {
  name: string;
  local_names: { en: string };
  lat: string;
  lon: string;
  country: string;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeather {
  feels_like: number;
  grnd_level?: number;
  humidity: number;
  pressure: number;
  sea_level?: number;
  temp: number;
  temp_kf?: number;
  temp_max: number;
  temp_min: number;
}

export interface Wind {
  deg: number;
  gust: number;
  speed: number;
}

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: MainWeather;
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  weather: Weather[];
  wind: Wind;
}

export interface ListWeather {
  dt: number;
  visibility: number;
  pop: number;
  clouds: {
    all: number;
  };
  dt_txt: string;
  sys: {
    pod: string;
  };
  main: MainWeather;
  rain: {
    "3h": number;
  };
  weather: Weather[];
  wind: Wind;
}

export interface ForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: ListWeather[];
  city: {
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
    coords: {
      lat: number;
      lon: number;
    };
  };
}
