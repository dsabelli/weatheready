export interface Location {
  city?: string;
  name?: string;
  state?: string;
  country?: string;
  lat: string;
  lon: string;
}

export interface IconProps {
  rotate?: number;
  className?: string;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MinuteWeather {
  dt: number;
  precipitation: number;
}

export interface DailyWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  rain: number;
  snow: number;
  uvi: number;
}

export interface Alerts {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
}

export interface CurrentWeather {
  rain: { "1h": number };
  snow: { "1h": number };
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  pop?: number;
}

export interface OneCallData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeather;
  hourly: CurrentWeather[];
  minutely: MinuteWeather[];
  daily: DailyWeather[];
  alerts: Alerts[];
}

export interface AutocompleteFeatures {
  bbox: number[];
  geometry: {
    coordinates: number[];
    type: string;
  };
  properties: {
    address_line1?: string;
    address_line2?: string;
    category?: string;
    city?: string;
    country?: string;
    country_code?: string;
    county?: string;
    datasource?: {
      attribution: string;
      license: string;
      sourcename: string;
      url: string;
    };
    formatted?: string;
    hamlet?: string;
    lat: number;
    lon: number;
    name?: string;
    place_id?: string;
    postcode?: string;
    rank?: {
      confidence: number;
      confidence_city_level: number;
      importance: number;
      match_type: string;
    };
    result_type?: string;
    state?: string;
    state_code?: string;
    village?: string;
  };
  type: string;
}
interface AutocompleteQuery {
  parsed: {
    city?: string;
    expected_type?: string;
  };
  text: string;
  type: string;
}

export interface AutocompleteData {
  features: AutocompleteFeatures[];
  query: AutocompleteQuery;
}
interface ReverseLocationResults {
  properties: {
    datasource?: {
      attribution?: string;
      license?: string;
      sourcename?: string;
      url?: string;
    };
    name?: string;
    street?: string;
    housenumber?: string;
    suburb?: string;
    district?: string;
    city?: string;
    postcode?: string;
    country?: string;
    country_code?: string;
    lon: number;
    lat: number;
    distance?: string;
    result_type?: string;
    formatted?: string;
    address_line1?: string;
    address_line2?: string;
    category?: string;
    rank: {
      popularity?: string;
    };
    place_id?: string;
    state?: string;
    state_code?: string;
  };
  bbox?: number[];
}
export interface ReverseLocationData {
  features: ReverseLocationResults[];
}

//export interface MainWeather {
//   feels_like: number;
//   grnd_level?: number;
//   humidity: number;
//   pressure: number;
//   sea_level?: number;
//   temp: number;
//   temp_kf?: number;
//   temp_max: number;
//   temp_min: number;
// }

// export interface Wind {
//   deg: number;
//   gust: number;
//   speed: number;
// }

// export interface WeatherData {
//   base: string;
//   clouds: {
//     all: number;
//   };
//   cod: number;
//   coord: {
//     lat: number;
//     lon: number;
//   };
//   dt: number;
//   id: number;
//   main: MainWeather;
//   name: string;
//   sys: {
//     country: string;
//     id: number;
//     sunrise: number;
//     sunset: number;
//     type: number;
//   };
//   timezone: number;
//   weather: Weather[];
//   wind: Wind;
// }

// export interface ListWeather {
//   dt: number;
//   visibility: number;
//   pop: number;
//   clouds: {
//     all: number;
//   };
//   dt_txt: string;
//   sys: {
//     pod: string;
//   };
//   main: MainWeather;
//   rain: {
//     "3h": number;
//   };
//   snow: {
//     "3h": number;
//   };
//   weather: Weather[];
//   wind: Wind;
// }

// export interface ForecastData {
//   cod: string;
//   message: number;
//   cnt: number;
//   list: ListWeather[];
//   city: {
//     country: string;
//     id: number;
//     name: string;
//     population: number;
//     sunrise: number;
//     sunset: number;
//     timezone: number;
//     coords: {
//       lat: number;
//       lon: number;
//     };
//   };
// }
