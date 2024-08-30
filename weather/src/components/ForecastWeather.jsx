import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ForecastWeatherRow from "./ForecastWeatherRow";


const ForecastWeather = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [forecastWeathers, setForecastWeathers] = useState([]);

    const filterForecastWeather = (weatherObj) => {

        const filteredWeatherObj = weatherObj.filter((element) => {
            return element.dt_txt.includes(' 00:00:00')
        })
        // console.log(filteredWeatherObj);
        setForecastWeathers(filteredWeatherObj);
        setIsLoading(false);
    }

    const getForecastWeather = (city) => {

        fetch('https://api.openweathermap.org/data/2.5/forecast?appid=7d92ebbfe5c767a95debf50a30df7c93&lang=it&units=metric&q=' + city)
            .then(response => {
                if (response.ok) {
                    // la chiamata ha tornato 200
                    return response.json()
                } else {
                    // la chiamata ha tornato 400, 401, 403, 404, 500
                    throw new Error('La chiamata non è andata a buon fine')
                }
            })
            .then(searchObj => {
                setTimeout(() => {
                    filterForecastWeather(searchObj.list);
                    setIsLoading(false);
                }, 1000);
            })
            .catch(error => {
                console.error(error);
            })

    }

    useEffect(() => {
        setIsLoading(true);
        getForecastWeather(props.city);
    }, [props.city])

    return (
        <div className="dark-blue-trasparent w-100 p-3 rounded-4">
            <h6 className="fw-bold p-0 m-0">
                5gg Forecast
            </h6>
            {
                isLoading ? (
                    <Spinner variant="info" animation="grow" />
                ) : (
                    <>
                        {
                            forecastWeathers.map((weather) => (
                                <ForecastWeatherRow weather={weather} />
                            ))
                        }
                    </>
                )
            }
        </div>
    );
};

export default ForecastWeather;