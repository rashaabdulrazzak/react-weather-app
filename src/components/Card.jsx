import React, { useState, useEffect } from 'react'

function Card({
  temp_c,
  humidity,
  pressure_in,
  weatherType,
  icon,
  code,
  name,
  speed,
  country,
  sunset,
  expectation,
}) {
  const [weatherState, setWeatherState] = useState('')
  console.log('weatherType', weatherType)
  useEffect(() => {
    if (weatherType) {
      console.log('weatherType', weatherType)
      switch (weatherType) {
        case 'Clouds':
          setWeatherState('wi-day-cloudy')
          break
        case 'Haze':
          setWeatherState('wi-fog')
          break
        case 'Clear':
          setWeatherState('wi-day-sunny')
          break
        case 'Mist':
          setWeatherState('wi-dust')
          break
        case 'Moderate rain':
          setWeatherState('wi-day-rain')
          break

        default:
          setWeatherState('wi-day-sunny')
          break
      }
    }
  }, [weatherType])

  //conveting the seconds in time
  let sec = sunset
  let date = new Date(sec * 1000)
  let timeStr = `${date.getHours()}:${date.getMinutes()}`
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <img src={icon} alt="icon" height={100} />
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp_c}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherType}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={'wi wi-sunset'}></i>
              </p>
              <p className="extra-info-leftside">
                {code}
                <br />
                code
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={'wi wi-humidity'}></i>
              </p>
              <p className="extra-info-leftside">
                {expectation} <br />
                feels like
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={'wi wi-rain'}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure_in} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={'wi wi-strong-wind'}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Card
