import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import Infos from "../components/Infos";
import Main from "../components/Main";
import Search from "../components/Search";
import Background from "../components/Background";
import React from "react";
import { useState, useEffect } from "react";
import { server } from "../config";

export default function Home({ we, api }) {
  const [toggle, setToggle] = useState(false);
  const [loc, setLoc] = useState("");
  const [weather, setWeather] = useState(we);
  const [day, setDay] = useState("");
  const [imageText, setImageText] = useState("");

  const sunny = ["Sunny", "Clear"];
  const clouds = ["Partly cloudy"];
  const cloudy = ["Cloudy"];
  const overcast = ["Overcast"];
  const mist = ["Mist", "Fog", "Freezing fog"];
  const rain = [
    "Patchy rain possible",
    "Patchy light drizzle",
    "Light drizzle",
    "Patchy light rain",
    "Light rain",
    "Light rain shower",
  ];
  const storm = [
    "Moderate rain at times",
    "Moderate rain",
    "Heavy rain at times",
    "Heavy rain",
    "Moderate or heavy rain shower",
    "Torrential rain shower",
  ];
  const snow = [
    "Blowing snow",
    "Patchy snow possible",
    "Patchy light snow",
    "Light snow",
    "Patchy moderate snow",
    "Light snow showers",
  ];
  const blizzard = [
    "Blizzard",
    "Moderate snow",
    "Patchy heavy snow",
    "Heavy snow",
    "Moderate or heavy snow showers",
  ];
  const sleet = [
    "Patchy sleet possible",
    "Light sleet",
    "Moderate or heavy sleet",
    "Ice pellets",
    "Light sleet showers",
    "Moderate or heavy sleet showers",
    "Light showers of ice pellets",
    "Moderate or heavy showers of ice pellets",
  ];
  const thunder = [
    "Thundery outbreaks possible",
    "Patchy light rain with thunder",
    "Moderate or heavy rain with thunder",
    "Patchy light snow with thunder",
    "Moderate or heavy snow with thunder",
  ];
  const freezing = [
    "Patchy freezing drizzle possible",
    "Freezing drizzle",
    "Heavy freezing drizzle",
    "Light freezing rain",
    "Moderate or heavy freezing rain",
  ];

  useEffect(async () => {
    if (loc == "") {
      return;
    } else {
      const res = await fetch(
        `${server}://api.weatherapi.com/v1/forecast.json?key=${api}&q=${loc}&days=1`
      )
        .then((response) => response.json())
        .then((response) => setWeather(response));
    }
    setLoc("");
  }, [toggle]);

  useEffect(() => {
    setDay(weather.current.is_day == 1 ? "day" : "night");
    setImageText(getImage);
  }, [weather]);

  // GET IMAGE
  const getImage = () => {
    const text = weather.current.condition.text;
    let weatherText = "sunny";
    if (sunny.includes(text)) {
      weatherText = "sunny";
    } else if (clouds.includes(text)) {
      weatherText = "clouds";
    } else if (cloudy.includes(text)) {
      weatherText = "cloudy";
    } else if (overcast.includes(text)) {
      weatherText = "overcast";
    } else if (mist.includes(text)) {
      weatherText = "mist";
    } else if (rain.includes(text)) {
      weatherText = "rain";
    } else if (storm.includes(text)) {
      weatherText = "storm";
    } else if (snow.includes(text)) {
      weatherText = "snow";
    } else if (blizzard.includes(text)) {
      weatherText = "blizzard";
    } else if (sleet.includes(text)) {
      weatherText = "sleet";
    } else if (thunder.includes(text)) {
      weatherText = "thunder";
    } else if (freezing.includes(text)) {
      weatherText = "freezing";
    }
    return weatherText;
  };

  const changeLoc = (e) => {
    setLoc(e.target.value);
  };
  return (
    <div>
      <Head>
        <title>"Weather FrontEnd"</title>
        <meta name="keywords" content="frontend weather api" />
      </Head>
      <div>
        <Background day={day} imageText={imageText} />
        <div className={styles.container}>
          <Main weather={weather} />
          <div className={styles.info}>
            <span className={styles.blurSearch}></span>
            <span className={styles.blur}></span>
            <Search
              loc={loc}
              onChange={changeLoc}
              onKeyPress={() => setToggle(!toggle)}
              onClick={() => setToggle(!toggle)}
            />
            <Infos weather={weather} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  require("dotenv").config();
  const api = process.env.API_KEY;
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${api}&q=rio de janeiro&days=1`
  );

  const we = await res.json();

  return {
    props: {
      we,
      api,
    },
  };
};
