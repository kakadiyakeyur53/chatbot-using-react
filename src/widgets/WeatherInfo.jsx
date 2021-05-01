/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=54dadd0dc2a3fe8d31eb9d376a84c24d
//http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=54dadd0dc2a3fe8d31eb9d376a84c24d
//defination  of WeatherInfo widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const WeatherInfo = (props) => {
  const [data, setData] = useState(null);
  const [city, setcity] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      console.log(city);
      const url = `http://api.weatherapi.com/v1/current.json?key=6db8b9619d9d4bddb0e155940213004&q=${city}&aqi=yes`;
      const response = await fetch(url);
      const resJSON = await response.json();
      setData(resJSON);
      console.log(data);
    };
    fetchApi();
  }, [city]);

  return (
    <>
      <TextField
        id="standard-basic"
        label="city name"
        type="text"
        name="cityname"
        className="text-center"
        value={city}
        onChange={(event) => {
          setcity(event.target.value);
        }}
      />

      <div>
        {data ? (
          !data.error ? (
            <Card className="my-3" style={{ maxWidth: 345, border: "block" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <h4>{city}</h4>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <h5>
                      <span style={{ fontWeight: "bold" }}>Country:</span>
                      {data.location.country}{" "}
                      <span style={{ fontWeight: "bold" }}>Region:</span>
                      {data.location.region}
                    </h5>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <h6>
                      <span style={{ fontWeight: "bold" }}>Temp:</span>
                      {data.current.temp_c}°C
                    </h6>
                    <h6>
                      <span style={{ fontWeight: "bold" }}>Wind:</span>
                      {data.current.wind_kph} kph {data.current.wind_dir}
                    </h6>
                    <h6>
                      <span style={{ fontWeight: "bold" }}>Local Time:</span>
                      {data.location.localtime}
                    </h6>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ) : (
            <h3>data not found</h3>
          )
        ) : (
          <h3>data not found</h3>
        )}
      </div>
    </>
  );
};

export default WeatherInfo;
