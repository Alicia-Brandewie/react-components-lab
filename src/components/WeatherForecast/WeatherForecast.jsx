import  './WeatherForecast.css';

const WeatherForecast = (props) => {
    const { weather } = props
    return ( 
<div className="weather">
  <h2>{weather.day}</h2>
  <img src="{weather.img}" alt="{weather.igAlt" />
  <p><span>conditions:{weather.conditions} </span>current weather conditions</p>
  <p><span>time:{weather.time} </span>time of day</p>
</div>
    );
};


export default WeatherForecast;
