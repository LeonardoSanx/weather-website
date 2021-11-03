import mainStyles from "../styles/Main.module.css";

const Main = ({ weather }) => {
  return (
    <div className={mainStyles.container}>
      <div className={mainStyles.temp}>
        <h1>{weather.current.temp_c}°</h1>
        <div className={mainStyles.name}>
          <h2>{weather.location.name}</h2>
          <p>{weather.location.localtime}</p>
        </div>
      </div>
      <div className={mainStyles.power}>
        <p>
          Powered by:
          <a
            href="https://www.weatherapi.com/"
            title="Free Weather API"
            target="_blank"
          >
            WeatherAPI.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Main;
