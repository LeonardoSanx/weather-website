import infoStyles from "../styles/Infos.module.css";

const Infos = ({ weather }) => {
  return (
    <div>
      <div className={infoStyles.content}>
        <h2>
          {weather.location.name}, {weather.location.region}
        </h2>

        <div className={infoStyles.detail}>
          <div className={infoStyles.line}></div>
        </div>

        <div className={infoStyles.detail}>
          <p className={infoStyles.atribute}>Weather</p>
          <p className={infoStyles.value}>{weather.current.condition.text}</p>
        </div>

        <div className={infoStyles.detail}>
          <p className={infoStyles.atribute}>Min</p>
          <p className={infoStyles.value}>
            {weather.forecast.forecastday[0].day.mintemp_c}°
          </p>
        </div>

        <div className={infoStyles.detail}>
          <p className={infoStyles.atribute}>Max.</p>
          <p className={infoStyles.value}>
            {weather.forecast.forecastday[0].day.maxtemp_c}°
          </p>
        </div>

        <div className={infoStyles.detail}>
          <p className={infoStyles.atribute}>Feels like</p>
          <p className={infoStyles.value}>{weather.current.feelslike_c}°</p>
        </div>

        <div className={infoStyles.detail}>
          <p className={infoStyles.atribute}>Clouds</p>
          <p className={infoStyles.value}>{weather.current.cloud}%</p>
        </div>

        <div className={infoStyles.detail}>
          <p className={infoStyles.atribute}>Humidity</p>
          <p className={infoStyles.value}>{weather.current.humidity}%</p>
        </div>

        <div className={infoStyles.detail}>
          <p className={infoStyles.atribute}>Wind</p>
          <p className={infoStyles.value}>{weather.current.wind_kph}k/h</p>
        </div>
      </div>
    </div>
  );
};

export default Infos;
