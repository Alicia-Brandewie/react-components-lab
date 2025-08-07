import  './WeatherForecast.css';

const WeatherForecast = (props) => {
    const { weather } = props
    return ( 
<div className="weather">
  <h2>{weather.day}</h2>
  <img src={weather.img} alt={weather.igAlt} />
  <p><span>Conditions: </span>{weather.conditions}</p>
  <p><span>Time: </span> {weather.time}</p>
</div>
    );
};

export default WeatherForecast;
