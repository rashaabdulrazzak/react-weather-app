import React, { useEffect, useState } from 'react'
import '../components/style.css'
import Card from './Card'

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState('istanbul')
  const [tempInfo, setTempInfo] = useState({})

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.weatherapi.com/v1/current.json?key=5865bf5cf35c47aa908115610230604&q=${searchTerm}&aqi=no`

      let res = await fetch(url)
      let data = await res.json()
      console.log(data)
      const { temp_c, humidity, pressure_in } = data.current
      console.log(temp_c, humidity, pressure_in)
      const { text: weatherType } = data.current.condition
      const { icon } = data.current.condition
      const { code } = data.current.condition
      const { feelslike_f: expectation } = data.current
      console.log(expectation)
      const { name } = data.location
      const { wind_kph: speed } = data.current

      const { country } = data.location

      const myNewWeatherInfo = {
        temp_c,
        humidity,
        pressure_in,
        weatherType,
        icon,
        code,
        name,
        speed,
        expectation,
        country,
      }

      setTempInfo(myNewWeatherInfo)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWeatherInfo()
  }, [])

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search city.."
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      {/* This the the weather details page */}
      <Card {...tempInfo} />
    </>
  )
}

export default SearchMain
