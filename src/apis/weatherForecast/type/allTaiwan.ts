// 全台灣鄉鎮預報的type
export interface ElementValue {
  value: string
  measures: string
}

export interface Time {
  startTime?: string
  endTime?: string
  dataTime?: string
  elementValue: ElementValue[]
}

export interface WeatherElement {
  elementName: string
  description: string
  time: Time[]
}

export interface Location {
  locationName: string
  geocode: string
  lat: string
  lon: string
  weatherElement: WeatherElement[]
}

export interface ResultField {
  id: string
  type: string
}

export interface Result {
  fields: ResultField[]
}

export interface Record {
  datasetDescription: string
  locationsName: string
  dataid: string
  location: Location[]
}

export interface Records {
  locations: Record[]
}

export interface allTaiwanWeatherData {
  data: {
    success: string
    result: Result
    records: Records
  }
}
