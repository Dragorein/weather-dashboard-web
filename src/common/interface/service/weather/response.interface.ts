export interface resWeatherSearchI {
  id: string;
  city: string;
  region: string;
  country: string;
  lon: number;
  lat: number;
  condition: string;
  condition_img: string;
  humidity: string;
  cloud: number;
  precip_mm: number;
  temp_c: number;
  temp_f: number;
  temp_feel_c: number;
  temp_feel_f: number;
  heat_index_c: number;
  heat_index_f: number;
  uv: number;
  date: string;
  time: string;
}

export interface resForecastSearchI {
  id: string;
  condition: string;
  condition_img: string;
  humidity: string;
  cloud: number;
  precip_mm: number;
  temp_c: number;
  temp_f: number;
  temp_feel_c: number;
  temp_feel_f: number;
  heat_index_c: number;
  heat_index_f: number;
  uv: number;
  date: string;
  time: string;
}
